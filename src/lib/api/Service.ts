import { getClient } from "./db/mongodb";

type Datas = {
    // 查询单个
    odi?: object // 查询单个时的条件

    // 查询全部
    count?: number, // 查询全部时，获取几个
    sortFun?: () => {}, //  查询全部时，排序的方法

    // 先删除全部，再添加多个
    list?: [], // 插入的列表

}

export class Service {
    async getOne(coll: string, opts: Datas) {
        const client = await getClient();
        const db = client.db("share");
        const article = db.collection(coll)
            .findOne(opts.odi||{});
        return article;
    }
    async getAll(coll: string, opts: Datas) {
        const client = await getClient();
        const db = client.db("share");
        const articles = db.collection(coll)
            .find({})
            .sort({})
            .limit(opts.count = 20)
            .toArray()
        return articles;
    }
    async addOrUpdateAll(coll: string, opts: Datas) {
        const client = await getClient();
        const db = client.db("share");
        db.collection(coll).deleteMany({});
        db.collection(coll)
            .insertMany(opts.list ?? []);
    }
}
