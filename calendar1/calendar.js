Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

let days = new Date().daysInMonth();
console.log(days);

let table = document.createElement('table'),
    tr = table.appendChild(document.createElement('tbody'))
              .appendChild(document.createElement('tr'));
for (i = 1; i < days; i++) {
    tr.appendChild(document.createElement('td'));
}

