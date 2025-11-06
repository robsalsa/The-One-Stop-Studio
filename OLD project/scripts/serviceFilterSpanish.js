document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const container = document.getElementById("spanishServiceContainer");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter").toLowerCase();
      const serviceColumns = container.querySelectorAll(".service-column");

      serviceColumns.forEach(column => {
        const category = column.getAttribute("data-category").toLowerCase();
        if (filter === "all" || category === filter) {
          column.style.display = "block";
        } else {
          column.style.display = "none";
        }
      });
    });
  });

  // set default to "all"
  document.querySelector('[data-filter="all"]').classList.add("active");
});
