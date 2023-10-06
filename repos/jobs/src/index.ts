import cors from "cors";
import express from "express";

import { SampleType } from "types";

const app = express();
const port = 5001;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/sampleData", (_, response) => {
  const data: SampleType[] = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Doe" },
    { id: "3", name: "John Smith" }
  ];
  response.json({ data });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
