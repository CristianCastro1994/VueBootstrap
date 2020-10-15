<template>
<div class="card card-body product rounded product">  
  <div id="demo" class="carousel slide" data-ride="carousel">

    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    
    <!-- The slideshow -->
    <div class="container carousel-inner no-padding">

      <div class="carousel-item active">
        <div class="col-xs-2 col-sm-2 col-md-2">
        	<div class="item" v-on:click="detalleProducto">
  	  		<a href="#">
  	      		<span class="notify-badge">Nuevo</span>
  	        	<img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
  	        </a>
  		</div>
        </div>    
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div>   
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div>   
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div> 
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div> 
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div>  
      </div>

      <div class="carousel-item">
        <div class="col-xs-2 col-sm-2 col-md-2">
          <div class="item">
  	  		<a href="#">
  	      		<span class="notify-badge-off">50 % OFF</span>
  	        	<img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
  	        </a>
  		</div>
        </div>    
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1464734353.png">
        </div>   
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div>   
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div> 
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div>
        <div class="col-xs-2 col-sm-2 col-md-2">
          <img src="https://www.mcdonalds.com.py/upload/productos/1579265779.png">
        </div>   
      </div>

    </div>
    
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
  <ProductoDetalle/>
</div>
</template>
<script>
  import ProductoDetalle from './../../Pages/Producto/ProductoDetalle'
  export default {
        props: [],
        components: {
          ProductoDetalle
        },
        methods: {
          detalleProducto(){
            $("#detalleProducto").modal('show');
          }
        }
  }
</script>
<style>
.col-md-2 {
  display: inline-block;
  margin-left:-4px;
}
.col-md-2 img{
  width:100%;
  height:auto;
}
body .carousel-indicators li{
  background-color: black;
}
body .carousel-indicators{
  bottom: 0;
}
body .carousel-control-prev-icon,
body .carousel-control-next-icon{
  background-color: black;
}
body .no-padding{
  padding-left: 0;
  padding-right: 0;
   }

.item {
    position:relative;
    padding-top:20px;
    display:inline-block;
}
.notify-badge{
    position: absolute;
    right:-20px;
    top:10px;
    background:red;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color:white;
    padding:5px 10px;
    font-size:10px;
}

.notify-badge-off {
    position: absolute;
    right:-20px;
    top:10px;
    background:yellow;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    color:white;
    padding:5px 10px;
    font-size:10px;
}

.card.product {
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}
</style>