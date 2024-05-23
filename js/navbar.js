const ulBtns = document.querySelectorAll('#ul-botoes li a');
const checkbox = document.getElementById("check");

// Filtrar os elementos para remover aqueles com as classes 'li-whatsapp' e 'li-qprof'
const filteredBtns = Array.from(ulBtns).filter(btn => {
    return !(btn.classList.contains('li-whatsapp') || btn.classList.contains('li-qprof'));
});

/* Lógica de descer para div ao clicar no botão da nav */
filteredBtns.forEach(element => {
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
