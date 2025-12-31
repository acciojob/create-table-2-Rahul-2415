function createTable() {
    const table = document.getElementById("myTable");

    
    table.innerHTML = "";

    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    
    if (isNaN(rn) || isNaN(cn)) {
        return;
    }

    const rows = Number(rn);
    const cols = Number(cn);

    
    if (rows <= 0 || cols <= 0) {
        alert("Please enter positive numbers greater than zero.");
        return;
    }

    
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
