var tl = gsap.timeline();

gsap.from("#logo",{
    opacity: 0,
    y:-15,
    duration: 1,
    delay: 0.2
})

var menu = document.querySelector("#menu");
var close = document.querySelector(".ri-close-line");

menu.addEventListener("click", () => {
    tl.to("#right-menu", {
        right: 0,
        duration: 0.5,
        borderRadius: "20px 0 0 20px",
        // ease: "elastic.out(1,0.8)"
    })
    tl.from("#right-menu h4", {
        x: 100,
        duration: 0.2,
        opacity: 0,
        stagger: 0.2
    })
})

close.addEventListener("click", () =>{
    tl.to("#right-menu", {
        right: "-40%",
        borderRadius: "50%"
    })
    // tl.reverse();
})

var h1 = document.querySelector("#hero");
var hero = h1.textContent;
var spl = hero.split("");
h1.innerHTML = "";
spl.forEach((e,i) =>{
    let len = (spl.length/2);
    if(i<len) {
        h1.innerHTML += `<span class="s">${e}</span>`;
    } else {
        h1.innerHTML += `<span class="e">${e}</span>`;
    }
})

gsap.from(".s", {
    opacity: 0,
    y: 100,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.2
})

gsap.from(".e", {
    opacity: 0,
    y: 100,
    duration: 0.7,
    delay: 0.5,
    stagger: -0.15
})

document.addEventListener("mousemove", (e)=>{
    gsap.to("#cur", {
        x: e.x,
        y: e.y,
        ease: "back.out"
    })
})

var initialPos = `M 0 100 Q 500 100 990 100`;
var defaultPos = `M 0 100 Q 500 100 ${window.innerWidth} 100`;

var area = document.querySelector("#string");
var line = document.querySelector("#line");

gsap.to("svg path", {
    attr: {
        d: defaultPos
    }
})

area.addEventListener("mousemove", (e)=>{
    var w = window.innerWidth;
    initialPos = `M 0 100 Q ${e.x} ${e.y} ${w} 100`;
    gsap.to("svg path", {
        attr: {
            d: initialPos
        },
        duration: 0.6,
        ease: "power3.out"
    })
})

area.addEventListener("mouseleave",()=>{
    var w = window.innerWidth;
    gsap.to("svg path", {
        attr: {
            d: defaultPos
        },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})