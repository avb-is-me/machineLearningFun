const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function getDiff() {
  try {
    const { stdout } = await execPromise('git diff HEAD^ HEAD');
    return stdout;
  } catch (err) {
    console.error(err);
  }
}

getDiff().then(console.log);