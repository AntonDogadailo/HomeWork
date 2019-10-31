function splt(str, separator) {
    //str = '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (separator == "") {
            arr.push(str[i]);
            }
    }
        if (separator == " ") {

        }
    return arr;
}

console.log(splt('js is a gd',"") === ["j", "s", " ", "i", "s", " ", "a", " ", "g", "d"]);