
let gridContainerGaseosas = document.querySelector('.gaseosas-header__grid .container-p');

let btn330ml = document.querySelector('#btn330ml');
let btn1l = document.querySelector('#btn1l');
let btn2l = document.querySelector('#btn2l');


btn330ml.addEventListener("click", (e) => {
  e.preventDefault();
  btn330ml.classList.add("active");
  btn1l.classList.remove("active");
  btn2l.classList.remove("active");

  let htmlGaseosas300 = `
       <!-- 300ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/citrus-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Citrus Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>

            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>

       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/cola-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Cola Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
       
       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/guarana-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Guaraná Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
       
       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/lima-limon-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Lima Limón Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
       
       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/mburukuya-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Mburucuyá Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
       
       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/naranja-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Naranja Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
       
       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/pina-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Piña Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
       
       <!-- 330ml -->
       <div class="products-header__item">
           <div class="products-header__picture">
               <img src="./images/gaseosas/pomelo-01.jpg" alt="" class="products-header__image">
           </div>
           <div class="products-header__info">

               <span class="products-header__cod">Cód: 78401037</span>
               <h4 class="products-header__name">Pomelo Botellita 330 ml</h4>
               <span class="products-header__price">Gs. 85.000</span>
               <span class="products-header__iva">(IVA incluido)</span>

               <span class="products-header__cant-subtitle">Cantidad de caja x12</span>
            </div>

            <div class="header-products__footer">

               <form class="products-header__form">
                   <div class="products-header__container">
                       <div class="products-header__fieldset">
                           <button class="products-header__button-more">
                               <i class="fas fa-plus"></i>
                           </button>
                       </div>
                       <div class="products-header__fieldset">
                           <input type="text" class="products-header__input" disabled value="1">
                       </div>
                       <div class="products-header__fieldset">
                           <button class="products-header__button-minus">
                               <i class="fas fa-minus"></i>
                           </button>
                       </div>

                       <div class="products-header__fieldset">
                           <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                           <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                       </div>
                   </div>

                   <div class="products-header__action">
                       <button class="products-header__submit">Añadir al carrito</button>
                   </div>
                   
               </form>
           </div>
       </div>
   `;
  gridContainerGaseosas.innerHTML = htmlGaseosas300;
});


btn1l.addEventListener("click", (e) => {
   e.preventDefault();
   btn1l.classList.add("active");
   btn330ml.classList.remove("active");
   btn2l.classList.remove("active");
   
   let htmlGaseosas1 = `
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/citrus-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Citrus 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/cola-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Cola 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/guarana-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Guaraná 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/lima-limon-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Lima Limón 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/mburukuya-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Mburucuyá 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/naranja-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Naranja 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/pina-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Piña 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
    <!-- 1 Litro -->
    <div class="products-header__item">
        <div class="products-header__picture">
            <img src="./images/gaseosas/pomelo-02.jpg" alt="" class="products-header__image">
        </div>
        <div class="products-header__info">

            <span class="products-header__cod">Cód: 78401037</span>
            <h4 class="products-header__name">Pomelo 1 Litro</h4>
            <span class="products-header__price">Gs. 85.000</span>
            <span class="products-header__iva">(IVA incluido)</span>

            <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
        </div>

        <div class="header-products__footer">

            <form class="products-header__form">
                <div class="products-header__container">
                    <div class="products-header__fieldset">
                        <button class="products-header__button-more">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="products-header__fieldset">
                        <input type="text" class="products-header__input" disabled value="1">
                    </div>
                    <div class="products-header__fieldset">
                        <button class="products-header__button-minus">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <div class="products-header__fieldset">
                        <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                        <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                    </div>
                </div>

                <div class="products-header__action">
                    <button class="products-header__submit">Añadir al carrito</button>
                </div>
                
            </form>
        </div>
    </div>
   `;
   
   gridContainerGaseosas.innerHTML = htmlGaseosas1;
   
});

btn2l.addEventListener("click", (e) => {
    e.preventDefault();
    btn2l.classList.add("active");
    btn330ml.classList.remove("active");
    btn1l.classList.remove("active");

    let htmlGaseosas2 = `
        <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/citrus-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Citrus 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/cola-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Cola 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/guarana-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Guaraná 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/lima-limon-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Lima Limón 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/mburukuya-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Mburucuyá 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/naranja-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Naranja 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/pina-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Piña 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    <!-- 2 Litros -->
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/gaseosas/pomelo-03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Pomelo 2 Litros</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x6</span>
            </div>

            <div class="header-products__footer">

                <form class="products-header__form">
                    <div class="products-header__container">
                        <div class="products-header__fieldset">
                            <button class="products-header__button-more">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="products-header__fieldset">
                            <input type="text" class="products-header__input" disabled value="1">
                        </div>
                        <div class="products-header__fieldset">
                            <button class="products-header__button-minus">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>

                        <div class="products-header__fieldset">
                            <input class="products-header__input-checkbox" id="ron-1" type="checkbox">
                            <label for="ron-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    `;

   gridContainerGaseosas.innerHTML = htmlGaseosas2;
});