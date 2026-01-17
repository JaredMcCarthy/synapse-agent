
import 'dotenv/config';
import {Langbase} from 'langbase'
import {readFile} from 'fs/promises'
import path from 'path'


const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY
})

async function main(){
    const cwd = process.cwd();
    const memoryName = 'knowledge-base';

    //esta es la que va leer los faqfiles
    const langbaseFaq = await readFile(path.join(cwd, 'docs', 'langbase.faq.txt'))

    // subimos los archivos a la memoria de langbase
    const faqResult = await langbase.memories.documents.upload({
        memoryName,
        contentType: 'text/plain',
        documentName: 'langbase.faq.txt',
        document: langbaseFaq,
        meta: {category: 'Support', topic: 'Langbase FAQs'},
    });

    console.log(faqResult.ok ? 'Has been succesfull uploaded' : 'We had an issue with the upload');
}

main()


// DOC que use poara guiarme
// https://langbase.com/docs/sdk/memory/document-upload?sdk=typescript

// DOC para aprender de arquitectura de lLM
// https://langbase.com/docs/examples/agent-architectures?sdk=typescript