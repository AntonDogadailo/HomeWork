function substring(str, a, b) {
    str = "";
    let answ = str.split('');
    //let answ = [];
    //answ.push(str);
    // if (a > b) {
        for (let i = b; i <= a; i++) {
            answ.push(str[i]);
            console.log(answ);
            
        }
    // }
    // else {
    //     for (let i = a; i < b; i++) {
    //         str = str.push(i);
    //     }
    // }
 
}

console.log(substring("stringkldfjg", 2,4));