// toggle theme
var html = document.querySelector('html')
var themeToggle = document.getElementById('theme-toggle-button')
var theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
html.classList.add(theme)


// open nav
var menuBtn = document.querySelector(".mobile-menu-btn")
var navLinks = document.querySelector(".nav-links")

// scroll to up
var scrollToTop = document.getElementById('scroll-to-top')

// navs and taps
var portfolioItems = document.querySelectorAll('.portfolio-item');
var portfolioFilters = document.getElementById('portfolio-filters');

// carousel
var testimonialsCarousel = document.getElementById('testimonials-carousel');
var testimonialsDistanse = 0;
var testimonialsNum =  0;
var nextTestimonial = document.getElementById('next-testimonial');
var prevTestimonial = document.getElementById('prev-testimonial');
var carouselIndicators = document.querySelectorAll('.carousel-indicator')
var carouselIndex = 0;

// setting
var settingsToggle = document.getElementById("settings-toggle")
var settingsSidebar = document.getElementById("settings-sidebar")
var closeSettings = document.getElementById("close-settings")
var fontOptions = document.querySelectorAll(".font-option")
var themeColorsGrid = document.getElementById("theme-colors-grid")
var resetSettings = document.getElementById("reset-settings")

// font storage
var font = localStorage.getItem("font") ? localStorage.getItem("font") : "font-tajawal"
var fontEl = Array.from(fontOptions).find(function(el) {
    return el.dataset.font === font;
});

document.body.classList.remove(fontOptions[1].getAttribute("data-font"))
fontOptions[1].classList.add('border-slate-200' , 'dark:border-slate-700')
fontOptions[1].classList.remove('active' , 'border-primary' , 'bg-slate-50' , 'dark:bg-slate-800')

document.body.classList.add(font)
fontEl.classList.remove('border-slate-200' , 'dark:border-slate-700')
fontEl.classList.add('active' , 'border-primary' , 'bg-slate-50' , 'dark:bg-slate-800')

// colors
var colors = [{
        name: "Purple Blue",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
    }, {
        name: "Pink Orange",
        primary: "#ec4899",
        secondary: "#f97316",
        accent: "#fb923c"
    }, {
        name: "Green Emerald",
        primary: "#10b981",
        secondary: "#059669",
        accent: "#34d399"
    }, {
        name: "Blue Cyan",
        primary: "#3b82f6",
        secondary: "#06b6d4",
        accent: "#22d3ee"
    }, {
        name: "Red Rose",
        primary: "#ef4444",
        secondary: "#f43f5e",
        accent: "#fb7185"
    }, {
        name: "Amber Orange",
        primary: "#f59e0b",
        secondary: "#ea580c",
        accent: "#fbbf24"
    }];

// create colors
for(var i = 0;i < colors.length;i++){
    themeColorsGrid.append(createColor(colors[i]))
}

var storedColor = localStorage.getItem("color") ? JSON.parse(localStorage.getItem("color")) : {
        name: "Purple Blue",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
}

var colorEl = Array.from(themeColorsGrid.children).find(function(el) {
    return el.dataset.primary === storedColor.primary;
});
themeColorsGrid.children[0].classList.remove('ring-2' , 'ring-primary' , 'ring-offset-2' , 'ring-offset-white' , 'dark:ring-offset-slate-900')
colorEl.classList.add('ring-2' , 'ring-primary' , 'ring-offset-2' , 'ring-offset-white' , 'dark:ring-offset-slate-900')
document.documentElement.style.setProperty('--color-primary', storedColor.primary);
document.documentElement.style.setProperty('--color-secondary', storedColor.secondary);
document.documentElement.style.setProperty('--color-accent', storedColor.accent);




// toggle theme
themeToggle.addEventListener("click" , function(){
    if(html.classList.contains('light')){
        html.classList.remove('light')
        html.classList.add('dark')
        theme = "dark"
    }else{
        html.classList.remove('dark')
        html.classList.add('light')
        theme = "light"
    }
    localStorage.setItem("theme" , theme)
})


// open nav
menuBtn.addEventListener("click" , function(){
    if(navLinks.classList.contains('active')){
        navLinks.classList.remove('active')
        menuBtn.setAttribute("aria-label" , "فتح القائمة")
    }else{
        navLinks.classList.add('active')
        menuBtn.setAttribute("aria-label" , "اغلاق القائمة")
    }
})


