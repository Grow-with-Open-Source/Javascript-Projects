// This file contains JS files for fetching images from the Unsplash API
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
let photoCount = 10;
const apiKey = "PQfapZjuxLeUabGDpmNY_GtuchLEURH1obzhSP0mrQg";
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;

// Check if all images are loaded
function imageLoaded() {
    imagesLoaded++;
    console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log("ready =", ready);
        photoCount = 30;
        apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;
    }
}

// Creating a helper function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for Links and photos
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log("total images =", totalImages);
    // Run foreach for each object in photosArray
    photosArray.forEach((photo) => {
        // Creating an <a> element to link to unsplash
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });

        // Creating img for photo
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        img.addEventListener("load", imageLoaded);
        // Putting img inside a and both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        // console.log(photosArray);
    } catch (error) {
        // Catch error here
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
    // console.log('scrolled');
    if (
        window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 1000 &&
        ready
    ) {
        ready = false;
        getPhotos();
        console.log("load more");
    }
});

// On Load
getPhotos();
