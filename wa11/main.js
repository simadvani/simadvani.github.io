const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images =["images/pic1.jpg",
               "images/pic2.jpg",
               "images/pic3.jpg",
               "images/pic4.jpg",
               "images/pic5.jpg",]

const altText = {
    "image1": "a persons eye",
    "image2": "just rock",
    "image3": "more flowers",
    "image4": "old paintings",
    "image5": "either moth or butterfly",}


/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage(){
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image'+(i+1)]);
}
    newImage.addEventListener("click", displayImage);
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor= "rgba(0,0,0,0.5)";
        return
    }

        if (btn.getAttribute("class") == "light") {
            btn.setAttribute("class", "dark");
            btn.textContent = "darken";
            overlay.style.backgroundColor= "rgba(0,0,0,0)";
            return
        }
    
        }
)