const base = "https://brenoryan-dev.github.io/";

const projetos = [
  [
    "Consulta CEP",
    "Busca endereço pelo CEP consumindo a API pública ViaCEP, com máscara, validação e tratamento de erros.",
    "consulta-cep.png",
    "https://brenoryan-dev.github.io/consultar-cep/",
    ["JavaScript", "API REST"],
    "API ViaCEP",
  ],

  [
    "ClimaCity",
    "Previsão do tempo por cidade, com busca, favoritos e previsão de 5 dias consumindo uma API.",
    "climacity",
    "climacity/",
    ["JavaScript", "API REST"],
  ],

  [
    "Clone Starbucks",
    "Réplica da página inicial com foco em fidelidade visual e código organizado.",
    "starbucks",
    "Coppy-starbuks/",
    ["HTML", "CSS", "JS"],
  ],

  [
    "Lista de Tarefas",
    "Cadastro, exclusão e persistência dos dados no navegador com LocalStorage.",
    "tarefas",
    "Tarefas/",
    ["JavaScript", "LocalStorage"],
  ],

  [
    "Food Peek",
    "Landing page de hamburgueria, responsiva e pensada para conversão.",
    "hamburguer",
    "Landing-page-hamburgue/",
    ["HTML", "CSS", "JS"],
  ],

  [
    "Interface Museu",
    "Layout de museu com galeria, vídeo incorporado e formulário de visita.",
    "museu",
    "Interface-Museu/",
    ["HTML", "CSS"],
  ],

  [
    "Lista de Supermercado",
    "Adiciona produtos e soma o total do carrinho em tempo real.",
    "supermercado",
    "Mine-app---supermecado/",
    ["JavaScript", "DOM"],
  ],

  [
    "Agência Digital",
    "Template de página para agência, com seções e chamadas para ação.",
    "agencia",
    "Templete-agencia/",
    ["HTML", "CSS"],
  ],

  [
    "Pizzaria Planet",
    "Site institucional de pizzaria com hero em tela cheia e cardápio.",
    "pizzaria",
    "PizzariaPlanet/",
    ["HTML", "CSS"],
  ],

  [
    "TEC Blogs",
    "Layout de blog de tecnologia com coluna principal e barra lateral.",
    "blog",
    "blog-ingles/",
    ["HTML", "CSS"],
  ],
];

const grid = document.getElementById("grid");

grid.innerHTML = projetos
  .map(([nome, desc, img, url, tags, rotulo]) => {
    const link = url.startsWith("http") ? url : base + url;

    const imagem = img
      ? `
        <img
          src="assets/imgs/${img.includes('.') ? img : img + '.webp'}"
          alt="Captura de tela do projeto ${nome}"
          loading="lazy"
        >
      `
      : `
        <div class="ph">
          <code>GET /api/gastos
POST /api/gastos
DELETE /api/gastos/:id</code>
        </div>
      `;

    return `
      <a
        class="card"
        href="${link}"
        target="_blank"
        rel="noopener"
        aria-label="Abrir ${nome}"
      >
        <div class="frame">
          <div class="bar">
            <i></i>
            <i></i>
            <i></i>

            <span>${rotulo || url.replace(/\/$/, "")}</span>
          </div>

          ${imagem}
        </div>

        <h3>${nome}</h3>

        <p>${desc}</p>

        <ul class="chips mini">
          ${tags.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </a>
    `;
  })
  .join("");

document.getElementById("y").textContent = new Date().getFullYear();

const nav = document.querySelector(".nav");

addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("on", scrollY > 24);
  },
  { passive: true }
);

document.querySelectorAll(".tabs button").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((x) => {
      x.setAttribute("aria-selected", x === b);
    });

    document.getElementById("tl-f").hidden = b.dataset.t !== "f";
    document.getElementById("tl-e").hidden = b.dataset.t !== "e";
  })
);

document.getElementById("mail").addEventListener("submit", (e) => {
  e.preventDefault();

  const n = document.getElementById("n").value;
  const em = document.getElementById("e").value;
  const m = document.getElementById("m").value;

  location.href =
    "mailto:brenoryang@gmail.com?subject=" +
    encodeURIComponent("Contato pelo portfólio: " + n) +
    "&body=" +
    encodeURIComponent(m + "\n\n" + n + "\n" + em);
});