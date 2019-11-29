Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
const days = new Date().daysInMonth();
const rows = days / 7;
const dayNames = ['ПН', "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
let clickedElem;
let db = {};
let eventList = document.querySelector(".eventList");

const calendar = document.querySelector(".calendar");

function createTable (parent, cols, rows) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let k = 0; k < cols; k++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
    let arr = document.querySelectorAll('td');
    for (let i = 1;i <= days; i++) {
        arr[i].innerText = i;
    }
}

createTable(calendar, 7, rows);

const arr = document.querySelectorAll('td');
    for (let i = 0;i <= arr.length -1; i++) {
        arr[i].addEventListener('click', function() {
            //arr[i].style.color = "#AB0DED";
            clickedElem = i;
            console.log(clickedElem);
        })
    }
    
const eventText = document.querySelector('input');
let text = "";
eventText.addEventListener("keyup", ()=> {
    text = eventText.value;
    //console.log(eventText.value)
});

const button = document.querySelector(".addbtn");
button.addEventListener("click",function(){
    console.log("Вы добавили " + text);
    eventText.value = "";
        
        if (typeof db[clickedElem] !== "undefined") {
            db[clickedElem].push(text);
            } else {
                db[clickedElem] = new Array(text);
            }
            
    console.log(db);
    });
let buf;
for (let i = 0;i <= arr.length -1; i++) {
    arr[i].addEventListener("click", ()=> {
        eventList = document.createElement("div");
        eventList.className = "eventList";
        document.body.appendChild(eventList);
        let p = document.createElement('p');
        for (let key in db) {
            buf = db[clickedElem];
            for (let i = 0; i < buf.length; i++) {
                
                p.innerText = buf[i];
                eventList.appendChild(p.cloneNode(true))
                console.log(buf[i]);
             }
        
        }   
    })
}
function focusElem() {

}




    
    
    


