
import {runMemoryAgent, runAiSupportAgent} from "./agents";

async function main(){
    const query = 'How do i upgrade to individual plan?'
    const chunks = await runMemoryAgent(query)

    const completion  = await runAiSupportAgent({
        chunks,
        query,
    });

    console.log('Completion:', completion);
}

main()