import data from "./data.js";
 
const table = document.createElement("table");
 
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
 
const fejlec = document.createElement("tr");
 
const oszlopok = Object.keys(data[0]);
 
for (let i = 0; i < oszlopok.length; i++) {
    const th = document.createElement("th");
 
    th.textContent = oszlopok[i];
 
    fejlec.appendChild(th);
}
 
thead.appendChild(fejlec);
table.appendChild(thead);
 
 
for (let i = 0; i < data.length; i++) {
 
    const sor = document.createElement("tr");
 
    for (let j = 0; j < oszlopok.length; j++) {
 
        const td = document.createElement("td");
 
        td.textContent = String(data[i][oszlopok[j]]);
 
        sor.appendChild(td);
    }
 
    tbody.appendChild(sor);
}
 
table.appendChild(tbody);
 
document.body.appendChild(table);
 