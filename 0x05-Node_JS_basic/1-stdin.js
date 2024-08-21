process.stdout.write("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
    const name = data.toString().trim()
    process.stdout.write(`Your name is: ${name}`)

    process.exit()
});

process.on('exit', async () => {
    process.stdout.write("This important software is now closing");
});
