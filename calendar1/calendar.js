Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

const days = new Date().daysInMonth();
const rows = days / 7;
const dayNames = ['ПН', "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

calendar = document.querySelector(".calendar");



function createTable (parent, cols, rows) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let k = 0; k<cols; k++) {
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

// in proccess
function getTd () {
    let arr = document.querySelectorAll('td');
    for (let i = 1;i <= arr.length; i++) {
        console.log(arr.length)
        arr[i].addEventListener('click', function func(){
            this.innerHTML;
        })
    }
    addEventListener('click', function(){
            this.target;
        })
    
}
getTd ();

class Event {
    constructor (eventName, data) {
        this.eventName = eventName;
        this.data = data;
    }
    changeData () {
        //code
    }

    deleteEvent() {
        //code
    }
}

class Calendar {
    showDayEvent () {
//code
    }

    showWeakEvent () {
//code
    }

    showMonthEvent () {
//code
    }
}




