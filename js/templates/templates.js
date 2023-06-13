var NavBar = `
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
</li>
<% threeCategories.forEach(function(category) { %>
<li class="nav-item">
<a class="nav-link" href="grid/category=<%= category.id%>"><%= category.name%></a>
</li>
<% }); %>
<li class="nav-item dropdown" >
<a class="nav-link dropdown-toggle">
    Tất cả danh mục
</a>
<ul class="dropdown-menu" id="dropdownmenu">

</ul>
</li>
`;
var allcategories = `
<% categories.forEach(function(category) { %>
  <li><a class="dropdown-item" href="grid/category=<%= category.id%>"><%= category.name%></a></li>
  <% }); %>`;
var ProductTable = `
<div class="nav">
<!-- Tab Nav -->
<ul class="nav" id="tab-product">
<% categories.forEach(function(category) { %>
    <li class="nav-item"><a class="nav-link" id="tab"><%= category.name%></a></li>
<% }); %>
</ul>
<!--/ End Tab Nav -->
</div>
<% categories.forEach(function(category) { %>
    <% var x = category.name; %>
    <%  x = x.trim().replace(' ', ''); %>
  <div class="product-pane" id="<%= x%>">
  </div>

<% }); %>
`;

var singleProduct = `
<div class="tab-single">
    <div class="row" id="product-list">
        <% products.forEach(function(product) { %>
            <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                <div class="single-product">
                    <div class="product-img">
                        <a href="product/id=<%= product.id%>">
                            <img class="default-img" src="images/<%= product.image%>" alt="#">
                            <% if (product.off>0) { %>
                            <div class="off">-<%= product.off%>%</div>
                            <% } %>
                            <div class="new"><img src="images/new1.png" alt=""></div>
                        </a>
                    </div>
                    <div class="product-content">
                        <div class="content">
                            <div class="button">
                                <a id="add-to-cart" href="api/cart/add"onclick="addToCart(<%= product.id%>)" class="btn">Thêm vào giỏ hàng</a>
                            </div>
                            <div class="start">
                            <% if (product.start<=0) { %>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <% } else { var  x = 5 - product.start %>
                                    <% _.times(product.start, function() { %>
                                    <i class="fas fa-star check"></i>
                                    <% }); %>
                                    <% _.times(x, function() { %>
                                        <i class="fas fa-star"></i>
                                        <% }); %>
                                <% } %>
                            </div>
                            <div class="product-name">
                                <a href="product/id=<%= product.id%>">
                                    <%= product.name%>
                                </a>
                            </div>
                            <div class="product-price">
                                <span>
                                    <%= product.price%> VND
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <% }); %>
    </div>
</div>
`;
