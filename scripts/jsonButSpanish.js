const spanishData = [
   {
    "category": "Servicios de Barbería",
    "services": [
        { "name": "Corte de cabello (Fades/Degradados)", "price": "$50" },
        { "name": "Corte de cabello y cejas", "price": "$60" },
        { "name": "Corte de cabello con toalla caliente y masaje", "price": "$60" },
        { "name": "Corte de cabello con facial", "price": "$65" },
        { "name": "Corte de cabello con facial y masaje con toalla caliente", "price": "$75" },
        { "name": "Combo A (Corte de cabello, masaje con toalla caliente, facial y cejas) — NO INCLUYE BARBA", "price": "$80" },
        { "name": "Corte de cabello y barba", "price": "$70" },
        { "name": "Corte de cabello, barba y masaje con toalla caliente", "price": "$80" },
        { "name": "Corte de cabello, barba y cejas", "price": "$80" },
        { "name": "Corte de cabello, barba y facial", "price": "$85" },
        { "name": "Combo B (Corte de cabello, barba, masaje con toalla caliente, facial y cejas)", "price": "$100" },
        { "name": "Corte de cabello y trenzas", "price": "$90+ (precio depende del diseño)" },
        { "name": "Solo barba", "price": "$30" },
        { "name": "Bigote", "price": "$20" },
        { "name": "Perfilado (Navaja alrededor del perímetro del cabello)", "price": "$30" },
        { "name": "Perfilado completo (Navaja alrededor del perímetro del cabello y la barba)", "price": "$40" },
        { "name": "Diseño en el corte de cabello", "price": "+$10 (precio depende del diseño)" }
    ]
},
{
    "category": "Servicios de Belleza",
    "services": [
        { "name": "¡Los cortes de cabello se hacen SOLO con tijeras!", "price": "" },
        { "name": "Corte de cabello (Recto) — SIN CAPAS", "price": "$50" },
        { "name": "Corte recto con lavado y peinado", "price": "$65+" },
        { "name": "Corte con capas", "price": "$65" },
        { "name": "Corte con capas, lavado y peinado", "price": "$80+" },
        { "name": "Corte de cabello y cejas", "price": "$60" },
        { "name": "Corte de cabello y 2 trenzas", "price": "$90" },
        { "name": "Solo 2 trenzas", "price": "$40" },
        { "name": "Trenzas en media cabeza", "price": "$65+" },
        { "name": "Trenzas en toda la cabeza", "price": "$80+" },
        { "name": "Trenzas tipo Box Braids", "price": "$200+" },
        { "name": "TODAS LAS TRENZAS CON CABELLO EXTRA TIENEN COSTO ADICIONAL", "price": "" },
        { "name": "Lavado y peinado (el precio puede variar según el largo)", "price": "Varía" },
        { "name": "Lavado y acondicionador (Secado ligero)", "price": "$25" },
        { "name": "Plancha / Rizos solamente", "price": "$25+" },
        { "name": "Undercuts", "price": "$30" },
        { "name": "Color completo", "price": "$80" },
        { "name": "Color completo y peinado", "price": "$95+" },
        { "name": "Retoque (1 pulgada de crecimiento) — Desde", "price": "$50" },
        { "name": "Retoque y peinado", "price": "$65+" },
        { "name": "Decoloración y matiz", "price": "$80+" },
        { "name": "Aclarado", "price": "$150+" },
        { "name": "Mechas bajas (Lowlights)", "price": "$150+" },
        { "name": "Mechas (Highlights)", "price": "$200+" }
    ]
},
{
    "category": "Otros/Servicios Adicionales",
    "services": [
        { "name": "Depilación de cejas con hilo / Cera", "price": "$20" },
        { "name": "Cejas y labio", "price": "$27" },
        { "name": "Rostro completo (NO INCLUYE CEJAS)", "price": "$25" },
        { "name": "Rostro completo y cejas", "price": "$45" },
        { "name": "Lifting de pestañas", "price": "$50" },
        { "name": "Lifting y tinte de pestañas", "price": "$60" },
        { "name": "Retoque de lifting de pestañas", "price": "$35" },
        { "name": "Laminado de cejas", "price": "$65" },
        { "name": "Laminado y tinte de cejas", "price": "$75" }
    ]
},
{
    "category": "Servicios Cosméticos Permanentes",
    "services": [
        { "name": "Microblading", "price": "$400" },
        { "name": "Sombreado con tatuaje", "price": "$350" },
        { "name": "Retoque de 2-4 semanas", "price": "$200" }
    ]
},
{
    "category": "Servicios de Perforación",
    "services":[
        { "name": "Perforación de nariz", "price": "$25" },
        { "name": "Perforación de lóbulo de oreja", "price": "$55" }
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
