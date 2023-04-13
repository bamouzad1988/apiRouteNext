import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "@/helper/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "cnnecting to db failed!" });
    return;
  }

  // POST
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid inputs!" });
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    try {
      const result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(200).json({ message: "added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "inserting data failed!" });
    }
  }
  // GET
  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comment: documents });
    } catch (error) {
      res.status(500).json({ message: "getting data failed!" });
    }
  }
  client.close();
}

export default handler;
