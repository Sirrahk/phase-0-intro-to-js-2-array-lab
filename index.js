// Write your solution here!

//Declare the array cats with values, "Milo", "Otis", and "Garfield" 
const cats = ["Milo", "Otis", "Garfield"];

//Write a function that appends a cats name to the end of the array using a DESTRUCTIVE array method

function destructivelyAppendCat(name){
   return cats.push(name);
}

//Add a name to the BEGINNING of cats (destructive method)
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

//Remove the last cat from cats array, DESTRUCTIVELY
function destructivelyRemoveLastCat(){
    return cats.pop();
}
//Remove the first cat from cats array, DESTRUCTIVELY
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
//Append a cat to the cats array and returns a NEW array, leaving the cats array unchanged (Non destructive)
function appendCat(name){
    const newCats = [...cats, name]
    return newCats;
}
//Prepends  a cat to the cats array and returns new array unchanged
function prependCat(name){
    const newCats = [name, ...cats];
    return newCats;
}

//Remove last cat in cats array, return new array, leaving cats unchanged
function removeLastCat(){
    const newCats = cats.slice(0,cats.length-1);
    return newCats;
}


//Removes first cat in cats array, return new array leaving cats array unchanged
function removeFirstCat(){
    const copyCats = cats.slice(1);
    return copyCats;
}
