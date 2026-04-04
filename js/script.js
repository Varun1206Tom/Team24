document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // SLICK SLIDER
    // ================================
    $('.koku-slider').each(function () {
        if (!$(this).hasClass('slick-initialized')) {
            $(this).slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: false,

                draggable: true,
                swipeToSlide: true,
                touchMove: true,

                speed: 600,
                cssEase: 'ease',

                responsive: [
                    { breakpoint: 1440, settings: { slidesToShow: 4 } },
                    { breakpoint: 1024, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } }
                ]
            });
        }
    });


    // ================================
    // STEP SCROLL SYSTEM
    // ================================

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".section").forEach(section => {

        const steps = section.querySelectorAll(".scroll-step");
        if (!steps.length) return;

        const totalSteps = steps.length;
        console.log("Window InnerWidth :", window.innerWidth);
        
        // const isMobile = window.innerWidth < 768;
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        console.log("Is Mobile :", isMobile);
        
        // Remove the extra margin so there is no "dead scrolling"
        // The section will immediately begin overlapping as you scroll!
        section.style.marginBottom = "400px";

        // Pre-set step visual states
        // Initially, the first text is fully visible and centered. The next text sits below it slightly faded.
        // gsap.set(steps, { 
        //     opacity: 0.2,
        //     y: isMobile ? 80 : 40
        // });
        // gsap.set(steps[0], { opacity: 1, y: 0 });
        // steps[0].classList.add("active");
        // Remove CSS native snap to fix bottom-to-top scrolling and sticky-lock bug
        document.documentElement.style.scrollSnapType = "none";
        section.style.scrollSnapAlign = "none";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=105vh", // Matches CSS exact section height for perfect overlapping
                scrub: 0.2, // A very slight smoothing reduction in speed instead of instant 'true'
                invalidateOnRefresh: true, // 🔥 important
                snap: {
                    snapTo: [0, 1], // Always snaps cleanly to either the start or end of the overlap
                    duration: 3.5, // Massively slowed down the section slide to 3.5 full seconds
                    delay: 0,
                    ease: "power4.inOut" // Extremely soft acceleration and deceleration
                }
            }
        });

        // The text transitions in the FIRST 8% of the scroll overlap, making it slightly slower than before
        // const textDuration = isMobile ? 0.08 : 0.08;

        // for (let i = 1; i < totalSteps; i++) {
        //     // The first text smoothly moves slightly upward (not completely disappear)
        //     tl.to(steps[i - 1], {
        //         opacity: 0.2,
        //         y: isMobile ? -80 : -60,
        //         // y: -60, // Moves slightly upward out of the way
        //         duration: textDuration,
        //         ease: "power2.inOut",
        //         onStart: () => {
        // steps[i - 1].classList.remove("active");
        // steps[i].classList.add("active");
        // },
        // onReverseComplete: () => {
        // steps[i - 1].classList.add("active");
        // steps[i].classList.remove("active");
        // }
        //         // onUpdate: function () {
        //             // if (this.progress() > 0.5) {
        //             //     steps[i - 1].classList.remove("active");
        //             //     steps[i].classList.add("active");
        //             // } else {
        //             //     steps[i - 1].classList.add("active");
        //             //     steps[i].classList.remove("active");
        //             // }
        //         // }
                
        //     });

        //     // The second text fades in and slides up into the exact position where the first text was
        //     tl.to(steps[i], {
        //         opacity: 1,
        //         y: 0,
        //         duration: textDuration,
        //         ease: "power2.inOut"
        //     }, "<");
        // }

        // Fill out the remaining 92% of the distance so the next section creeps up beautifully slowly while text is stable
        tl.to({}, { duration: 0.92 });

    });


    // ================================
    // SCROLL ANIMATION (SLIDE UP & FADE)
    // ================================

    const animatedElements = document.querySelectorAll(".scroll-animate");

    if (animatedElements.length > 0) {
        const scrollObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    // Comment out the next line if you want the animation to reverse when scrolling away
                    // scrollObserver.unobserve(entry.target); 
                } else {
                    // Reversing animation on scroll out
                    entry.target.classList.remove("visible");
                }
            });
        }, { threshold: 0.5 }); // Triggers when 60% of the element is visible

        animatedElements.forEach(el => scrollObserver.observe(el));
    }

});