<template>
    <app-layout >
        <!-- <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard {{name}} - {{lastname}}
            </h2>
        </template> -->
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-3">
                    <Cajas/>
                </div>
                <!-- <div class="col-md-4 text-center mt-3">
                    <b-calendar  :hide-header="true" locale="es-ES"></b-calendar>
                </div> -->

                <!-- <div class="col-md-12">
                    <hr class="line">
                </div> -->

                <div class="col-md-12 mt-1">
                    <ProductList/>
                </div> 

                <!-- <div class="col-md-12">
                    <hr class="line">
                </div> -->
                
                <div class="col-md-12 mt-3 mb-3">
                    <Bar/>
                </div>  

                <div class="col-md-6 mt-3 mb-3">
                    <CommentList/>
                </div>

                <div class="col-md-6 mt-3 mb-3">
                    <PedidoList/>
                </div>    

                <div class="col-md-12">
                    <Footer/>
                </div>
                
            </div>
        </div>    
    </app-layout>

</template>

<script>
    import AppLayout from './../Layouts/AppLayout'
    import Welcome from './../Jetstream/Welcome'
    import ProductList from './../Pages/Cajas/ProductoList'
    import Bar from './../Pages/Cajas/Bar'
    import PedidoList from './../Pages/Cajas/PedidoList'
    import CommentList from './../Pages/Cajas/CommentList'
    import Cajas from './../Pages/Cajas/Cajas'
    import Footer from './../Pages/Utiles/Footer'
    export default {
        props: ['name', 'lastname'],
        components: {
            AppLayout,
            Welcome,
            ProductList,
            Bar,
            PedidoList,
            CommentList,
            Cajas,
            Footer
        },
    }
</script>
<style>

.background-oscuro {
    background-color: #131633;
}

.line {
    border-color: #6D6D6E
}

</style>