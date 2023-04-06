var app = document.getElementById('app');

console.log(app)

app.innerHTML=`
    
    <header> </header>

    <div class="full-bnr">
        <div class="row">

            <div class="col-one">
                <div class="title">
                    <h1>Sua experiência VALE MUITO!</h1>
                    <p> Venha conhecer minhas habilidades.</p>
                
                    <div style="display:flex; align-items:space-beetwen;">
                        <buttom class="btn" onclick="#">contato</buttom>
                        <buttom class="btn" onclick="#"> > </buttom>
                    </div>
                </div>
            </div>

            <div class="col-two">
                    <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="title-swiper">
                            <h1>OLFATI</h1>
                            <h2>Loja personalizada.</h2>
                        </div>
                        <img src="assets/img/job-olfati.png">
                        
                    </div>
                    <div class="swiper-slide">
                        <div class="title-swiper">
                            <h1>CANTÃO DA BARRA</h1>
                            <h2>Identidade visual.</h2>
                        </div>
                        <img src="assets/img/job-cantao.png">
                    </div>
                    <div class="swiper-slide">
                        <div class="title-swiper">
                            <h1>INTELLECTX</h1>
                            <h2>Site digital, agencia digital.</h2>
                        </div>
                        <img src="assets/img/job-intellectx.png">
                    </div>
                    <div class="swiper-slide">
                        <div class="title-swiper">
                            <h1>PETS</h1>
                            <h2>Usabilidade experiência e elegancia.</h2>
                        </div>
                        <img src="assets/img/job-pets.png">
                    </div>
                    <div class="swiper-slide">
                        <div class="title-swiper">
                            <h1>ALBERTTI CLEANING</h1>
                            <h2>Site personalizado.</h2>
                        </div>
                        <img src="assets/img/job-albertti.png">
                    </div>
                    
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                

            </div>
        </div>
    </div>


    `;