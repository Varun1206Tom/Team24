document.addEventListener("DOMContentLoaded", () => {
    const jobsContainer = document.getElementById("jobs-container");

    if (!jobsContainer) return;

    // Helper to render a job tag
    const renderTag = (text, bg, color) => {
        if (!text) return `<div class="col-4"></div>`;
        return `
            <div class="col-4">
                <div class="text-center" style="background-color: ${bg}; padding: 5px; border-radius: 18px; color: ${color}; font-weight: 500;">
                    ${text}
                </div>
            </div>
        `;
    };

    // Render all jobs
    let html = "";
    jobsData.forEach((job, index) => {
        // We only want 3 jobs per row originally, but Bootstrap cols will wrap naturally
        // with col-md-4 col-12. The specific spacing classes (like mt-md-5 mt-0) were on rows
        // but applying mt-4 to the columns will keep spacing intact when they wrap.
        
        // Add top margin for jobs after the first row (index >= 3)
        const mtClass = index >= 3 ? "mt-md-5 mt-3" : "mb-1 mb-md-0";

        const typeTag = renderTag(job.type, job.tag_colors.type.bg, job.tag_colors.type.text);
        const expTag = job.tag_colors.experience 
            ? renderTag(job.experience, job.tag_colors.experience.bg, job.tag_colors.experience.text)
            : `<div class="col-4"></div>`;

        const jobCard = `
            <div class="col-md-4 col-12 ${mtClass}">
                <div class="job-card" style="background-color: ${job.bg_color}; cursor: pointer;" onclick="window.location.href='job_details.html?id=${job.id}'">
                    <div class="d-flex gap-2">
                        <div class="job-img-section">
                            <img class="job-img" src="${job.logo}" alt="Job-Img">
                        </div>
                        <div>
                            <h5 class="job-title mb-0">${job.title}</h5>
                            <p class="job-location p-0 m-0 text-muted">${job.company}</p>
                        </div>
                    </div>

                    <div>
                        <h6 class="mt-3">${job.location}</h6>
                        <p class="job-description">${job.short_description}</p>
                    </div>
                    <div class="row align-items-center mt-auto">
                        ${typeTag}
                        ${expTag}
                        <div class="col-1"></div>
                        <div class="col-3 text-end">
                            <button 
                                class="btn  rounded-circle" 
                                onclick="event.stopPropagation(); window.location.href='job_details.html?id=${job.id}'"
                                style="background-color: black; color: white;"
                            ><i class="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        html += jobCard;
    });

    jobsContainer.innerHTML = html;
});
