function search(str, sbstr) {
    for (let i = 0; i < str.length; i++) {
        if (sbstr[0] == str[i]) {
            return str.indexOf (str[i]);
        }
        
    }
}

console.log(search("string", "i") == 3);
console.log(search("string", "in") == 3);
console.log(search("string", "ing") == 3);
console.log(search("string", "s") == 0);