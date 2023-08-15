import {json, error} from '@sveltejs/kit'

import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async (e: RequestEvent) => {
    return new Response();
}

export const POST: RequestHandler = async (e: RequestEvent) => {
    let user = { admin: true };

    if (!user.admin) {
        throw error(401, 'Unauthorized');
    }
    return json({ name: 'dog' });
};

export const DELETE: RequestHandler = async () => {
    return new Response();
};