// scroll spy
window.addEventListener("scroll" , function(){
    var section = document.elementFromPoint(10 , window.innerHeight / 5);
    var navId;

    for(var i = 0; i < navLinks.children.length - 1;i++){
        navId = navLinks.children[i].href.split("#")[1];
        if(navLinks.children[i].classList.contains("active")){
            navLinks.children[i].classList.remove("active")
        }
        if(section.id == navId){
            navLinks.children[i].classList.add("active")
        }
    }

    if(section.classList.contains("hero")){
        navLinks.children[0].classList.add("active")
        scrollToTop.classList.add('invisible' , 'opacity-0')
        scrollToTop.classList.remove('visible' , 'opacity-100')
    }
    else{
        scrollToTop.classList.remove('invisible' , 'opacity-0')
        scrollToTop.classList.add('visible' , 'opacity-100')
    }
})


// scroll to up
scrollToTop.addEventListener("click" , function(){
    document.getElementById("hero-section").scrollIntoView();
})


// navs and taps
portfolioFilters.addEventListener("click" , function(e){
    if(e.target != portfolioFilters){
        var filter = e.target.getAttribute('data-filter');

        for(var i = 0; i < portfolioFilters.children.length;i++){
            if(portfolioFilters.children[i] == e.target){
                portfolioFilters.children[i].classList.add('active' , 'bg-linear-to-r' , 'from-primary' , 'to-secondary' , 'text-white' , 'hover:shadow-lg' , 'hover:shadow-primary/50')
                portfolioFilters.children[i].classList.remove('bg-white' , 'dark:bg-slate-800' , 'text-slate-600' , 'dark:text-slate-300' , 'hover:bg-slate-100' , 'dark:hover:bg-slate-700' , 'hover:shadow-primary/50' , 'border' , 'border-slate-300' , 'dark:border-slate-700')
            }else{
                portfolioFilters.children[i].classList.remove('active' , 'bg-linear-to-r' , 'from-primary' , 'to-secondary' , 'text-white' , 'hover:shadow-lg' , 'hover:shadow-primary/50')
                portfolioFilters.children[i].classList.add('bg-white' , 'dark:bg-slate-800' , 'text-slate-600' , 'dark:text-slate-300' , 'hover:bg-slate-100' , 'dark:hover:bg-slate-700' , 'hover:shadow-primary/50' , 'border' , 'border-slate-300' , 'dark:border-slate-700')
            }
        }

        for(let i = 0;i < portfolioItems.length;i++){
            portfolioItems[i].style.cssText = `
                    opacity : 0;
                    transform : scale(.80);
                `
            setTimeout(function(){
                portfolioItems[i].classList.add("hidden")
            },300)
        }

        setTimeout(function(){
            for(let i = 0;i < portfolioItems.length;i++){
                if(portfolioItems[i].getAttribute('data-category') == filter || filter == 'all'){
                    portfolioItems[i].classList.remove("hidden")
                    setTimeout(function(){
                        portfolioItems[i].style.cssText = `
                            opacity : 1;
                            transform : scale(1);
                        `
                    },50)                    
                }
            }
        },300)
    }
    
})


// carousel 
nextTestimonial.addEventListener("click" , function(){
    testimonialsNum =  window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
    testimonialsDistanse += 100 / testimonialsNum
    carouselIndex++;
    if(testimonialsDistanse > ((testimonialsCarousel.children.length - testimonialsNum) * (100 / testimonialsNum))){
        testimonialsDistanse = 0
        carouselIndex = 0
    }

    for(var i = 0;i < carouselIndicators.length;i++){
        if(carouselIndicators[i].getAttribute("data-index") == carouselIndex){
            carouselIndicators[i].classList.add('bg-accent')
            carouselIndicators[i].classList.remove('dark:bg-slate-600')
        }else{
            carouselIndicators[i].classList.remove('bg-accent')
            carouselIndicators[i].classList.add('dark:bg-slate-600')
        }
    }
    
    

    testimonialsCarousel.style.cssText = `
        transform: translateX(${testimonialsDistanse}%);
    `
    
})

prevTestimonial.addEventListener("click" , function(){
    testimonialsNum =  window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
    testimonialsDistanse -= 100 / testimonialsNum
    carouselIndex--;

    if(testimonialsDistanse < -1){
        testimonialsDistanse = ((testimonialsCarousel.children.length - testimonialsNum) * (100 / testimonialsNum))
        carouselIndex = 4
    }

    for(var i = 0;i < carouselIndicators.length;i++){
        if(carouselIndicators[i].getAttribute("data-index") == carouselIndex){
            carouselIndicators[i].classList.add('bg-accent')
            carouselIndicators[i].classList.remove('dark:bg-slate-600')
        }else{
            carouselIndicators[i].classList.remove('bg-accent')
            carouselIndicators[i].classList.add('dark:bg-slate-600')
        }
    }
    
    testimonialsCarousel.style.cssText = `
        transform: translateX(${testimonialsDistanse}%);
    `
    
})

