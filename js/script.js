const IMAGES = [
    {
        url: "https://i.pinimg.com/736x/ce/06/06/ce060607023489a1d67b838278570c88.jpg",
        desc: "Doraemon invention"
    },
    {
        url: "https://i.pinimg.com/736x/68/39/df/6839df8c97f77333151fc76016a1e862.jpg",
        desc: "Oggy chasing cockroaches"
    },
    {
        url: "https://i.pinimg.com/736x/18/38/46/183846b9cc6bea81e58c3924f3009633.jpg",
        desc: "Funny Tom moment"
    },
    {
        url: "https://i.pinimg.com/1200x/5a/c2/a2/5ac2a22837d2a928c223b8c5bc41fde0.jpg",
        desc: "cutie Mickey smile"
    }
];

let currentIndex = 0;

function showCurrentImage() {
    document.getElementById("mainImage").src = IMAGES[currentIndex].url;
    document.getElementById("description").innerText = IMAGES[currentIndex].desc;
}
function slideLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = IMAGES.length - 1;
    }
    showCurrentImage();
}

function slideRight() {
    if (currentIndex < IMAGES.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showCurrentImage();
}

function showImage(index) {
    currentIndex = index;
    showCurrentImage();
}

function createPreview() {
    const container = document.getElementById("gallery-preview");
    container.innerHTML = "";

    for (let i = 0; i < IMAGES.length; i++) {
        container.innerHTML += `
            <img src="${IMAGES[i].url}" 
            class="preview-img"
            onclick="showImage(${i})"/>
        `;
    }
}

createPreview();
showCurrentImage();