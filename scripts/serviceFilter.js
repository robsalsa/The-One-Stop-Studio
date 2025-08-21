document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const serviceColumns = document.querySelectorAll(".service-column");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // remove "active" class from all buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      // add "active" class to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      serviceColumns.forEach(column => {
        if (filter === "all" || column.getAttribute("data-category") === filter) {
          column.style.display = "block"; // show
          column.style.opacity = "1";
          column.style.transform = "scale(1)";
        } else {
          column.style.display = "none"; // hide
        }
      });
    });
  });

  // set default to "all"
  document.querySelector('[data-filter="all"]').classList.add("active");
});
