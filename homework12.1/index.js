function FirstButton() {
    let link = prompt("Будь ласка, введіть посилання:");

    if (link !== null && link !== "") {
        window.location.href = link;
    }
}

function SecondButton() {
    window.location.href = "https://www.google.com/search?sca_esv=1b3eff12a321d9fe&sxsrf=ADLYWIJMp5A9oCTgJWeQjI6pm7aZrqBIrQ:1714927780327&q=%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8&uds=ADvngMgWrlUjuVRHZdtbhIMzdrpNfuxovGDHmNuY6NfJ3CqaGWv_Nd52FRtrV6tdTieAD8RzEO5QNggxTdcbgn-Szwgc9ZJAqWPDf9YAW4DVZqeV_NVIbjGsNpaeKvlPsRFhcoZqMvFh-fMTCa8Jo0qy82iOnrmswgvcvgyjTqGsg4BDUyI7UTcIiFyiGsfK7RfzvMOLb1c5hd6pUYAbCbhpnLNZIaft_0bCthkVsQyxTRFjCfMPcjx2piaZBmsMuyvQje8I-jaBLG0aU9y6iN0-bNHTl-FcrV4jUCKq_cA5WThN983fqbXkxFpU-BolpcfAw5kLf9Q4x1alUBqkrb4W_2XnaFwGwg&udm=2&prmd=ivsnmbtz&sa=X&ved=2ahUKEwiCsqXp-_aFAxVxKBAIHbyRB1EQtKgLegQIDRAB&biw=1745&bih=866&dpr=1.1"; 
}


let firstButton = document.getElementById("firstButton");
let secondButton = document.getElementById("secondButton");

firstButton.addEventListener("click", FirstButton);
secondButton.addEventListener("click", SecondButton);
