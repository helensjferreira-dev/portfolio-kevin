
      // Exibe o ano atual no rodapé
      document.getElementById("ano").textContent = new Date().getFullYear();

      // Funções do modal de sucesso
      function mostrarModal() {
        document.getElementById("mensagem-sucesso").style.display = "flex";
      }

      function fecharModal() {
        document.getElementById("mensagem-sucesso").style.display = "none";
      }

      // confirmação ao enviar formulário
      const form = document.getElementById("form");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
          mostrarModal(); //
          form.reset();
        } else {
          form.reportValidity();
        }
      });

      // galeria e botões portfolio
      const galeria = document.getElementById("galeria");
      const avancar = document.getElementById("avancar");
      const voltar = document.getElementById("voltar");

      avancar.addEventListener("click", () => {
        galeria.scrollBy({ left: 320, behavior: "smooth" });
      });

      voltar.addEventListener("click", () => {
        galeria.scrollBy({ left: -320, behavior: "smooth" });
      });

      // duplica os itens para criar efeito infinito
      galeria.innerHTML += galeria.innerHTML;

      // imagens galeria em tela cheia
      const imagens = document.querySelectorAll(".galeria img");
      let indiceAtual = 0;

      function abrirImagem(index) {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = 9999;

        const imagemAmpliada = document.createElement("img");
        imagemAmpliada.src = imagens[index].src;
        imagemAmpliada.style.maxWidth = "90%";
        imagemAmpliada.style.maxHeight = "90%";
        imagemAmpliada.style.borderRadius = "10px";
        imagemAmpliada.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
        imagemAmpliada.style.cursor = "zoom-out";

        const btnEsquerda = document.createElement("button");
        btnEsquerda.textContent = "←";
        btnEsquerda.style.position = "absolute";
        btnEsquerda.style.left = "30px";
        btnEsquerda.style.fontSize = "2em";
        btnEsquerda.style.background = "none";
        btnEsquerda.style.color = "white";
        btnEsquerda.style.border = "none";
        btnEsquerda.style.cursor = "pointer";

        const btnDireita = document.createElement("button");
        btnDireita.textContent = "→";
        btnDireita.style.position = "absolute";
        btnDireita.style.right = "30px";
        btnDireita.style.fontSize = "2em";
        btnDireita.style.background = "none";
        btnDireita.style.color = "white";
        btnDireita.style.border = "none";
        btnDireita.style.cursor = "pointer";

        btnEsquerda.onclick = () => {
          indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
          imagemAmpliada.src = imagens[indiceAtual].src;
        };

        btnDireita.onclick = () => {
          indiceAtual = (indiceAtual + 1) % imagens.length;
          imagemAmpliada.src = imagens[indiceAtual].src;
        };

        overlay.appendChild(imagemAmpliada);
        overlay.appendChild(btnEsquerda);
        overlay.appendChild(btnDireita);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            document.body.removeChild(overlay);
          }
        });
      }

      const todasImagens = galeria.querySelectorAll("img");
      todasImagens.forEach((img, index) => {
        img.addEventListener("click", () => {
          indiceAtual = index;
          abrirImagem(indiceAtual);
        });
      });

      const itemWidth = galeria.querySelector(".item-galeria").offsetWidth + 20;
      let scrollPos = 0;

      avancar.addEventListener("click", () => {
        scrollPos += itemWidth;
        galeria.scrollTo({ left: scrollPos, behavior: "smooth" });

        if (scrollPos >= galeria.scrollWidth / 2) {
          scrollPos = 0;
          galeria.scrollTo({ left: scrollPos });
        }
      });

      voltar.addEventListener("click", () => {
        scrollPos -= itemWidth;
        if (scrollPos < 0) {
          scrollPos = galeria.scrollWidth / 2 - itemWidth;
          galeria.scrollTo({ left: scrollPos });
        } else {
          galeria.scrollTo({ left: scrollPos, behavior: "smooth" });
        }
      });

      // ativar menu mobile ao clicar
      const toggle = document.getElementById("menu-toggle");
      const menu = document.querySelector("nav ul");

      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });

// Recolhe o menu ao clicar em um link
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});


