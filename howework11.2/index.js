function changeColor() {
    let textBlock = document.getElementById("textBlock");

    if (textBlock.classList.contains("default-color")) {
        textBlock.classList.remove("default-color");
        textBlock.classList.add("new-color");
    } else {
        textBlock.classList.remove("new-color");
        textBlock.classList.add("default-color");
    }
}