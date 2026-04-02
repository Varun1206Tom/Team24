const jobsData = [
    {
        id: 1,
        title: "Sales Head",
        company: "KOKU Beverages",
        location: "Borivali, Mumbai",
        short_description: "We are looking for a talented UX Designer experienced in crafting intuitive user interfaces. Y...",
        full_description: `
            <p class="job-desc">
                Bay Disposal is looking for a safety conscious Roll-off Driver to join the team.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Operate garbage truck on specified routes</li>
                <li>Read route sheets and service customers</li>
                <li>Perform vehicle inspection and maintenance</li>
                <li>Handle loading/unloading tasks</li>
                <li>Interact professionally with customers</li>
            </ul>

            <h6 class="sub-title">WORKING CONDITIONS AND PHYSICAL EFFORT:</h6>
            <ul class="job-list">
                <li>Requires heavy lifting and physical activity</li>
                <li>Exposure to outdoor weather conditions</li>
            </ul>

            <h6 class="sub-title">JOB REQUIREMENTS:</h6>
            <ul class="job-list">
                <li>Competitive pay</li>
                <li>Health and insurance benefits</li>
                <li>Stable work environment</li>
            </ul>
        `,
        type: "Hybrid",
        experience: "Middle+",
        bg_color: "#CEBCFF",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#F6D3FF", text: "#E168FF" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 2,
        title: "UX Designer",
        company: "KOKU Beverages",
        location: "Borivali, Mumbai",
        short_description: "We are looking for a talented UX Designer experienced in crafting intuitive user interfaces. Y...",
        full_description: `
            <p class="job-desc">
                Join our design team to create beautiful and functional user experiences.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Design user flows and wireframes</li>
                <li>Create prototypes and high-fidelity mockups</li>
                <li>Collaborate with product managers and engineers</li>
            </ul>
        `,
        type: "Hybrid",
        experience: "Junior",
        bg_color: "#FFE078",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#BDFF95", text: "#3C9D00" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "KOKU Beverages",
        location: "Borivali, Mumbai",
        short_description: "We are looking for a talented Frontend Developer experienced in building web applications. Y...",
        full_description: `
            <p class="job-desc">
                Looking for a great React developer to join our growing tech team.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Develop responsive web interfaces</li>
                <li>Implement UI components using React</li>
                <li>Optimize applications for maximum speed</li>
            </ul>
        `,
        type: "Full-time",
        experience: "",
        bg_color: "#AB93E0",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: null },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "KOKU Beverages",
        location: "Borivali, Mumbai",
        short_description: "We are looking for a talented Marketing Manager experienced in driving brand growth. Y...",
        full_description: `
            <p class="job-desc">
                Drive our marketing efforts and plan successful campaigns.
            </p>
        `,
        type: "Hybrid",
        experience: "Middle+",
        bg_color: "#DCC1FF",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#F6D3FF", text: "#E168FF" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 5,
        title: "Data Analyst",
        company: "KOKU Beverages",
        location: "Borivali, Mumbai",
        short_description: "We are looking for a talented Data Analyst experienced in crafting intuitive dashboards. Y...",
        full_description: `
             <p class="job-desc">
                Gather and analyze data to improve business decisions.
            </p>
        `,
        type: "Hybrid",
        experience: "Junior",
        bg_color: "#EBF6EE",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#BDFF95", text: "#3C9D00" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 6,
        title: "Backend Engineer",
        company: "KOKU Beverages",
        location: "Borivali, Mumbai",
        short_description: "We are looking for a talented Backend Engineer experienced in building scalable APIs. Y...",
        full_description: `
             <p class="job-desc">
                Build robust backend services and APIs.
            </p>
        `,
        type: "Full-time",
        experience: "",
        bg_color: "#9DF9FF",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: null },
        logo: "/assets/images/careers-img/career_logo.avif"
    }
];

// Helper to fetch job details by ID
function getJobById(id) {
    return jobsData.find(job => job.id === parseInt(id));
}
