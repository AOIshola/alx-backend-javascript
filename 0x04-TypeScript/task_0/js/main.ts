interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Abdulquadri",
    lastName: "Ishola",
    age: 99,
    location: "Lagos"
};

const student2: Student = {
    firstName: "Muritadhor",
    lastName: "Arowolo",
    age: 99,
    location: "Lagos"
};

let studentsList: Array<Student> = [student1, student2]

const table = document.createElement('table');
const tableBody = document.createElement('tbody');
studentsList.map((student) => {
    const row = document.createElement('tr');

    const nameColumn = document.createElement('td')
    nameColumn.textContent = student.firstName
    const locationColumn = document.createElement('td')
    locationColumn.textContent = student.location;

    row.appendChild(nameColumn)
    row.appendChild(locationColumn)

    tableBody.appendChild(row);
    });
table.appendChild(tableBody);
