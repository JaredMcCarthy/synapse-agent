import "dotenv/config";
import { Langbase } from "langbase";

const langbase = new Langbase({
  apiKey: process.env.LANGBASE_API_KEY!,
});

// async function main() {
//     const memory = langbase.memories.create({
//         name: '',
//         description: '',
//         embedding_model: ''
//     })
// }
//
// main()

async function main(){
    const memory = await langbase.memories.create({
        name: "knowledge-base",
        description: "memory made for AI model",
        embedding_model: "openai:text-embedding-3-large"
    })

    console.log('Memory made for AI:', memory)
}

main()



// luego de crear la funcionde la memoria correr en ternal para ver paquetes
//  npx tsx src/create-memory.ts porque estan dentro de esa carpeta.







