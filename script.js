const menuIcon = document.getElementById('btn_menu');
const voltar = document.getElementById('btn_voltar');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {

    sidebar.classList.toggle('active');
});

voltar.addEventListener('click', () => {

    sidebar.classList.toggle('active');
});