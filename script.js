function responsiveMenu() {
  var menu = document.getElementById("navMenu");
  if (menu.className === "nav-menu") {
      menu.className = menu.className + " responsive";
  } else {
      menu.className = "nav-menu";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const papers = document.querySelectorAll('.papers');

  function changeColorOnHover(event) {
      event.target.style.backgroundColor = "white";
  }

  function resetColor(event) {
      event.target.style.backgroundColor = "";
      event.target.style.boxShadow = "";
  }

  papers.forEach((paper) => {
      paper.addEventListener('mouseenter', changeColorOnHover);
      paper.addEventListener('mouseleave', resetColor);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.blog-box').forEach(box => {
      box.addEventListener('mouseover', () => {
          box.style.transform = 'translateY(-10px)';
          box.style.transition = 'transform 0.3s ease-in-out';
      });

      box.addEventListener('mouseout', () => {
          box.style.transform = 'translateY(0)';
          box.style.boxShadow = 'none';
      });
  });
});


