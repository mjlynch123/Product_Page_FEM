const imageIcons = document.getElementById("image-icons");
const selectedImage = document.getElementById("image");

function displayIcons() {
  for (let i = 1; i < 5; i++) {
    const icon = document.createElement("div");
    const image = document.createElement("img");

    image.setAttribute("src", "images/image-product-" + i + "-thumbnail.jpg");
    icon.setAttribute("class", "icon");
    imageIcons.appendChild(icon);
    icon.appendChild(image);
  }
}

displayIcons();

const iconClick = document.querySelectorAll(".icon");

// Set the first icon as active by default
iconClick[0].classList.add("active");

iconClick.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    const imgElement = icon.querySelector("img");
    const src = imgElement.getAttribute("src");

    const modifiedSrc = src.replace("-thumbnail", "");
    selectedImage.setAttribute("src", modifiedSrc);

    // Remove existing overlay from other icons
    iconClick.forEach((otherIcon) => {
      otherIcon.classList.remove("active");
    });

    // Add active class to the clicked icon
    icon.classList.add("active");

    // Create and append overlay element
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    icon.appendChild(overlay);

    // console.log("Clicked icon source:", src);
  });
});
