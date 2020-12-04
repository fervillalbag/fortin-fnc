
let btnAnejada = document.querySelector('#btnAnejada');
let btnEtiquetaNegra = document.querySelector('#btnEtiquetaNegra');
let gridContainer = document.querySelector('.products-header__grid .container');
let productsItem = document.querySelector('.products-header__item');

btnAnejada.addEventListener('click', (e) => {
    e.preventDefault();
    btnAnejada.classList.add('active');
    btnEtiquetaNegra.classList.remove('active');
    
    let htmlAnejada = `
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/anejada_especial/200ml-01.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Añejada Especial 200ml</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x24</span>

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
                            <input class="products-header__input-checkbox" id="cana-1" type="checkbox">
                            <label for="cana-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/anejada_especial/450ml-01.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Añejada Especial 450ml</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x24</span>

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
                            <input class="products-header__input-checkbox" id="cana-2" type="checkbox">
                            <label for="cana-2" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/anejada_especial/930ml-01.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Añejada Especial 930ml</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x12</span>

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
                            <input class="products-header__input-checkbox" id="cana-3" type="checkbox">
                            <label for="cana-3" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    `;

    gridContainer.innerHTML = htmlAnejada;
});

btnEtiquetaNegra.addEventListener('click', (e) => {
    e.preventDefault();
    btnEtiquetaNegra.classList.add('active');
    btnAnejada.classList.remove('active');
    
    let htmlProductsBlackLabel = `
        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/etiqueta_negra/01.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Etiqueta Negra 200ml</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x24</span>

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
                            <input class="products-header__input-checkbox" id="etq-negra-1" type="checkbox">
                            <label for="etq-negra-1" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/etiqueta_negra/02.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Etiqueta Negra 475ml</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x24</span>

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
                            <input class="products-header__input-checkbox" id="etq-negra-2" type="checkbox">
                            <label for="etq-negra-2" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="products-header__item">
            <div class="products-header__picture">
                <img src="./images/etiqueta_negra/03.jpg" alt="" class="products-header__image">
            </div>
            <div class="products-header__info">

                <span class="products-header__cod">Cód: 78401037</span>
                <h4 class="products-header__name">Etiqueta Negra 750ml</h4>
                <span class="products-header__price">Gs. 85.000</span>
                <span class="products-header__iva">(IVA incluido)</span>

                <span class="products-header__cant-subtitle">Cantidad de caja x24</span>

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
                            <input class="products-header__input-checkbox" id="etq-negra-3" type="checkbox">
                            <label for="etq-negra-3" class="products-header__label">Pedir por unidad</label>
                        </div>
                    </div>

                    <div class="products-header__action">
                        <button class="products-header__submit">Añadir al carrito</button>
                    </div>
                    
                </form>
            </div>
        </div>
    `;

    gridContainer.innerHTML = htmlProductsBlackLabel;
});

