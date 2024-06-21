export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) return [];
  const result = [];
  studentList.map((student) => (result.push(student.id)));
  return result;
}
