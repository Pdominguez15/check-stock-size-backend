const template = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div style="font-size: 16px">
      <h1>¡El artículo está disponible!</h1>

      <div>
        <p><b>Nombre del artículo:</b> <%= name %></p>
        <p><b>Talla:</b> <%= size %></p>
      </div>

      <p>
        Estamos encantados de informarte que el artículo que tenías en
        seguimiento ha entrado en stock y ahora está disponible para su compra.
      </p>

      <p>¡Aprovecha esta oportunidad y realiza tu pedido ahora!</p>

      <a
        href="<%= url %>"
        class="product-link"
        style="
          display: inline-block;
          padding: 10px;
          background-color: black;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        "
        >Ir al artículo</a
      >
    </div>
  </body>
</html>`;

export default template;
