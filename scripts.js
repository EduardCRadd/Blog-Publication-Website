
// SIDEBAR
const sidebarItems = document.querySelectorAll(".sidebar__item");
const firstItemSvg = sidebarItems[0].querySelector("svg");

sidebarItems.forEach((item) => {
  const link = item.querySelector(".sidebar__link");
  const svg = item.querySelector("svg");

  link.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      return;
    }

    sidebarItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      otherItem.querySelector("svg").style.display = "none";
    });

    item.classList.add("active");
    svg.style.display = "inline-block";
  });

  link.addEventListener("mouseover", () => {
    if (!item.classList.contains("active")) {
      svg.style.display = "inline-block";
    }
  });

  link.addEventListener("mouseout", () => {
    if (!item.classList.contains("active")) {
      svg.style.display = "none";
    }
  });
});

firstItemSvg.style.display = "inline-block";



// MARQUEE
const marquee = document.querySelector(".marquee");
const marqueeInner = document.querySelector(".marquee__inner");

const clone = marqueeInner.cloneNode(true);
marquee.appendChild(clone);



// LIVE DATE
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = monthsOfYear[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = `${dayOfWeek} ${month} ${date} ${year}`;


var typing=new Typed(".text", {
       strings: [formattedDate],
       typeSpeed: 100,
       backSpeed: 40,
       loop: false,
       showCursor: false
   });



// BLOG BOTTOM HORIZONTAL SCROLL.
const blogBottom = document.querySelector('.blog__bottom');
const blogItems = document.querySelectorAll('.blog__bottom-item');

let scrollPos = 0;
let scrollAmount = 400;

blogBottom.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollPos += event.deltaY;
  blogBottom.scrollLeft = scrollPos;
});