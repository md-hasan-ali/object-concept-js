const kebria = {
    name: 'kebria khan',
    id: 101,
    money: 5000,
    treatDay: function (expensive, boksis) {
        this.money = this.money - expensive - boksis;
        console.log(this);
        return this.money;
    }
}
const heroBalam = {
    name: 'heroBalam',
    id: 102,
    money: 6000
}
const heroKalam = {
    name: 'heroKalam',
    id: 103,
    money: 7000,
}
// const heroTreatDay = kebria.treatDay.bind(heroBalam);
// const heroTreatDay2 = kebria.treatDay.bind(heroKalam);
// heroTreatDay(500);
// heroTreatDay2(1000);

// kebria.treatDay.call(heroBalam, 5000, 100);
// kebria.treatDay.call(heroKalam, 5000, 100);

kebria.treatDay.apply(heroBalam, [5000, 100]);
kebria.treatDay.apply(heroKalam, [5000, 100]);