
       // Glightbox
        // const lightbox = GLightbox({
        //     touchNavigation: true,
        //     loop: true,
        //     autoplayVideos: true
        // });

        $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $("a.white-logo").addClass("logo-dn"),
        $("a.blue-logo").removeClass("logo-dn"),
        $("a.header__wrap__content__nav__item__link").addClass("header-link"),
        $("div.dropbtn__text").addClass("dropbtn-text"),
        $("span.header__wrap__content__hamburger__span").addClass("hamburger-span"),
        $("header").addClass("animate");
            } else {
        $("a.white-logo").removeClass("logo-dn"),
        $("a.blue-logo").addClass("logo-dn"),
        $("a.header__wrap__content__nav__item__link").removeClass("header-link"),
        $("div.dropbtn__text").removeClass("dropbtn-text"),
        $("span.header__wrap__content__hamburger__span").removeClass("hamburger-span"),
        $("div.header__wrap__content__callback").removeClass("header-callback"),
        $("header").removeClass("animate");
    }
    });

    // Accardeon Symbols
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll('.symbol__wrap__item');

        accordions.forEach(el => {
            el.addEventListener('click', (e) => {
                const self = e.currentTarget;
                const control = self.querySelector('.symbol__wrap__item__control');
                const content = self.querySelector('.symbol__wrap__item__content');
                const btnSymbol = self.querySelector('.symbol__wrap__item__control__btn');

                self.classList.toggle('open');

                // если открыт аккордеон
                if (self.classList.contains('open')) {
                    control.setAttribute('aria-expanded', true);
                    content.setAttribute('aria-hidden', false);
                    content.style.maxHeight = content.scrollHeight + 'px';
                    btnSymbol.innerHTML="Свернуть";
                } else {
                    control.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true);
                    content.style.maxHeight = null;
                    btnSymbol.innerHTML="Узнать подробнее";
                }
            });
        });
    });

