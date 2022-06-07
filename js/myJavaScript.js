var trainTtl = document.querySelectorAll(".train-course");
var contents = document.querySelectorAll(".training");
var trainHeaders = document.querySelectorAll(".train-p");
var days = document.querySelectorAll(".day");
var workouts = document.querySelectorAll(".t-data")
var monday = document.querySelectorAll(".monday");
var tuesday = document.querySelectorAll(".tuesday");
var wednesday = document.querySelectorAll(".wednesday");
var thursday = document.querySelectorAll(".thursday");
var friday = document.querySelectorAll(".friday");

trainTtl[0].addEventListener("click", function () { ChangeContent(0) });
trainTtl[1].addEventListener("click", function () { ChangeContent(1) });
trainTtl[2].addEventListener("click", function () { ChangeContent(2) });
trainTtl[3].addEventListener("click", function () { ChangeContent(3) });

days[0].addEventListener("click", function () { ChangeColor(0) });
days[1].addEventListener("click", function () { ChangeColor(1) });
days[2].addEventListener("click", function () { ChangeColor(2) });
days[3].addEventListener("click", function () { ChangeColor(3) });
days[4].addEventListener("click", function () { ChangeColor(4) });


function ChangeColor(y) {
    for (var i = 0; i < days.length; i++) {
        var daysClass = days[i].classList;
        daysClass = daysClass.toString();

        if (daysClass.includes("org-red-color")) {
            days[i].classList.toggle("org-red-color");
        }

        for (var j = 0; j < workouts.length; j++) {
            var woutClass = workouts[j].classList;
            woutClass = woutClass.toString();
            if (woutClass.includes("d-none")) {
                // DO NOTHING
            }
            else {
                workouts[j].classList.toggle("d-none");
            }
        }

    }

    if (y == 0)
        for (m = 0; m < monday.length; m++) {
            monday[m].classList.toggle("d-none");
        }

    if (y == 1)
        for (m = 0; m < tuesday.length; m++) {
            tuesday[m].classList.toggle("d-none");
        }

    if (y == 2)
        for (m = 0; m < wednesday.length; m++) {
            wednesday[m].classList.toggle("d-none");
        }

    if (y == 3)
        for (m = 0; m < wednesday.length; m++) {
            thursday[m].classList.toggle("d-none");
        }

    if (y == 4)
        for (m = 0; m < wednesday.length; m++) {
            friday[m].classList.toggle("d-none");
        }

    days[y].classList.toggle("org-red-color");

}


function ChangeContent(x) {

    for (var j = 0; j < contents.length; j++) {
        contentClass = contents[j].classList;
        contentClass = contentClass.toString();
        if (contentClass.includes("d-none")) {
            // DO NOTHING
        }
        else {
            contents[j].classList.toggle("d-none");
        }
    }

    for (var k = 0; k < trainHeaders.length; k++) {
        console.log("x : " + x)
        console.log("k : " + k)
        tranHClass = trainHeaders[k].classList;
        tranHClass = tranHClass.toString();
        if (tranHClass.includes("org-red-color")) {
            trainHeaders[k].classList.toggle("org-red-color");
        }
    }

    contents[x].classList.toggle("d-none");
    trainHeaders[x].classList.toggle("org-red-color");

}

var burgur = document.getElementById("burgur");
burgur.addEventListener("click", ShowBar);

function ShowBar() {
    var nav = document.querySelector(".nav-list");
    nav.classList.toggle("show-bar");
}

function AddPos() {
    var myNav = document.querySelector("nav");
    var header = document.querySelector("header");
    var navbarClass = myNav.classList;
    navbarClass = navbarClass.toString();
    var posheader = header.offsetHeight - 85;

    if (navbarClass.includes("bar-fixed")) {
        if (window.pageYOffset <= posheader) {
            myNav.classList.toggle("bar-fixed");
        }
    }
    else if (window.pageYOffset > posheader) {
        myNav.classList.toggle("bar-fixed");
    }
}

window.onscroll = AddPos;