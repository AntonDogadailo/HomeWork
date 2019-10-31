function repeat(str, n){
    let answ = '';
    for (let i = 0; i < n; i++) {
        answ += str;
    }
    
    return answ;
}

console.log(repeat('Строка', 3) == "СтрокаСтрокаСтрока");
console.log(repeat('Строка из нескольких слов', 2) == "Строка из нескольких словСтрока из нескольких слов");