
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


// const gridContainer = document.getElementById('blog__right-grid');
// let currentGap = parseInt(window.getComputedStyle(gridContainer).gap);

// window.addEventListener('resize', () => {
//   const newGap = currentGap + 10; // increase gap by 10 pixels
//   gridContainer.style.gap = `${newGap}px`;
//   currentGap = newGap;
// });

