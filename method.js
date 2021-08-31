// const student = {
//     name: 'Md Hasan Ali',
//     age: 22,
//     major: "Computer",
//     money: 5000,
//     subjects: ['bangla', 'mathe', 'economics', 'physics'],
//     extra: {
//         name: 'hanif sanket',
//         age: 65,
//     },
//     value: function () {
//         console.log(this.value.name, 'taking exam..');
//     },
//     tratDay: function (price) {
//         this.money = this.money - price;
//         return this.money;
//     }
// }
// student.value();
// const treat = student.tratDay(2000);
// console.log(treat)


const student = {
    name: 'Hasan Ali',
    age: 22,
    money: 5000,
    subjects: ['bangla', 'English', 'Math'],
    value: function () {
        console.log(this.name, 'taking Exam')
    },
    taking: function (price, vat) {
        this.money = this.money - price - vat;
        return this.money;
    }
}
student.value();
const result = student.taking(2000,500);
console.log(result);