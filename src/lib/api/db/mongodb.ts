import { MongoClient } from 'mongodb'

const MONGODB_URI = "mongodb://127.0.0.1:27017"

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = MONGODB_URI
const options = {}

let client = new MongoClient(uri, options);
// export let clientPromise
// let clientPromise: Promise<MongoClient> = client.connect();
let clientPromise = client.connect();

export const getClient = async () => {
  return clientPromise;
}