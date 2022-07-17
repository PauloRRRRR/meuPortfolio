var menuToggle = document.querySelector('.menu-toggle');
var navigation = document.querySelector('.navigation');

    menuToggle.onclick = () =>{
        navigation.classList.toggle('open');
    }

var listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.onclick = () => {
            listItems.forEach(item => item.classList.remove('active'))

            item.classList.add('active');
        }
    })