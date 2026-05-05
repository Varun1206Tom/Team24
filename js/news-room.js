document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".news-section-row");

    if (!container || typeof newsData === "undefined") {
        console.error("News container or newsData not found");
        return;
    }

    container.innerHTML = ""; // Clear existing hardcoded content

    // We will distribute items in groups of 3.
    // Even groups (0-2, 6-8, etc.) go to the Left column.
    // Odd groups (3-5, 9-11, etc.) go to the Right column.
    const leftColItems = [];
    const rightColItems = [];

    newsData.forEach((item, index) => {
        const groupIndex = Math.floor(index / 3);
        if (groupIndex % 2 === 0) {
            leftColItems.push(item);
        } else {
            rightColItems.push(item);
        }
    });

    const createNewsCard = (item, isBig) => {
        const colClass = isBig ? "col-12" : "col-6";
        // Truncate description for smaller cards if needed
        const desc = item.description.length > 100 && !isBig
            ? item.description.substring(0, 97) + "..."
            : item.description;

        return `
            <a href="/blog-section.html?id=${item.id}" class="${colClass} news-link text-decoration-none">
                <img class="news-img w-100 rounded-3 object-fit-cover" src="${item.image}" alt="${item.title}" style="height: ${isBig ? '300px' : '200px'};">
                <h5 class="news-title-text text-start mt-2" style="color: #00373B;">${item.title}</h5>
                <p class="news-desc-text text-start text-muted">${desc}</p>
            </a>
        `;
    };

    let leftHTML = `
        <div class="col-md-6 col-sm-12">
            <div class="row g-3">
    `;
    leftColItems.forEach((item, idx) => {
        const isBig = (idx % 3) === 0;
        leftHTML += createNewsCard(item, isBig);
    });
    leftHTML += `
            </div>
        </div>
    `;

    let rightHTML = `
        <div class="col-md-6 col-sm-12 mt-4">
            <div class="row g-4">
    `;
    rightColItems.forEach((item, idx) => {
        const isBig = (idx % 3) === 2;
        rightHTML += createNewsCard(item, isBig);
    });
    rightHTML += `
            </div>
        </div>
    `;

    container.innerHTML = leftHTML + rightHTML;
});
