document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the article ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get("id"));

    // 2. Find the article in newsData
    if (typeof newsData === "undefined") {
        console.error("newsData is not defined.");
        return;
    }

    const article = newsData.find(item => item.id === articleId) || newsData[0]; // fallback to first article if not found

    // 3. Populate basic meta details
    document.title = `${article.title} | Team24 News Room`;
    
    const titleEl = document.getElementById("blog-title");
    if (titleEl) titleEl.innerHTML = article.title;
    
    const dateEl = document.getElementById("blog-date");
    if (dateEl) dateEl.innerHTML = `<i class="bi bi-calendar3"></i> ${article.date}`;
    
    const readTimeEl = document.getElementById("blog-read-time");
    if (readTimeEl) readTimeEl.innerHTML = `<i class="bi bi-clock"></i> ${article.readTime}`;
    
    const imageEl = document.getElementById("blog-image");
    if (imageEl) {
        imageEl.src = article.image;
        imageEl.alt = article.title;
    }

    const imageCaptionEl = document.getElementById("blog-image-caption");
    if (imageCaptionEl) {
        imageCaptionEl.textContent = `${article.author} | ${article.category}`;
    }

    // 4. Populate Takeaways
    const takeawaysEl = document.getElementById("blog-takeaways");
    if (takeawaysEl && article.keyTakeaways) {
        let takeawaysHTML = `<h4><i class="bi bi-lightning-charge-fill"></i> Key Takeaways</h4>`;
        article.keyTakeaways.forEach(takeaway => {
            takeawaysHTML += `
                <div class="takeaway-item">
                    <span class="takeaway-check"><i class="bi bi-check"></i></span>
                    <span>${takeaway}</span>
                </div>
            `;
        });
        takeawaysEl.innerHTML = takeawaysHTML;
    }

    // 5. Populate Article Body & Generate TOC
    const contentEl = document.getElementById("blog-content");
    const tocEl = document.getElementById("toc");
    
    if (contentEl && article.paragraphs) {
        let contentHTML = "";
        let tocHTML = "";
        let sectionCount = 0;

        article.paragraphs.forEach((p, index) => {
            // Check if paragraph is actually a subheading (h3)
            if (p.startsWith("<h3>")) {
                sectionCount++;
                const sectionId = `s${sectionCount}`;
                const sectionText = p.replace("<h3>", "").replace("</h3>", "");
                
                // Replace h3 with h2 + id for the content
                contentHTML += `<h2 id="${sectionId}">${sectionText}</h2>`;
                
                // Add to TOC
                const numStr = sectionCount < 10 ? `0${sectionCount}` : sectionCount;
                tocHTML += `
                    <li>
                        <a href="#${sectionId}" class="${sectionCount === 1 ? 'active' : ''}">
                            <span class="toc-num">${numStr}</span> ${sectionText}
                        </a>
                    </li>
                `;
            } else {
                contentHTML += p;
            }

            // Inject the featured quote somewhere in the middle (e.g. after second paragraph)
            if (index === 1 && article.featuredQuote) {
                contentHTML += `
                    <div class="pull-quote fade-up">
                        <p>"${article.featuredQuote}"</p>
                        <cite>— ${article.author}, ${article.role}</cite>
                    </div>
                `;
            }
        });

        contentEl.innerHTML = contentHTML;
        
        if (tocEl) {
            tocEl.innerHTML = tocHTML;
        }
    }

    // Initialize intersection observers or active TOC highlight logic if they rely on the dynamic content
    initDynamicInteractions();
});

function initDynamicInteractions() {
    // â”€â”€ Fade-up on scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));

    // â”€â”€ Active TOC highlight on scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const tocLinks = document.querySelectorAll('#toc a');
    const sections = Array.from(tocLinks).map(link => {
        const id = link.getAttribute('href').substring(1);
        return document.getElementById(id);
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (sec && window.scrollY >= sec.offsetTop - 140) current = sec.id;
        });
        tocLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    // â”€â”€ Smooth anchor scroll â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
