import { Db, MongoClient, ServerApiVersion } from 'mongodb';

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};
let cachedDb: Db;

export async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = new MongoClient(process.env.MONGODB_URI, options);

  await client.connect();

  const db = client.db('gendi');

  cachedDb = db;

  return db;
}
