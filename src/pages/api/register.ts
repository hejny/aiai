import type { NextApiRequest, NextApiResponse } from 'next';
import { getSupabaseForServer } from '../../utils/supabase/getSupabaseForServer';
import { string_url } from '../../utils/typeAliases';
import { isValidUrl } from '../../utils/validators/isValidUrl';
import { isValidWallpaperId } from '../../utils/validators/isValidWallpaperId';

interface RegisterResponse {
    // !!!
    message: string;
}

export default async function registerHandler(request: NextApiRequest, response: NextApiResponse<RegisterResponse>) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        return response.status(200).end();
    }

    if (request.method !== 'PUT') {
        return response.status(400).json({ message: 'Only PUT method is allowed' });
    }

    const wallpaperId = request.query.wallpaperId;
    const url = request.query.url;

    if (!isValidWallpaperId(wallpaperId)) {
        return response.status(400).json({ message: 'GET param wallpaperId is not valid UUID' });
    }

    if (!isValidUrl(url)) {
        return response.status(400).json({ message: 'GET param url is not valid URL' });
    }

    const selectResult = await getSupabaseForServer().from('Site').select('id').eq('url', url).limit(1);
    if (selectResult.data?.length || 0 > 0) {
        return response.status(400).json({ message: '[🔌] Site already registered' });
    }

    const insertResult = await getSupabaseForServer()
        .from('Site')
        .insert([{ wallpaperId, url: url as string_url }]);

    if (insertResult.status === 201) {
        return response.status(201).json({ message: '[🔌] Site registered' });
    } else {
        console.error(insertResult);
        return response.status(500).json({ message: '[🔌] Something went wrong during the site registration' });
    }
}

/**
 * TODO: Record an owner for each supabase table row @see https://supabase.com/docs/guides/auth/row-level-security
 * TODO: [🎞] Maybe do here some URL normalization
 */
