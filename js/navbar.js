const ulBtns = document.querySelectorAll('#ul-botoes li a');
const checkbox = document.getElementById("check");

ulBtns.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Remove a classe 'active' de todos os elementos <a>
        ulBtns.forEach(el => el.classList.remove('active'));

        // Adiciona a classe 'active' ao elemento clicado
        e.currentTarget.classList.add('active');

        //Fecha menu hamburger
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    
        // Rolagem até o elemento de destino com offset
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 80; 

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});