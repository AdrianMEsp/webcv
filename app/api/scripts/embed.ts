import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

async function embedCV() {
  const docs = [
    { id: "resumen", content: "Soy Adrian Espindola, fullstack developer..." },
    { id: "proyectos", content: "Proyecto Huellitas: app de adopción de mascotas..." },
    { id: "educacion", content: "Bootcamp Henry, UNLP..." },
  ];

  for (const doc of docs) {
    const embedding = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: doc.content,
    });

    await supabase.from("documents").insert({
      id: doc.id,
      content: doc.content,
      embedding: embedding.data[0].embedding,
    });
  }
}

embedCV();