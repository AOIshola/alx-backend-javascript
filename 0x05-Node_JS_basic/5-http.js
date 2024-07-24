const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const path = require('path');

async function countStudents(databasePath) {
    try {
        const data = await fs.readFile(databasePath, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        const headers = lines[0].split(',');
        const students = lines.slice(1).map(line => line.split(',').map(value => value.trim())).filter(student => student.length === headers.length);

        const fieldCounts = {};
        const totalStudents = students.length;

        students.forEach(student => {
            const field = student[3];
            const firstName = student[0];

            if (!fieldCounts[field]) {
                fieldCounts[field] = [];
            }
            fieldCounts[field].push(firstName);
        });

        let result = `Number of students: ${totalStudents}\n`;
        for (const [field, names] of Object.entries(fieldCounts)) {
            result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }

        return result.trim();
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

const app = http.createServer(async (req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!\n');
    } else if (reqUrl.pathname === '/students') {
	const databasePath = process.argv[2];

        if (!databasePath) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Database path not provided\n');
            return;
        }

        try {
            const studentData = await countStudents(databasePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`This is the list of our students\n${studentData}`);
        } catch (error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`${error.message}\n`);
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found\n');
    }
});

const PORT = 1245;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
