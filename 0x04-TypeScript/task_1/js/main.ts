interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

interface Student {
  firstName: string;
  lastName: string;
  workFromHome(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student
}

const StudentClass: StudentConstructor = class Student implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  workFromHome(): string {
    return 'Currently working';
  };

  displayName(): string {
    return this.firstName
  };
}
