import { Employee } from '@/store/slices/employees';

const firstNames = ['John', 'Jane', 'Robert', 'Emma', 'Michael', 'Emily', 'David', 'Sarah', 'James', 'Jessica'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'];
const streets = ['Main St', 'High St', 'Pearl St', 'Maple St', 'Park St', 'Oak St', 'Pine St', 'Cedar St', 'Elm St', 'Walnut St'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
const states = ['KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

function getRandomDate(): Date {
    const start = new Date(1950, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
}

export function generateRandomUsers(count: number): Employee[] {
    const users: Employee[] = [];
    for (let i = 0; i < count; i++) {
        const user: Employee = {
            id: i.toString(),
            firstName: getRandomElement(firstNames),
            lastName: getRandomElement(lastNames),
            birthDate: getRandomDate(),
            startDate: getRandomDate(),
            street: getRandomElement(streets),
            city: getRandomElement(cities),
            state: getRandomElement(states),
            zipCode: getRandomNumber(10000, 99999).toString(),
            department: getRandomElement(departments),
        };
        users.push(user);
    }
    return users;
}