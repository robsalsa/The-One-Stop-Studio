const servicesData = [
    {
        "category": "Barber services",
        "services": [
            {
                "name": "The Regular",
                "price": "$50"
            },
            {
                "name": "Signature Cut", 
                "price": "$40"
            }
        ]
    },
    {
        "category": "Salon services",
        "services": [
            {
                "name": "The LONG Regular",
                "price": "$50"
            }
        ]
    },
    {
        "category": "Other/Add-On services",
        "services": [
            {
                "name": "Bear... idk",
                "price": "$15"
            }
        ]
    },
    {
        "category": "Permanent Cosmetics",
        "services": [
            {
                "name": "Eyebrow",
                "price": "$100+"
            }
        ]
    },
    {
        "category": "Piercing",
        "services": [
            {
                "name": "Ear",
                "price": "$100+"
            }
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
