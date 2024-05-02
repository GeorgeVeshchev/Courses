function createPifagorTable(rows, cols) {
  var table = document.getElementById("pifagorTable");

  
    table.innerHTML = "";

    
    for (var i = 1; i <= rows; i++) {
        var row = document.createElement("tr"); 
        for (var j = 1; j <= cols; j++) {
            var cell = document.createElement("td"); 
            cell.textContent = i * j; 
            row.appendChild(cell); 
        }
        table.appendChild(row); 
    }
}


createPifagorTable(10, 10);