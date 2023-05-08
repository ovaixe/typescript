const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // this becomes tuple of fixed length with fixed types.
} = {
    name: 'owais',
    age: 22,
    hobbies: ['football', 'martial arts'],
    role: [2, 'author']
};

person.role.push('admin'); // this is allowed
// person.role[0] = 'admin'; // this is not allowed
// person.role = [1, 'author' 'admin']; // this is not allowed

console.log(person);
for (let hobby of person.hobbies) console.log(hobby.toUpperCase());


enum Role {ADMIN = 'ADMIN', READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR'};

const human = {
    name: 'owais',
    age: 22,
    hobbies: ['football', 'martial arts'],
    role: Role.ADMIN
};

console.log(human.role);

if (human.role === 'ADMIN') console.log('admin here...');