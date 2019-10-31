function tream(str) {
    let answ = '';
    for (let i = 0; i < str.length; i++){
        if (str[0] == " ") {
            answ = str.substr(1);
            //console.log(true)
        }
        if (str[str.length - 1]  == " ") {
            //console.log(true);
            answ = str.substr(0, str.length - 1);
            }  
        if (str[0] == " " && str[str.length - 1]  == " ") {
            str = str.substr(1);
            answ = str.substr(0, str.length - 1);
        }
    }
    return answ;
}

console.log(tream(" строка") === "строка");
console.log(tream("строка ") === "строка");
console.log(tream(" строка ") === "строка");