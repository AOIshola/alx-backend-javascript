export default function getStudentsByLocation(studentList, location) {
  const result = studentList.filter((student) => student.location === location);
  return result;
}
