const accessKey = "qHvpPSes5VP0qsAKi4BJS_zen9iPW1SDavAjhNxjE6g";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if(page == 1)
  {
    searchResult.innerHTML ="";
  }
 
  
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank"; // Opens the image in a new tab

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })

  // Show or hide the "Show More" button
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1; // Reset to first page
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
