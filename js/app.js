const menu = document.querySelector('#menu');
const logo = document.querySelector('#headerLogo');
const sidebar = document.querySelector('#sidebar');
const titleMenu = document.querySelector('#title');

menu.addEventListener('click', (e) => {
    
    if(e.target.checked) {
        sidebar.style.width = '4rem';
        logo.classList.add('sidebar-headerLogo');
        titleMenu.hidden = true;
    }else{
        sidebar.style.width = '15.5rem';
        logo.classList.remove('sidebar-headerLogo');
        titleMenu.hidden = false;
    }

});