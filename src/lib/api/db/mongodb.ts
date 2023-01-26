import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = MONGODB_URI;
const options = {}

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export const getClient = async () => {
  return clientPromise;
}
