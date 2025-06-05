const menuToggle = document.getElementById("menuToggle");
const menubar = document.getElementById("menubar");
const span1 = document.getElementById("span-1");
const span2 = document.getElementById("span-2");
const span3 = document.getElementById("span-3");

menuToggle.addEventListener("click", function () {
    const isOpen = menubar.classList.contains("grid-rows-[1fr]");
    menubar.classList.toggle("grid-rows-[1fr]", !isOpen);
    menubar.classList.toggle("mt-8", !isOpen);
    span1.classList.toggle("activeNavBar2", !isOpen);
    span2.classList.toggle("activeNavBar3", !isOpen);
    span3.classList.toggle("activeNavBar", !isOpen);
    document.body.classList.toggle("overflow-hidden", !isOpen)
});

document.querySelectorAll("#menubar li").forEach(item => {
    item.addEventListener("click", () => {
        menubar.classList.remove("grid-rows-[1fr]");
        menubar.classList.remove("mt-8");
        span1.classList.remove("activeNavBar2");
        span2.classList.remove("activeNavBar3");
        span3.classList.remove("activeNavBar");
        document.body.classList.remove("overflow-hidden")
    });
});
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");

searchIcon.addEventListener("click", () => {
    const isOpen = searchBar.classList.contains("showSearchBar");
    searchBar.classList.toggle("showSearchBar", !isOpen);
    searchIcon.classList.toggle("opacity-0", !isOpen);
});

document.addEventListener("click", (e) => {
    const clickedOutside = !searchBar.contains(e.target) && !searchIcon.contains(e.target);
    if (clickedOutside) {
        searchBar.classList.remove("showSearchBar");
        searchIcon.classList.remove("opacity-0");
    }
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    gap: 10,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,

});
function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    const rotate = document.getElementById('rotate-180')
    rotate.classList.toggle('rotate-180')
    if (dropdown.classList.contains('opacity-0')) {
        dropdown.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
        dropdown.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    } else {
        dropdown.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        dropdown.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    }
}
const tl = gsap.timeline()
tl.from("nav", {
    duration: 0.5,
    y: -100,
    opacity: 0,
});
tl.from("#logo svg path", {
    duration: 0.3,
    y: -100,
    stagger: 0.1,
});
tl.from("#searchBar", {
    duration: 0.3,
    y: -100,
});
tl.from("#searchBarLinks", {
    duration: 0.3,
    y: -100,
    stagger: 0.1
});
tl.from("#bell", {
    duration: 0.3,
    y: -100
});
tl.from("#user", {
    duration: 0.3,
    x: 200,
    opacity: 0
});
tl.from("#userLinks", {
    duration: 0.3,
    x: 200,
    stagger: 0.1,
});
if (window.innerWidth >= 768) {
    const tl2 = gsap.timeline()
    tl2.from("#navTab", {
        duration: 0.3,
        x: -500,
    });
    tl2.from("#navTabItem", {
        duration: 0.3,
        x: -500,
        stagger: 0.1,
    });
    const tl3 = gsap.timeline()
    tl3.from("#rightBar", {
        duration: 0.5,
        x: 500,
    });
    tl3.from("#rightBaritems", {
        duration: 0.5,
        x: 500,
    });
    tl3.from("#rightBaritems .slick-dots li", {
        duration: 0.5,
        x: 500,
        stagger: 0.2
    });
    const tl4 = gsap.timeline()
    tl4.from("#main-content", {
        opacity:0,
        scale:0
    });
    tl4.from("#main-content div", {
        opacity:0,
        scale: 0,
        stagger:.1
    });
    tl4.from("button", {
        duration: 0.5,
        x: 500,
        stagger: 0.1
    });
}
const tl5 = gsap.timeline()
tl5.from("footer", {
    y: 500,
    duration: 0.3,
});
tl5.from("footer h5", {
    y: 500,
    duration: 0.3,
    stagger: .1
});
tl5.from("footer div svg", {
    x: 500,
    duration: 1,
    stagger: .1,
    rotate: 900
});