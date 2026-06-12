

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".animar").forEach((elemento) => {
    gsap.from(elemento, {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: elemento,
            start: "top 70%",
        }
    });
});

const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.nav-list ul');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log(menu.classList);

});

const banners  = document.querySelectorAll('.avatar')

const listaImagens = [
    "img/images.jpeg",
    "img/colar.webp",
    
];

let indice = 0;

setInterval(() => {
    indice = (indice + 1) % listaImagens.length;

    banners.forEach((banner) => {
        banner.src = listaImagens[indice]
        banner.style.border = "2px solid yellow";
    });
}, 4000);

const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach(carrossel => {

    const cards = carrossel.querySelector(".container-cards");

    const esquerda = carrossel.querySelector(".esquerda");

    const direita = carrossel.querySelector(".direita");

    direita.addEventListener("click", () => {
        cards.scrollLeft += 340;
    });

    esquerda.addEventListener("click", () => {
        cards.scrollLeft -= 340;
    });

});

 const myObserver = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            
         }else{
            entry.target.classList.remove('show');
         }
 })
  })

  const elements = document.querySelectorAll('.hidden');


elements.forEach((element) => {
    myObserver.observe(element);
});

const botoes = document.querySelectorAll(".btn-comprar");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const card = botao.closest(".card-brinco");

        const nome = card.querySelector("h4").textContent;
        const modelo = card.querySelector("p").textContent;
        const preco = card.querySelector(".preco b").textContent;

        const mensagem = `Olá! Tenho interesse neste produto:

✨ Nome: ${nome}
📌 Modelo: ${modelo}
💰 Preço: ${preco}`;

        const numero = "5521000000000"; 

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    });
});
