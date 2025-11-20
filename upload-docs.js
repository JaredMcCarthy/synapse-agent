//1
import 'dotenv/config';
import {Langbase} from 'langbase'
import {readFile} from 'fs/promises'
import path from 'path'
import {readFileSync} from "node:fs";

//2
const Langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY
})


//3
async function main(){
    const cwd = process.cwd();
    const memoryName = 'knowledge-base';

    //esta es la que va leer los faqfiles
    const langbaseFaq = await readFile(path.join(cwd, 'docs', 'langbase.faq.txt'))

}


