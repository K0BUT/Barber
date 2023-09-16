function addSticky() {
  $(".slide").each(function () {
    var scrollerAnchor = $(this).offset().top;
    if (window.scrollY >= scrollerAnchor) {
      $(this).addClass("fix-it");
    } else {
      $(this).removeClass("fix-it");
    }
  });
}
$(window).scroll(function () {
  addSticky();
});

$(document).ready(function () {
  var defaults = {
    containerID: "toTop", // fading element id
    containerHoverID: "toTopHover", // fading element hover id
    scrollSpeed: 2000,
    easingType: "linear",
  };
  $().UItoTop({ easingType: "easeOutQuart" });
});

$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 1200, // по умолчанию «400»
    }
  );

  return false;
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".slide-barbers, .price");
for (let elm of elements) {
  observer.observe(elm);
}

function flipCard1(event) {
  const flipCardContainer1 = event.currentTarget.querySelector(
    ".flip-card-container1"
  );
  flipCardContainer1.classList.toggle("flip-card");
}
function flipCard2(event) {
  const flipCardContainer2 = event.currentTarget.querySelector(
    ".flip-card-container2"
  );
  flipCardContainer2.classList.toggle("flip-card");
}
function flipCard3(event) {
  const flipCardContainer3 = event.currentTarget.querySelector(
    ".flip-card-container3"
  );
  flipCardContainer3.classList.toggle("flip-card");
}
function flipCard4(event) {
  const flipCardContainer4 = event.currentTarget.querySelector(
    ".flip-card-container4"
  );
  flipCardContainer4.classList.toggle("flip-card");
}
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

card1.addEventListener("click", (event) => flipCard1(event));
card2.addEventListener("click", (event) => flipCard2(event));
card3.addEventListener("click", (event) => flipCard3(event));
card4.addEventListener("click", (event) => flipCard4(event));

var modal = document.getElementById("myModal");
var btn = document.getElementById("btnOrder");
var btn1 = document.getElementById("btnOrder1");
var mySubmit = document.getElementById("mySubmit");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
mySubmit.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
