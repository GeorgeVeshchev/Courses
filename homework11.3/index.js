function setRandomImage() {
    let imagePaths = [
        "./img/download (1).jpg",
        "./img/download (2).jpg",
        "./img/download (3).jpg",
        "./img/download (4).jpg",
        "./img/download (5).jpg",
        "./img/download (6).jpg",
        "./img/download (7).jpg",
        "./img/download (8).jpg",
        "./img/download.jpg"
    ];

    let randomIndex = Math.floor(Math.random() * imagePaths.length);

    let randomImagePath = imagePaths[randomIndex];

    let imgElement = document.getElementById("randomImage");

    imgElement.src = randomImagePath;
}

setRandomImage();
