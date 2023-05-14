const cats = ['Milo','Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCats = [...cats];
    appendCats.push(name);
    return appendCats
}

function prependCat(name) {
    const prependCats = [...cats];
    prependCats.unshift(name);
    return prependCats
}

function removeLastCat() {
    const removeLast = [...cats];
    removeLast.pop();
    return removeLast;
}
function removeFirstCat() {
    const removeFirst = [...cats];
    removeFirst.shift();
    return removeFirst;
}
