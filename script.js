document.addEventListener("DOMContentLoaded", function() {
    console.log("Bem-vindo à loja de tênis!");
    const buttons = document.querySelectorAll(".btn-comprar");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
