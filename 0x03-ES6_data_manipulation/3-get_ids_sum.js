export default function getStudentIdsSum(studentList) {
  const sumIds = studentList.reduce((acc, cur) => acc + cur.id, 0);
  return sumIds;
}
