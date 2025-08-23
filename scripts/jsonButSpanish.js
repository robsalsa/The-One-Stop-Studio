const spanishData = [
    {
        "category": "Barbería",
        "services": [
            {
                "name": "El Regular",
                "price": "$50"
            },
            {
                "name": "Corte de Firma", 
                "price": "$40"
            }
        ]
    },
    {
        "category": "Belleza",
        "services": [
            {
                "name": "El Regular LARGO",
                "price": "$50"
            }
        ]
    },
    {
        "category": "Otros",
        "services": [
            {
                "name": "Barba... no sé",
                "price": "$15"
            }
        ]
    },
    {
        "category": "Cosméticos permanentes",
        "services": [
            {
                "name": "Cejas",
                "price": "$100+"
            }
        ]
    },
    {
        "category": "Piercing",
        "services": [
            {
                "name": "Oreja",
                "price": "$100+"
            }
        ]   
    }
];


const container = document.getElementById("spanishServiceContainer");
spanishData.forEach(category => {
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
