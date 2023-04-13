import { connectDatabase, insertDocument } from "@/helper/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(420).json({ message: "invalide email address" });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "cnnecting to db failed!" });
      return;
    }
    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "inserting data failed!" });
      return;
    }

    res.status(200).json({ message: "Signed up!" });
  }
}

export default handler;
// bamouzad1988 user
// OQrGvLzkVdHCsO1e pass
