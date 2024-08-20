const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const path = require('path');
const express = require('express');

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

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let databasePath = process.argv[2];
  if (!databasePath) {
    databasePath = 'database.csv';
  }
  try {
    const data = await countStudents(databasePath)
    res.set('Content-Type', 'text/plain').status(200)
    .send(`This is the list of our students\n${data}`);
    return
  } catch (error) {
    res.set('Content-Type', 'text/plain').status(500)
    .send(`${error.message}\n`);
  }
});

const PORT = 1245;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
