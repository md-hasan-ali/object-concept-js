const bottle = {
    name: 'Awesome bottle',
    id: 18,
    color: 'blue',
    price : 50,
    isClean: true,
}
const result = Object.keys(bottle);
const result1 = Object.values(bottle);
const result3 = Object.entries(bottle)
Object.seal(bottle);
Object.freeze(bottle)
bottle.price = 500;
delete bottle.isClean;

console.log(bottle)