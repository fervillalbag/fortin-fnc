
let btnProfile = document.querySelector('#btnProfile');
let btnPedidosAnt = document.querySelector('#btnPedidosAnt');
let gridContainerProfile = document.querySelector('.profile-header__grid');

btnProfile.addEventListener('click', (e) => {
   e.preventDefault();
   btnPedidosAnt.classList.remove('active');
   btnProfile.classList.add('active');

   let htmlProfile = `
      <h3 class="profile-header__title">Datos de tu perfil</h3>

      <span class="profile-header__text">Hola José Perez <a href="#" class="profile-header__text--bold">(¿no eres José Perez? Cerrar sesión)</a></span>
      <span class="profile-header__text">Desde el panel de control de tu cuenta puedes ver tus pedidos recientes, gestionar tus<br> direcciones de envío y facturación y editar tu contraseña y los detalles de tu cuenta.</span>

      <a href="#" class="profile-header__modified-profile">Modificar datos</a>

      <div class="profile-header__form">
         <div class="register-view__fieldset">
            <label for="name" class="register-view__label">Nombre *</label>
            <input type="text" class="register-view__input" id="name">
         </div>
         <div class="register-view__fieldset">
            <label for="business" class="register-view__label">Empresa *</label>
            <input type="text" class="register-view__input" id="business">
         </div>
         <div class="register-view__fieldset">
            <label for="phone-number" class="register-view__label">Número de teléfono / Celular *</label>
            <input type="text" class="register-view__input" id="phone-number">
         </div>
         <div class="register-view__fieldset">
            <label for="email-profile" class="register-view__label">Correo Electrónico *</label>
            <input type="text" class="register-view__input" id="email-profile">
         </div>
         <div class="register-view__fieldset">
            <label for="password-profile" class="register-view__label">Contraseña actual *</label>
            <input type="text" class="register-view__input" id="password-profile">
         </div>
         <div class="register-view__fieldset">
            <label for="profile-new-password" class="register-view__label">Nueva contraseña *</label>
            <input type="text" class="register-view__input" id="profile-new-password">
            <div class="profile-header__subgrid">
               <label for="recordar" class="register-view__label register-view__label--recordar">
                  Recordar Contraseña
               </label>
               <input type="checkbox" class="register-view__input--checkbox" id="recordar">
            </div>
         </div>
         <div class="register-view__fieldset register-view__fieldset--submit">
            <button type="submit" class="profile-header__submit">Confirmar</button>
         </div>
      </div>
   `;

   gridContainerProfile.innerHTML = htmlProfile;
})

btnPedidosAnt.addEventListener('click', (e) => {
   e.preventDefault();
   btnPedidosAnt.classList.add('active');
   btnProfile.classList.remove('active');

   let htmlPedidosAnt = `
      <h3 class="profile-header__title">Datos de tu perfil</h3>

      <span class="profile-header__text">Hola José Perez <a href="#" class="profile-header__text--bold">(¿no eres José Perez? Cerrar sesión)</a></span>
      <span class="profile-header__text">Desde el panel de control de tu cuenta puedes ver tus pedidos recientes, gestionar tus<br> direcciones de envío y facturación y editar tu contraseña y los detalles de tu cuenta.</span>

      <h3 class="profile-header__title">Pedidos</h3>

      <div class="container-profile">

         <div class="profile-order__left">
            <span class="profile-order__title">Fecha</span>
            <span class="profile-order__text">1 de mayo - 2020</span>
            <span class="profile-order__text">1 de junio - 2020</span>
         </div>

         <div class="profile-order__separator"></div>

         <div class="profile-order__center">
            <span class="profile-order__title">Cantidad</span>
            <span class="profile-order__text">Gs. 510.000</span>
            <span class="profile-order__text">Gs. 510.000</span>
         </div>

         <div class="profile-order__right">
            <!-- espacio en blanco  -->
            <div class="profile-order__off"></div>
            
            <div class=""><a href="#" class="profile-order__btn">Ver lista</a></div>
            <div class=""><a href="#" class="profile-order__btn">Ver lista</a></div>                        
         </div>

      </div>
   `;

   gridContainerProfile.innerHTML = htmlPedidosAnt;
})