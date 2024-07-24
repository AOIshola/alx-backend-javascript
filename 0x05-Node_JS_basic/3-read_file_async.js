const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
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

        console.log(`Number of students: ${totalStudents}`);

        for (const [field, names] of Object.entries(fieldCounts)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
