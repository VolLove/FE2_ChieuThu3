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
