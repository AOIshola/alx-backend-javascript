export default function updateStudentGradeByCity(students_list, city, newGrades) {
  return student_list.filter(student => student.location === city)
	.map((student) => {
	  const grades = newGrades.find(grade => grade.student_id === student.id)
	  return {...student, grade: grades ? grades.grade : 'N/A'}
	}
}
