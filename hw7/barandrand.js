let width = 10;
let elem = document.getElementById('bar');



function plusBar() {
    if  (width < 100 ) {
        width += 5;
        console.log(width);
        elem.style.width = width + 5 + "%";
        elem.innerHTML = width + "%";
        
    } else { 
        elem.style.width = 100 + "%";
        elem.innerHTML = "Вы достигли 100%";
    } 
    
} 

function rand() {
    let randNum = Math.floor(Math.random() * 101)
    let randField = document.getElementById('rand');
    randField.innerHTML = randNum;
}
