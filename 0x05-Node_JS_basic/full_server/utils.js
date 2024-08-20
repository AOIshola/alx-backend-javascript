import fs from 'fs';

const { promises: fsp } = fs;

export async function readDatabase(filePath) {
  try {
    const data = await fsp.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map(line => line.split(',').map(value => value.trim())).filter(student => student.length === headers.length);

    const fieldCounts = {};

    students.forEach(student => {
      const field = student[3];
      const firstName = student[0];

      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstName);
    });

    return fieldCounts;
  } catch (error) {
    throw new Error(error);
  }
}
