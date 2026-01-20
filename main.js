const win = document.getElementById("cen");

class Cart {
    constructor(titulo,texto){
        this.titulo = titulo;
        this.texto = texto;

    }

    initCart() {
     win.innerHTML +=`<div class="cart"> <h2>${this.titulo}</h2>  <p>${this.texto}</p></div>`
    }
   
}
const carta1 = new Cart('Te amo', 'Te amo por que chi por que eres una niña muuuuuuuuuuuuuuuuuy hermosa para mis ojos, el amor de mi vida la luz de mis días tristes, mi joya preciosa');
const carta2 = new Cart('Te amo', 'Te amo por que chi por que eres una niña muuuuuuuuuuuuuuuuuy hermosa para mis ojos, el amor de mi vida la luz de mis días tristes, mi joya preciosa');
const carta3 = new Cart('Te amo', 'Te amo por que chi por que eres una niña muuuuuuuuuuuuuuuuuy hermosa para mis ojos, el amor de mi vida la luz de mis días tristes, mi joya preciosa');
carta1.initCart();
carta2.initCart();
carta3.initCart();
const items = document.querySelectorAll(".cart");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, { threshold: 0.15 });

items.forEach(el => observer.observe(el));

