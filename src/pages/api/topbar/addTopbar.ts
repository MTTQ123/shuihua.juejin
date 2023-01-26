import { Service } from '@/lib/api';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const s = new Service();

    await s.addOrUpdateAll("topbarPlate", { list: JSON.parse(req.body) });

    res.status(200).json("成功");
}