export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.student_id === student.id);
      return { ...student, grade: grades ? grades.grade : 'N/A' };
    });
}
