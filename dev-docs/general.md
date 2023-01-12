# Machine Learning Fun Repo

## Overview:

This is a repo with the purpose testing out and using machine learning models hosted on huggingface. Hugging face will invaluable to companies that want to use basic machine learning, but don't want the infrasturcture or have the talent.

## Prerequisties for using for the first time:

Most have node installed. Check if you have it by running this command

<shell-block command="node -v" saved="true"></shell-block> Run npm install to install the dependences:

<shell-block command="npm install" saved="true"></shell-block> create .env file

<shell-block command="touch .env" saved="true"></shell-block> Create an account on https://huggingface.co/<image-component src='local-image' width="684" height="392" islocal="false" localimageid="dev-docs-TW9uLCAwNyBOb3YgMjAyMiAxNTowOToxMyBHTVQ=">

Then go to https://huggingface.co/settings/tokens

And create a token!

<image-component src='local-image' width="636" height="352" islocal="false" localimageid="dev-docs-TW9uLCAwNyBOb3YgMjAyMiAxNToxMDo1MCBHTVQ=">

Now in your .env file add the key with your token value.

```
shell
API_TOKEN=${YOUR_HUGGING_FACE_TOKEN}
```
# Running the projects!!!!!!!!!!!!!

```shell
shell
API_TOKEN=${YOUR_HUGGING_FACE_TOKEa}
```

## Roberta-QA!

This is a question and answer machine learning model. All we have to do is configure a question and a answer then run the project.

```
var hey = "lol"
```

<shell-block command="node roberta-base-qa.mjs --question=&quot;What is my name?&quot; --context=&quot;blah blah blah.  My name is andrew&quot;" saved="true"></shell-block>Also for who is a coool guy?
<shell-block command="node roberta-base-qa.mjs --question=&quot;Who is a cool guy?&quot; --context=&quot;Sergio is a very cool guy&quot;" saved="true"></shell-block>

```javascript
var hey = "ok!"
```
!!!!!!!!!!!!odkfiogfhjdiouhj!!!mkdjuifdhfuhyfuddsfdsfdsfdsfdsfd