// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name){
    cats.push(name);
}
destructivelyAppendCat("Tom");

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Jerry");

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
destructivelyRemoveLastCat("Tom");

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
destructivelyRemoveFirstCat("Jerry");

function appendCat(name){
    const newAppendCats=[...cats, name];
    return newAppendCats;
}
const newAppendCats=appendCat("Fuzzy");

function prependCat(name){
    const newprependCats=[name,...cats];
    return newprependCats;
}
const newprependCats=prependCat("Earl");

function removeLastCat(name){
    const newRemoveLastCat= cats.slice();
    newRemoveLastCat.pop();
    return newRemoveLastCat;
}
const newRemoveLastCat=removeLastCat();

function removeFirstCat(name){
    const newRemoveFirstCat= cats.slice();
    newRemoveFirstCat.shift();
    return newRemoveFirstCat;
}
const newRemoveFirstCat=removeFirstCat();