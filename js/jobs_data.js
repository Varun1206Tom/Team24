const jobsData = [
    {
        id: 1,
        title: "Back Office Executive",
        company: "Namaste Chai",
        location: "Mumbai, Maharashtra",
        short_description: "Support backend operations through data management and administrative coordination.",
        full_description: `
            <p class="job-desc">
                Support backend operations through data management and administrative coordination.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Manage data entry and documentation</li>
                <li>Work on Excel reports and MIS</li>
                <li>Coordinate with internal teams</li>
                <li>Maintain records and reports</li>
            </ul>

            <h6 class="sub-title">JOB REQUIREMENTS:</h6>
            <ul class="job-list">
                <li>Computer proficiency</li>
                <li>Excel expertise</li>
            </ul>
        `,
        type: "Full-time",
        experience: "",
        bg_color: "#CEBCFF",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#F6D3FF", text: "#E168FF" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 2,
        title: "Driver – LMV (Light Motor Vehicle)",
        company: "Team24",
        location: "Panaji, Goa",
        short_description: "Responsible for safe and timely transportation of staff, documents, and goods using light motor vehicles.",
        full_description: `
            <p class="job-desc">
                Responsible for safe and timely transportation of staff, documents, and goods using light motor vehicles.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Drive company vehicles safely and responsibly</li>
                <li>Transport staff, materials, and documents as assignedg</li>
                <li>Maintain vehicle cleanliness and basic upkeep</li>
                <li>Ensure timely servicing and report issues</li>
                <li>Follow all traffic rules and company policies</li>
                <li>Maintain travel logs and fuel records</li>
            </ul>

            <h6 class="sub-title">Qualifications:</h6>
            <ul class="job-list">
                <li>Valid LMV Driving License</li>
                <li>Minimum 2–5 years of driving experience</li>
            </ul>

            <h6 class="sub-title">JOB REQUIREMENTS:</h6>
            <ul class="job-list">
                <li>Safe Driving</li>
                <li>Time Management</li>
                <li>Basic Vehicle Maintenance</li>
            </ul>
        `,
        type: "Full time",
        experience: "Middle+",
        bg_color: "#FFE078",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#BDFF95", text: "#3C9D00" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 3,
        title: "Driver – HMV (Heavy Motor Vehicle)",
        company: "Team24",
        location: "Panaji, Goa",
        short_description: "Responsible for transportation of goods and materials using heavy vehicles, ensuring timely and safe delivery.",
        full_description: `
            <p class="job-desc">
                Responsible for transportation of goods and materials using heavy vehicles, ensuring timely and safe delivery.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Operate trucks or heavy vehicles for goods transportation</li>
                <li>Ensure safe loading, unloading, and delivery</li>
                <li>Maintain vehicle condition and report breakdowns</li>
                <li>Follow delivery schedules and routes</li>
                <li>Maintain documentation (challans, invoices, permits)</li>
                <li>Ensure compliance with transport regulations</li>
            </ul>

            <h6 class="sub-title">Qualifications:</h6>
            <ul class="job-list">
                <li>Valid HMV Driving License</li>
                <li>3–7 years of experience in commercial driving</li>
            </ul>

            <h6 class="sub-title">JOB REQUIREMENTS:</h6>
            <ul class="job-list">
                <li>Heavy Vehicle Handling</li>
                <li>Route Knowledge</li>
                <li>Safety &amp; Compliance</li>
            </ul>
        `,
        type: "Full-time",
        experience: "Middle+",
        bg_color: "#AB93E0",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#BDFF95", text: "#3C9D00" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 4,
        title: "Interior Designer",
        company: "Namaste Chai",
        location: "Mumbai, Maharashtra",
        short_description: "Design aesthetically pleasing and functional café spaces aligned with brand",
        full_description: `
            <p class="job-desc">
                Design aesthetically pleasing and functional café spaces aligned with brand
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Plan and design outlet interiors</li>
                <li>Coordinate with vendors and contractors</li>
                <li>Ensure brand consistency in design</li>
                <li>Manage project timelines</li>
            </ul>

        `,
        type: "Full-time",
        experience: "Middle+",
        bg_color: "#DCC1FF",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#F6D3FF", text: "#E168FF" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 5,
        title: "Graphic Designer",
        company: "Namaste Chai",
        location: "Mumbai, Maharashtra",
        short_description: "Create engaging visual content to enhance brand identity and marketing campaigns.",
        full_description: `
            <p class="job-desc">
                Create engaging visual content to enhance brand identity and marketing campaigns.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Design creatives for digital and print media</li>
                <li>Work on branding and campaigns</li>
                <li>Coordinate with marketing team</li>
                <li>Ensure timely delivery of creatives</li>
            </ul>

        `,
        type: "Full-time",
        experience: "",
        bg_color: "#EBF6EE",
        tag_colors: { type: { bg: "#D0FCFF", text: "#0076FF" }, experience: { bg: "#BDFF95", text: "#3C9D00" } },
        logo: "/assets/images/careers-img/career_logo.avif"
    },
    {
        id: 6,
        title: "F&B Associate",
        company: "Namaste Chai",
        location: "Canacona, Goa",
        short_description: "Deliver excellent customer service and support daily café operations efficiently.",
        full_description: `
             <p class="job-desc">
                Deliver excellent customer service and support daily café operations efficiently.
            </p>

            <h6 class="sub-title">DUTIES AND RESPONSIBILITIES:</h6>
            <ul class="job-list">
                <li>Take customer orders and ensure timely service</li>
                <li>Prepare and serve food & beverages</li>
                <li>Maintain hygiene and cleanliness standards</li>
                <li>Handle billing and basic POS operations</li>
                <li>Support inventory and stock checks</li>
            </ul>

            <h6 class="sub-title">Benefits:</h6>
            <ul class="job-list">
                <li>Accommodation</li>
                <li>Food provided</li>
            </ul>

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
