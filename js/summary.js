
const summaryButton = document.querySelector('#summaryButton');
const btnSummaryClose = document.querySelector('#btnSummaryClose');
const summaryBody = document.querySelector('#summaryBody');
const summaryOverlay = document.querySelector('#summaryOverlay');

summaryButton.addEventListener('click', () => {
   summaryBody.classList.toggle('active');
   summaryOverlay.classList.toggle('active');
});

summaryOverlay.addEventListener('click', (e) => {
   e.target.parentElement.classList.remove('active');
});

btnSummaryClose.addEventListener('click', e => {
   e.target.parentElement.parentElement.parentElement.classList.remove('active');
})

/* Escala de Precios */

const scalePriceBtn = document.querySelector('#scalePriceBtn');
const scaleBody = document.querySelector('#scaleBody');
const scaleBodyOverlay = document.querySelector('#scaleBodyOverlay');
const scaleBodyClose = document.querySelector('#scaleBodyClose');

scalePriceBtn.addEventListener('click', () => {
   scaleBody.classList.add('active');
   scaleBodyOverlay.classList.add('active');
});

scaleBodyOverlay.addEventListener('click', (e) => {
   e.target.classList.remove('active');
   scaleBody.classList.remove('active');
});

scaleBodyClose.addEventListener('click', (e) => {
   scaleBodyOverlay.classList.remove('active');
   scaleBody.classList.remove('active');
})