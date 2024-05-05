function createPifagorTable(rows, cols) {
  let table = document.getElementById("pifagorTable");

  
    table.innerHTML = "";

    
    for (let i = 1; i <= rows; i++) {
        let row = document.createElement("tr"); 
        for (let j = 1; j <= cols; j++) {
            let cell = document.createElement("td"); 
            cell.textContent = i * j; 
            row.appendChild(cell); 
        }
        table.appendChild(row); 
    }
}


createPifagorTable(10, 10);