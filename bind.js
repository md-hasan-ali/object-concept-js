const kebria = {
    name: 'kebria',
    id: 101,
    money: 5000,
    treatDay: function (price) {
        this.money = this.money - price;
        console.log(this);
        return this.money;
    }
}
const heroBalam = {
    name: 'HeroBalam',
    id: 102,
    money: 5000,
}
const heroKalam = {
    name: 'HeroKalam',
    id: 103,
    money: 5000,
}
kebria.treatDay(100);
const heroTreatDay = kebria.treatDay.bind(heroBalam);
heroTreatDay(2000);
heroTreatDay(1000);
const heroKalamTreatDay = kebria.treatDay.bind(heroKalam);
heroKalamTreatDay(4000);

