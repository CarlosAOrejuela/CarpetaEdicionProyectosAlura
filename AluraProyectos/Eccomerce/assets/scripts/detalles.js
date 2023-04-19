
function agregarProducto(){
    const verProductoBtns = document.querySelectorAll('.ver-producto-btn');
    verProductoBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        // Obtener la información del producto seleccionado de la API
        const productoId = event.target.dataset.productoId;
        fetch(`https://fakestoreapi.com/products/${productoId}`)
          .then(response => response.json())
          .then(producto => {
            // Redirigir al usuario a la página del producto con la información del producto
            window.location.href = `/AluraProyectos/Eccomerce/PaginasAnexas/detalles.html?id=${producto.id}`;
          });
      });
    });
  }
  
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');
  
  // Obtener la información del producto de la API
fetch(`https://fakestoreapi.com/products/${productoId}`)
    .then(response => response.json())
    .then(producto => {
      // Mostrar los detalles del producto en la página
      const pruebaEl = document.querySelector('#prueba');
      pruebaEl.innerHTML = `
        <h2>${producto.title}</h2>
        <img src="${producto.image}" alt="${producto.title}" class="producto-image">
        <section class='producto-subcontenedor'>
        <p class='producto-descripcion'>Descripción: ${producto.description}</p>
        <p class='producto-precio'>Precio: ${producto.price}</p>
        <a href='javascript:void(0)' class='producto-button boton-add'>Añadir</a>
        </section>
      `;
    });
  
fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => {
  
          let dataPrimera = data
          let content = '';
          for (let item of dataPrimera){
              content += `
                  <figure class='contenedor-cards'>
                  <section class='imagenes-contenedor'>
                      <img class='imagenes-cards' src="${item.image}" title="${item.title}">
                      <figcaption class='title-cards'> ${item.title
                      }</figcaption>
                  </section>
                  <section class='contenedor-descripcion'>
                      <p class='description-cards'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tincidunt nisl, sit amet posuere felis. </p>
                      <p class='descripcion-precio'>$${item.price}</p>
                      <a href = 'javascript:void(0)' class='button-cards boton-add'>Añadir</a>
                  </section>
                  </figure>
              `;
          }
          document.querySelector('.contenedor-recomendaciones').innerHTML = content;
      });
  
//Añadiendo un carrito de compras: 

  
  
  