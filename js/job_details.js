document.addEventListener("DOMContentLoaded", () => {
    // Determine the job ID from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');

    // Default to the first job if no ID is specified, or fetch by ID
    let currentJob = jobsData[0];
    if (jobId) {
        const foundJob = getJobById(jobId);
        if (foundJob) {
            currentJob = foundJob;
        }
    }

    // Update Page Title
    document.title = `${currentJob.title} - Team24 Careers`;

    // Update Top Section Background Color
    const titleSection = document.getElementById("jd-title-section");
    if (titleSection) {
        titleSection.style.backgroundColor = currentJob.bg_color;
    }

    // Populate Job details on the left
    document.getElementById("jd-title").textContent = currentJob.title;

    // Build tags row dynamically
    let tagsRowHtml = `
        <div class="col-md-4 col-lg-4">
            <span class="job-location">
                <i class="bi bi-geo-alt"></i> <span style="font-weight: 500;">${currentJob.location}</span>
            </span>
        </div>
    `;

    if (currentJob.type) {
        tagsRowHtml += `
        <div class="col-md-2 mt-2 mt-md-0 w-25">
            <div class="text-center"
                style="background-color: ${currentJob.tag_colors.type.bg}; padding: 5px; border-radius: 18px; color: ${currentJob.tag_colors.type.text}; font-weight: 500; width: 100%;">
                ${currentJob.type}</div>
        </div>`;
    }

    if (currentJob.experience) {
        tagsRowHtml += `
        <div class="col-md-2 mt-2 mt-md-0 w-25">
            <div class="text-center"
                style="background-color: ${currentJob.tag_colors.experience.bg}; padding: 5px; border-radius: 18px; color: ${currentJob.tag_colors.experience.text}; font-weight: 500; width: 100%;">
                ${currentJob.experience}
            </div>
        </div>`;
    }

    document.getElementById("jd-tags-row").innerHTML = tagsRowHtml;

    // Populate the full description
    document.getElementById("jd-full-description").innerHTML = currentJob.full_description;

    // Populate the 'Other Openings' Section
    const otherOpeningsContainer = document.getElementById("jd-other-openings");
    let otherHtml = "";

    console.log("Jobs data :", jobsData);
    

    // Filter out the current job and pick a few others
    const otherJobs = jobsData.filter(job => job.id !== currentJob.id).slice(0, 5); // Take up to 5 other jobs

    console.log("Other Jobs :", otherJobs);
    console.log("Container:", otherOpeningsContainer);

    otherJobs?.forEach((job) => {
        console.log("Hello");
        
        // Build tags
        let tagsHtml = "";
        if (job.type) {
            tagsHtml += `<span class="tag" style="background-color: ${job.tag_colors.type.bg}; color: ${job.tag_colors.type.text}">${job?.type}</span>`;
        }
        console.log("Hello1", job);

        if (job.experience) {
            tagsHtml += `<span class="tag" style="background-color: ${job?.tag_colors?.experience?.bg}; color: ${job?.tag_colors?.experience?.text}">${job?.experience}</span>`;
        }
        console.log("Hello 2", job);

        // Map general colors to match CSS classes if needed, or inline style.
        // We'll use the job.bg_color directly as inline, although the original uses classes like 'purple', 'yellow', 'green'.
        // To be completely dynamic using the standard data:
        otherHtml += `
            <div class="job-card" style="background-color: ${job.bg_color}; cursor: pointer;" onclick="window.location.href='job_details.html?id=${job.id}'">
                <!-- TOP -->
                <div class="d-flex gap-2 align-items-center">
                    <div class="job-img-section">
                        <img class="job-img" src="${job.logo}" alt="Job-Img">
                    </div>
                    <div>
                        <h6 class="job-title mb-0">${job.title}</h6>
                        <p class="job-company mb-0">${job.company}</p>
                    </div>
                </div>

                <!-- MIDDLE -->
                <div class="mt-3">
                    <h6 class="job-location mb-1">${job.location}</h6>
                    <p class="job-description" style="font-size: 0.9rem;">
                        ${job.short_description}
                    </p>
                </div>

                <!-- BOTTOM -->
                <div class="d-flex align-items-center justify-content-between mt-2">
                    <div class="d-flex gap-2 d-flex-wrap flex-wrap">
                        ${tagsHtml}
                    </div>

                    <button class="arrow-btn" onclick="event.stopPropagation(); window.location.href='job_details.html?id=${job.id}'" style="background-color: black; color: white;">
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
    });

    console.log("Other OpeningsContainer :", otherOpeningsContainer);
    

    if (otherOpeningsContainer) {
        console.log("Other Html :", otherHtml);
        
        otherOpeningsContainer.innerHTML = otherHtml;
    }
});


// ==============================
// COPY + SHARE FUNCTIONALITY
// ==============================

const copyBtn = document.getElementById("copyLinkBtn");
const shareBtn = document.getElementById("shareLinkBtn");

const currentUrl = window.location.href;

// COPY LINK
if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);

            copyBtn.classList.add("copied");
            copyBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Copied!';

            setTimeout(() => {
                copyBtn.innerHTML = '<i class="bi bi-link-45deg"></i> Copy link';
                copyBtn.classList.remove("copied");
            }, 2000);

        } catch (err) {
            alert("Failed to copy link");
        }
    });
}

// SHARE LINK
if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.getElementById("jd-title")?.innerText || "Job Opening",
                    text: "Check out this job opportunity!",
                    url: currentUrl
                });
            } catch (err) {
                console.log("Share cancelled");
            }
        } else {
            fallbackShare(currentUrl);
        }
    });
}

// FALLBACK (Desktop)
function fallbackShare(url) {
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(url)}`;
    const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

    const shareWindow = window.open("", "Share", "width=500,height=400");

    shareWindow.document.write(`
        <div style="font-family:sans-serif;padding:20px">
            <h4>Share this job</h4>
            <a href="${whatsapp}" target="_blank">WhatsApp</a><br><br>
            <a href="${linkedin}" target="_blank">LinkedIn</a>
        </div>
    `);
}


// ==============================
// APPLY NOW (WHATSAPP + EMAIL)
// ==============================

const whatsappBtns = document.querySelectorAll(".applyWhatsapp");
const emailBtns = document.querySelectorAll(".applyEmail");

// 🔧 CHANGE THESE
const phoneNumber = "919976050607"; // without +
const emailAddress = "hr@team24.in";

const jobTitle = document.getElementById("jd-title")?.innerText || "Job Opening";

// WHATSAPP (works for ALL buttons)
whatsappBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const message = `Hi, I am interested in the ${jobTitle} position.\n\nHere is the job link: ${currentUrl}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    });
});

// EMAIL (works for ALL buttons)
emailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const subject = `Application for ${jobTitle}`;
        const body = `Hi,\n\nI am interested in applying for the ${jobTitle} role.\n\nJob Link: ${currentUrl}\n\nPlease find my resume attached.\n\nThanks`;

        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    });
});

const applyBtn = document.querySelector('.apply-btn');
const overlay = document.getElementById('blur-overlay');

document.querySelectorAll('.apply-btn').forEach(btn => {
    
    btn.addEventListener('show.bs.dropdown', () => {
        overlay.classList.add('active');
    });

    btn.addEventListener('hide.bs.dropdown', () => {
        overlay.classList.remove('active');
    });

});