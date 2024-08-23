import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const studentData = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';

      const totalStudents = Object.values(studentData).reduce((acc, curr) => acc + curr.length, 0);
      responseText += `Number of students: ${totalStudents}\n`;

      const sortedFields = Object.keys(studentData).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of sortedFields) {
        const names = studentData[field];
        responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentData = await readDatabase(databasePath);
      const studentsInMajor = studentData[major];

      if (!studentsInMajor) {
        res.status(500).send('Cannot load the database');
        return;
      }

      const responseText = `List: ${studentsInMajor.join(', ')}`;
      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
