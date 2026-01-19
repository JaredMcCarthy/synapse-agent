
import 'dotenv/config'
import {Langbase} from 'langbase'

const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,
})

async function main() {
    const supportAgent = await langbase.pipes.create({
        name: 'ai-support-agent',
        description: 'An AI agent to support users with their queries.',
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'Your are a helpful AI assistance. You will assist users with thier queries.',
            }
        ]
    })
    console.log('Support Agent:', supportAgent)
}

main()