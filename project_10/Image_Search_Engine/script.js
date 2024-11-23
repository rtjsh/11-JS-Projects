const accessKey = "qHvpPSes5VP0qsAKi4BJS_zen9iPW1SDavAjhNxjE6g";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value.trim(); // Trim spaces
    if (!keyword) {
        console.error("Keyword is empty!");
        return;
    }

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Total results:", data.total);
        console.log("Total pages:", data.total_pages);

        if (page === 1) {
            searchResult.innerHTML = ""; // Clear previous results
        }

        const results = data.results;
        results.forEach((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank"; // Opens the image in a new tab

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });

        // Show or hide the "Show More" button
        if (page < data.total_pages) {
            showMoreBtn.style.display = "block";
        } else {
            showMoreBtn.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching data from Unsplash API:", error);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; // Reset to first page
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    console.log("Current page:", page);
    searchImages();
});
