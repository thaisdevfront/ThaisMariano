var header = document.getElementsByTagName('header')[0]

header.innerHTML=`
   
            <div class="logo"> 
                <img src="./assets/img/logo.png">
            </div>
            <div class="menu" hidden> 
                <img src="./assets/img/menu-icon.png" style="width:30px;">
            </div>
            <button class="btn" href="https://api.whatsapp.com/send?phone=5512981021517&text=%"> 
                Contato
            </button>
   

`;

console.log(header)
