class HorizontalScroll {
    horizontallSection;
    constructor(horizontallSection) {
        this.horizontallSection = horizontallSection;

        this.setupHorizontalSection();
        this.scrollHorizontalSections();

        window.addEventListener(
            "resize",
            this.setupHorizontalSection.bind(this)
        );
        window.addEventListener(
            "resize",
            this.scrollHorizontalSections.bind(this)
        );

        window.addEventListener(
            "scroll",
            this.scrollHorizontalSections.bind(this)
        );
    }
    setupHorizontalSection() {
        let distanceToScroll =
            this.horizontallSection.firstElementChild.offsetWidth -
            (window.innerWidth - window.innerHeight);
        this.horizontallSection.style.height = `${distanceToScroll}px`;
    }

    scrollHorizontalSections() {
        let sectionOffset = this.horizontallSection.getBoundingClientRect();
        let offsetX = 0;

        if (
            sectionOffset.top <= 0 &&
            sectionOffset.bottom >= window.innerHeight
        ) {
            // scroll horizontally
            offsetX = sectionOffset.top;
            // stick
            this.horizontallSection.firstElementChild.style.position = "fixed";
            this.horizontallSection.firstElementChild.style.top = 0;
        } else {
            // unstick to top
            this.horizontallSection.firstElementChild.style.position =
                "absolute";
            this.horizontallSection.firstElementChild.style.top = 0;
            this.horizontallSection.firstElementChild.style.bottom = "unset";

            if (sectionOffset.bottom <= window.innerHeight) {
                // unstick to bottom
                this.horizontallSection.firstElementChild.style.position =
                    "absolute";
                this.horizontallSection.firstElementChild.style.top = "unset";
                this.horizontallSection.firstElementChild.style.bottom = 0;
                // scroll
                offsetX =
                    -this.horizontallSection.firstElementChild.offsetWidth +
                    window.innerWidth;
            }
        }
        this.horizontallSection.firstElementChild.style.left = `${offsetX}px`;
    }
    destroy() {
        window.removeEventListener(
            "resize",
            this.setupHorizontalSection.bind(this)
        );
        window.removeEventListener(
            "resize",
            this.scrollHorizontalSections.bind(this)
        );

        window.removeEventListener(
            "scroll",
            this.scrollHorizontalSections.bind(this)
        );
    }
}

export default HorizontalScroll