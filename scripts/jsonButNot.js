const servicesData = [
    {
        "category": "Barber services",
        "services": [
            { "name": "Haircut (Fades/Tapers)", "price": "$50" },
            { "name": "Haircut & Eyebrows", "price": "$60" },
            { "name": "Haircut with Hot towel massage", "price": "$60" },
            { "name": "Haircut with facial", "price": "$65" },
            { "name": "Haircut with facial & hot towel massage", "price": "$75" },
            { "name": "Combo A (Haircut & Hot towel Massage & Facial & Eyebrows) — NO BEARD INCLUDED", "price": "$80" },
            { "name": "Haircut & Beard", "price": "$70" },
            { "name": "Haircut & Beard & Hot Towel Massage", "price": "$80" },
            { "name": "Haircut & Beard & Eyebrows", "price": "$80" },
            { "name": "Haircut & Beard & Facial", "price": "$85" },
            { "name": "Combo B (Haircut & Beard & Hot towel Massage & Facial & Eyebrows)", "price": "$100" },
            { "name": "Haircut & Braids", "price": "$90+ (prices vary on braid style)" },
            { "name": "Beard Only", "price": "$30" },
            { "name": "Mustache", "price": "$20" },
            { "name": "Line Up (Razor around the perimeter of Hair)", "price": "$30" },
            { "name": "Shape Up (Razor around the perimeter of Hair and Beard)", "price": "$40" },
            { "name": "Haircut Design", "price": "+$10 (may vary on design)" }
        ]
    },
    {
        "category": "Beauty services",
        "services": [
            { "name": "Haircuts are done using scissors ONLY!", "price": "" },
            { "name": "Haircut (Straight Across) — NO LAYERS", "price": "$50" },
            { "name": "Haircut Straight Across with Wash & Style", "price": "$65+" },
            { "name": "Haircut With Layers", "price": "$65" },
            { "name": "Haircut With Layers & Wash & Style", "price": "$80+" },
            { "name": "Haircut & Eyebrows", "price": "$60" },
            { "name": "Haircut & 2 Braids", "price": "$90" },
            { "name": "2 Braids Only", "price": "$40" },
            { "name": "Half Head Braids", "price": "$65+" },
            { "name": "Full Head Braids", "price": "$80+" },
            { "name": "Box Braids", "price": "$200+" },
            { "name": "ALL BRAIDS WITH ADDED HAIR IS EXTRA", "price": "" },
            { "name": "Wash & Style (price may vary on length)", "price": "Varies" },
            { "name": "Wash & Condition (Light Dry)", "price": "$25" },
            { "name": "Flat Iron / Curls Only", "price": "$25+" },
            { "name": "Undercuts", "price": "$30" },
            { "name": "Full Color", "price": "$80" },
            { "name": "Full Color & Style", "price": "$95+" },
            { "name": "Retouch (1in Growth) — Starting at", "price": "$50" },
            { "name": "Retouch & Style", "price": "$65+" },
            { "name": "Bleach & Toner", "price": "$80+" },
            { "name": "Lightening", "price": "$150+" },
            { "name": "Lowlights", "price": "$150+" },
            { "name": "Highlights", "price": "$200+" }
        ]
    },
    {
        "category": "Other/Add-On services",
        "services": [
            // { "name": "Nose Piercing", "price": "$25" },
            // { "name": "Ear Lobe Piercing", "price": "$55" },
            { "name": "Eyebrow Threading / Waxed", "price": "$20" },
            { "name": "Eyebrows & Lip", "price": "$27" },
            { "name": "Full Face (NOT INCLUDING EYEBROWS)", "price": "$25" },
            { "name": "Full Face & Brows", "price": "$45" },
            { "name": "Lash Lift", "price": "$50" },
            { "name": "Lash Lift & Tint", "price": "$60" },
            { "name": "Lash Lift Touch Up", "price": "$35" },
            { "name": "Eyebrow Lamination", "price": "$65" },
            { "name": "Eyebrow Lamination & Tint", "price": "$75" }
        ]
    },
    {
        "category": "Permanent Cosmetic services",
        "services": [
            { "name": "Microblading", "price": "$400" },
            { "name": "Tattoo Shading", "price": "$350" },
            { "name": "2-4 Week Touch Up", "price": "$200" }
        ]
    },
    {
        "category": "Piercing Services",
        "services":[
            { "name": "Nose Piercing", "price": "$25" },
            { "name": "Ear Lobe Piercing", "price": "$55" },
        ]
    }
];

const container = document.getElementById("servicesContainer");


servicesData.forEach(category => {
  const col = document.createElement("div");
  col.className = "service-column";
  col.setAttribute("data-category", category.category);

  col.innerHTML = `
    <h3>${category.category}</h3>
    ${category.services.map(service => `
      <div class="service-item">
        <h4>${service.name}</h4>
        <span class="price">${service.price}</span>
      </div>
    `).join("")}
  `;

  container.appendChild(col);
});
