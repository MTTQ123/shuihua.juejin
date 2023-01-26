import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = MONGODB_URI;
const options = {}

let client = new MongoClient(uri, options);
// export let clientPromise
// let clientPromise: Promise<MongoClient> = client.connect();
let clientPromise = client.connect();

export const getClient = async () => {
  if (await clientPromise) {
    console.log("成功");
    
  }
  return clientPromise;
}
