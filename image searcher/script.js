const accesskey = "AtxplH1ta6DyEBU0BMSXPZasK4dMFqpZ_kUfvNhGxis";

const fromE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchresults = document.querySelector(".search-results"); // Fix typo here
const showmore = document.getElementById("show-more-button");

let inputdata = "";
let page = 1;

async function searchimages() {
  inputdata = inputE1.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
      searchresults.innerHTML = "";
    }

    results.map((result) => {
      const imagewrapper = document.createElement("div");
      imagewrapper.classList.add("search-result");
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imagelink = document.createElement("a");
      imagelink.href = result.links.html;
      imagelink.target = "_blank";
      imagelink.textContent = result.alt_description;
      imagewrapper.appendChild(image);
      imagewrapper.appendChild(imagelink);
      searchresults.appendChild(imagewrapper);
    });

    page++;
    showmore.style.display = "block";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fromE1.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');
    page = 1;
    searchimages();
});

showmore.addEventListener('click', (event) => {
    console.log('Show more clicked');
    searchimages();
});
