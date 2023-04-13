import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://bamouzad1988:YDgZ19Y7mvQfxIO8@cluster1.e9a3rna.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}
export async function insertDocument(client, collection, document) {
  const db = client.db();
  return await db.collection(collection).insertOne(document);
}
export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .sort(sort) //desc
    .toArray();
  return documents;
}
