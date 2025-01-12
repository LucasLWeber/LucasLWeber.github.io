export default class ScrollSuave {
    constructor(links, options) {
        this.linksInternos = document.querySelectorAll(links);
        this.offset = options?.offset || 0; 
        this.options = {
            behavior: 'smooth',
            block: 'start',
            ...options, 
        };
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        if (section) {
            const topPosition = section.getBoundingClientRect().top + window.scrollY - this.offset;
            window.scrollTo({
                top: topPosition,
                behavior: this.options.behavior,
            });
        }
    }

    addLinkEvent() {
        this.linksInternos.forEach((link) => {
            link.addEventListener('click', this.scrollToSection);
        });
    }

    init() {
        if (this.linksInternos.length) {
            this.addLinkEvent();
            return this;
        }
    }
}
