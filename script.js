const botao1 = document.getElementById("botaoDepoimento1");
const botao2 = document.getElementById("botaoDepoimento2");
const botao3 = document.getElementById("botaoDepoimento3");
const depoimento1 = document.getElementById("depoimento1");
const depoimento2 = document.getElementById("depoimento2");
const depoimento3 = document.getElementById("depoimento3");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");

botao1.addEventListener("click", () => {
    botao1.classList.add("botaoSelecionado");
    botao2.classList.remove("botaoSelecionado");
    botao3.classList.remove("botaoSelecionado");
    depoimento1.classList.remove("hidden");
    depoimento2.classList.add("hidden");
    depoimento3.classList.add("hidden");
    title1.classList.remove("hidden");
    title2.classList.add("hidden");
    title3.classList.add("hidden");
})

botao2.addEventListener("click", () => {
    botao2.classList.add("botaoSelecionado");
    botao1.classList.remove("botaoSelecionado");
    botao3.classList.remove("botaoSelecionado");
    depoimento2.classList.remove("hidden");
    depoimento1.classList.add("hidden");
    depoimento3.classList.add("hidden");
    title2.classList.remove("hidden");
    title1.classList.add("hidden");
    title3.classList.add("hidden");
})

botao3.addEventListener("click", () => {
    botao3.classList.add("botaoSelecionado");
    botao2.classList.remove("botaoSelecionado");
    botao1.classList.remove("botaoSelecionado");
    depoimento3.classList.remove("hidden");
    depoimento2.classList.add("hidden");
    depoimento1.classList.add("hidden");
    title3.classList.remove("hidden");
    title2.classList.add("hidden");
    title1.classList.add("hidden");
})