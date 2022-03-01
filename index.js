// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
   name = cats.push(`${name}`);
   console.log(cats);
}

destructivelyAppendCat('Felix');

function destructivelyPrependCat(name) {
    name = cats.unshift(`${name}`);
    console.log(cats);
}

destructivelyPrependCat('Ralph');

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}

destructivelyRemoveFirstCat();

function appendCat(name) {
    const moreCats = [...cats, `${name}`];
    return moreCats;
}

function prependCat(name) {
    const allCats = [`${name}`, ...cats];
    return allCats;
}

function removeLastCat() {
    const lessCats = cats.slice(0, cats.length - 1);
    return lessCats;
}

function removeFirstCat() {
    const fewerCats = cats.slice(1);
    return fewerCats;
}
