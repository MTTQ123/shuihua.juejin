import { Service } from '@/lib/api';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const s = new Service();
    const topbars = await s.getAll("topbarPlate", {});

    res.status(200).json(topbars)
}