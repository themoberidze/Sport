// --- Header Navigation
const nav = ["Home", "Football", "Basketball", "Rugby", "Tennis", "Other Sports", "Sport Shop", "Tickets"];
const links = ["index.html", "football.html", "basketball.html", "rugby.html", "tennis.html", "othersports.html", "sportshop.html", "tickets.html"];
let navtext = "<ul>";

for(let i = 0; i < nav.length; i++){
    navtext += '<li><a href="' + links[i] +'">' + nav[i] + "</a></li>";
}
navtext += '</ul>';
document.getElementById("nav").innerHTML = navtext;

// --- Slider
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
            items:4
        },
        1500:{
            items:5
        }
    }
}
)

// --- Chat Function
function show(){
    document.getElementById("messagebox").style.display = "block";
}
function hide(){
    document.getElementById("messagebox").style.display = "none";
}