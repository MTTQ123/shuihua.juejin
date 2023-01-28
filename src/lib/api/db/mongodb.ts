import { MongoClient } from 'mongodb'
import { MONGODB_URI } from 'public/url';

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
