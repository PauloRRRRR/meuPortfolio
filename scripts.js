var menuToggle = document.querySelector('.menu-toggle');
var navigation = document.querySelector('.navigation');

//evento toggle para "abrir" e "fechar" o menu
    menuToggle.onclick = () =>{
        navigation.classList.toggle('open');
    }


//inicia a página com o Home ativo 
function inicializarPagina(){
    document.getElementById("homeList").onclick()
}

//percorro por cada item da lista e chamo um evento específico para cada id
var listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.onclick = () => {
            
            document.getElementById("contentHome").style.display="none";
            document.getElementById("contentAbout").style.display="none";
            document.getElementById("contentContact").style.display="none";
            document.getElementById("contentPortfolio").style.display="none";

            if(item.id=="homeList") {
                document.getElementById("contentHome").style.display="inline";

            }
            else if(item.id=="aboutList") {
                document.getElementById("contentAbout").style.display="inline";
            }
            else if(item.id=="contactList") {
                document.getElementById("contentContact").style.display="inline";
            }
            
            else if(item.id=="portfolioList") {
                document.getElementById("contentPortfolio").style.display="inline";
            }
            
            listItems.forEach(item => item.classList.remove('active'))

            item.classList.add('active');
        }
    })

