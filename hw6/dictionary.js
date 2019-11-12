let map = new Map();
class Dictionary {
    newEntry(word, description) {
        map.set(word, description);
        
  }
    look(word) {
        console.log(map.get(word)); 
        if (map.has(word) == false) {
            console.log('Нет такого слова')
        }
   }
}

let a = new Dictionary();
a.newEntry("kz", "lksdjfgkl");
a.newEntry("1", "111");
a.newEntry("12", "222");
a.newEntry("123", "333");
a.look("1666");
a.look("12");