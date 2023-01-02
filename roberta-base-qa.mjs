
import fetch from 'node-fetch';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


async function getArgs () {
    const args = {};
    var thing = "is coooolsxsdfdsfdfda"
    process.argv
        .slice(2, process.argv.length)
        .forEach( arg => {
        // long arg
        if (arg.slice(0,2) === '--') {
            const longArg = arg.split('=');
            const longArgFlag = longArg[0].slice(2,longArg[0].length);
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;
        }
        // flagsaaaa
        else if (arg[0] === '-') {
            const flags = arg.slice(1,arg.length).split('');
            flags.forEach(flag => {
            args[flag] = true;
            });
        }
    });
    return args;
}


async function query(inputData) {
    const args = await getArgs();
    var data = {"inputs": {
		"question": args.question,
		"context": args.context || "My name is Clara and I live in Berkeley."
	}}
	const response = await fetch(
		"https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
		{
			headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}


query().then((response) => {
	console.log(response.answer);
}).catch((e) => {
    console.log(e)
})