import { Service } from '@/lib/api';
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const s = new Service();
    const articles = await s.getAll("article", {});

    res.status(200).json(articles)
}
