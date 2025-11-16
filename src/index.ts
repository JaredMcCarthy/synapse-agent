
// al inicio corre el codigo en terminal con npm dev para ver si funciona la API
//CODIGO DE TEST NADA MAS.
import dotenv from "dotenv";
dotenv.config();
console.log("API Key cargada:", process.env.LANGBASE_API_KEY ? "✓ Sí" : "✗ No");
