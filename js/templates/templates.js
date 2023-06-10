var TableProductTemplate = `
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <% products.forEach(function(product) { %>
      <tr>
        <td><%= product.name %></td>
        <td><%= product.price %></td>
        <td><%= product.description %></td>
      </tr>
    <% }); %>
  </tbody>
</table>
`;
var SliderProduct = `
<% products.forEach(function(product,index  ) { %>
  <div class="slider-item" id="sliderItem" name="<%= index %>">
  <div class="item">
      <div class="title"><%= product.name %></div>
      <div class="description"><%= product.description %></div>
      <% if ( product.off > 0) { %>
      <div class="price"><%= product.price %> VND</div>
      <div class="off"><%= product.off %>%</div>
      <% } else { %>
      <div class="price"><%= product.price %> VND</div>
      <% } %>
  </div>
  <img id="imgSlide" class="img-bg" src="images/<%= product.image %>" alt="">
  </div>
<% }); %>
 `;
