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
        "category": "Beauty services",
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
        "category": "Permanent Cosmetic services",
        "services": [
            {
                "name": "Lash Lift",
                "price": "$80+"
            },
            {
                "name": "Eyebrow Laminatior",
                "price": "$80+"
            },
            {
                "name": "Microbladding",
                "price": "$380+"
            }
        ]
    },
    {
        "category": "Piercing services",
        "services": [
            {
                "name": "Ear",
                "price": "$60"
            },
            {
                "name": "Nose",
                "price": "$30",
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
