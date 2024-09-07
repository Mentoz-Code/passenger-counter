let count = 0
let countEl = document.getElementById("count")//pass in argument
let saveEl = document.getElementById("save-el")
console.log(count) //lets you see the value of a variable
//ctrl k c comments out lines

function increment() { //name it wtv u want..
    count += 1
    //you can directly put document.get..... without creating a variable for it. but for simplicity's sake i put it in a var
    countEl.textContent = count
}

function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    countEl.textContent = 0 //resets the count after save
    count = 0
}