var student1 = {
    firstName: "Abdulquadri",
    lastName: "Ishola",
    age: 99,
    location: "Lagos"
};
var student2 = {
    firstName: "Muritadhor",
    lastName: "Arowolo",
    age: 99,
    location: "Lagos"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
studentsList.map(function (student) {
    var row = document.createElement('tr');
    var nameColumn = document.createElement('td');
    nameColumn.textContent = student.firstName;
    var locationColumn = document.createElement('td');
    locationColumn.textContent = student.location;
    row.appendChild(nameColumn);
    row.appendChild(locationColumn);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
