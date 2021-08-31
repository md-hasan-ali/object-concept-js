const student = {
    name: 'Hasan Ali',
    age : 22,
    subject: 'CSE'
}

for(const prop in student) {
    // console.log(prop+ " : " +student[prop])
}
const keys = Object.keys(student);
for(const prop of keys) {
    console.log(prop , student[prop])
}