for(let i = 0;i < carouselIndicators.length;i++){
    carouselIndicators[i].addEventListener("click" , function(){
        testimonialsNum =  window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
        testimonialsDistanse = (100 / testimonialsNum) * i
        testimonialsCarousel.style.cssText = `
            transform: translateX(${testimonialsDistanse}%);
        `
        carouselIndex = i
        for(var j = 0;j < carouselIndicators.length;j++){
        if(carouselIndicators[j].getAttribute("data-index") == carouselIndicators[i].getAttribute("data-index")){
            carouselIndicators[j].classList.add('bg-accent')
            carouselIndicators[j].classList.remove('dark:bg-slate-600')
        }else{
            carouselIndicators[j].classList.remove('bg-accent')
            carouselIndicators[j].classList.add('dark:bg-slate-600')
        }
    }
    })
}


// setting
settingsToggle.addEventListener("click" , function(){
    settingsToggle.style.right = "20rem";
    settingsSidebar.classList.remove("translate-x-full")
    settingsSidebar.setAttribute("aria-hidden" , "false")
})

closeSettings.addEventListener("click" , function(){
    settingsToggle.style.right = "0";
    settingsSidebar.classList.add("translate-x-full")
    settingsSidebar.setAttribute("aria-hidden" , "true")
})

resetSettings.addEventListener("click" , function(){
    for(var j = 0;j < fontOptions.length;j++){
        document.body.classList.remove(fontOptions[j].getAttribute("data-font"))
        fontOptions[j].classList.add('border-slate-200' , 'dark:border-slate-700')
        fontOptions[j].classList.remove('active' , 'border-primary' , 'bg-slate-50' , 'dark:bg-slate-800')
    }
    document.body.classList.add(fontOptions[1].getAttribute("data-font"))
    fontOptions[1].classList.remove('border-slate-200' , 'dark:border-slate-700')
    fontOptions[1].classList.add('active' , 'border-primary' , 'bg-slate-50' , 'dark:bg-slate-800')
    localStorage.setItem("font" , fontOptions[1].getAttribute("data-font"))
    for(var j = 0;j < themeColorsGrid.children.length;j++){
        themeColorsGrid.children[j].classList.remove('ring-2' , 'ring-primary' , 'ring-offset-2' , 'ring-offset-white' , 'dark:ring-offset-slate-900')
    }
    themeColorsGrid.children[0].classList.add('ring-2' , 'ring-primary' , 'ring-offset-2' , 'ring-offset-white' , 'dark:ring-offset-slate-900')
    document.documentElement.style.setProperty('--color-primary', colors[0].primary);
    document.documentElement.style.setProperty('--color-secondary', colors[0].secondary);
    document.documentElement.style.setProperty('--color-accent', colors[0].accent);
    localStorage.setItem("color" , JSON.stringify(colors[0]))
})


// change font
for(let i = 0;i < fontOptions.length;i++){
    fontOptions[i].addEventListener("click" , function(){
        for(var j = 0;j < fontOptions.length;j++){
            document.body.classList.remove(fontOptions[j].getAttribute("data-font"))
            fontOptions[j].classList.add('border-slate-200' , 'dark:border-slate-700')
            fontOptions[j].classList.remove('active' , 'border-primary' , 'bg-slate-50' , 'dark:bg-slate-800')
        }
        document.body.classList.add(fontOptions[i].getAttribute("data-font"))
        fontOptions[i].classList.remove('border-slate-200' , 'dark:border-slate-700')
        fontOptions[i].classList.add('active' , 'border-primary' , 'bg-slate-50' , 'dark:bg-slate-800')
        localStorage.setItem("font" , fontOptions[i].getAttribute("data-font"))
    })
}

// change colors
for(let i = 0;i < themeColorsGrid.children.length;i++){
    themeColorsGrid.children[i].addEventListener("click", function(){
        for(var j = 0;j < themeColorsGrid.children.length;j++){
            themeColorsGrid.children[j].classList.remove('ring-2' , 'ring-primary' , 'ring-offset-2' , 'ring-offset-white' , 'dark:ring-offset-slate-900')
        }
        themeColorsGrid.children[i].classList.add('ring-2' , 'ring-primary' , 'ring-offset-2' , 'ring-offset-white' , 'dark:ring-offset-slate-900')
        document.documentElement.style.setProperty('--color-primary', colors[i].primary);
        document.documentElement.style.setProperty('--color-secondary', colors[i].secondary);
        document.documentElement.style.setProperty('--color-accent', colors[i].accent);
        localStorage.setItem("color" , JSON.stringify(colors[i]))
    })
}





function createColor(color){
    var button = document.createElement("button");

    button.className =
    "w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm";

    button.title = color.name;
    button.setAttribute("data-primary", color.primary);
    button.setAttribute("data-secondary", color.secondary);

    button.style.background =
    `linear-gradient(135deg, ${color.primary}, ${color.secondary})`;

    return button
}