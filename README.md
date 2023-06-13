# FE2_ChieuThu3

  <script>
  var product = new ProductCollection();
  product.fetch({ reset: true })

  new SingleProduct({ collection: product ,el:<%= category.name%> })

  </script>
