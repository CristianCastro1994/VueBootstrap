<template>
	<div class="tab-content bg-transparent ">
                        <div id="note-full-container" class="note-has-grid row">

                            <div class="col-md-3 single-note-item all-category note-important" style="">
                                <div class="card card-body uno">
                                	<div class="row">

                                		<div class="col-md-7">
		                                    <span class="side-stick uno"></span>
		                                    <h5 class="note-title text-truncate w-75 mb-0 text-white" data-noteheading="Go for lunch">1.200 <i class="point fa fa-circle ml-1 font-10"></i></h5>
		                                    <p class="note-date font-12 text-muted">Ventas</p>
                                    	</div>

                                    	<div class="col-md-5 text-right">
                                    		<font-awesome-icon icon="chart-bar" :style="{ color: '#00C689' }" size="2x"/>
                                    	</div>

                                	</div>
                                </div>
                            </div>

                            <div class="col-md-3 single-note-item all-category note-important" style="">
                                <div class="card card-body dos">
                                	<div class="row">

                                		<div class="col-md-7">
		                                    <span class="side-stick dos"></span>
		                                    <h5 class="note-title text-truncate w-75 mb-0 text-white" data-noteheading="Go for lunch">1.200 <i class="point fa fa-circle ml-1 font-10"></i></h5>
		                                    <p class="note-date font-12 text-muted">Usuarios</p>
                                    	</div>

                                    	<div class="col-md-5 text-right">
                                    		<font-awesome-icon icon="user" :style="{ color: '#3DA5F4' }" size="2x"/>
                                    	</div>

                                	</div>
                                </div>
                            </div>

                            <div class="col-md-3 single-note-item all-category note-important" style="">
                                <div class="card card-body tres">
                                	<div class="row">

                                		<div class="col-md-7">
		                                    <span class="side-stick tres"></span>
		                                    <h5 class="note-title text-truncate w-75 mb-0 text-white" data-noteheading="Go for lunch">1.200 <i class="point fa fa-circle ml-1 font-10"></i></h5>
		                                    <p class="note-date font-12 text-muted">Ordenes</p>
                                    	</div>

                                    	<div class="col-md-5 text-right">
                                    		<font-awesome-icon icon="shopping-cart" :style="{ color: '#F1536E' }" size="2x"/>
                                    	</div>

                                	</div>
                                </div>
                            </div>
                            
                            <div class="col-md-3 single-note-item all-category note-important" style="">
                                <div class="card card-body cuatro">
                                	<div class="row">

                                		<div class="col-md-7">
		                                    <span class="side-stick cuatro"></span>
		                                    <h5 class="note-title text-truncate w-75 mb-0 text-white" data-noteheading="Go for lunch">1.200 <i class="point fa fa-circle ml-1 font-10"></i></h5>
		                                    <p class="note-date font-12 text-muted">Productos</p>
                                    	</div>

                                    	<div class="col-md-5 text-right">
                                    		<font-awesome-icon icon="barcode" :style="{ color: '#FDA006' }" size="2x"/>
                                    	</div>

                                	</div>
                                </div>
                            </div>

                        </div>
                    </div>
</template>
<style>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #131633;
    background-clip: border-box;
    border: 1 solid transparent;
    border-radius: 0;
}
.card {
    margin-bottom: 30px;
}
.card-body {
    flex: 1 1 auto;
    padding: 1.57rem;
}

.card.uno {
	border-color: #00C689;
}

.card.dos {
	border-color: #3DA5F4;
}

.card.tres {
	border-color: #F1536E;
}

.card.cuatro {
	border-color: #FDA006;
}

 .note-has-grid .single-note-item .card {
     border-radius: 10px
 }

 .note-has-grid .single-note-item .favourite-note {
     cursor: pointer
 }

 .note-has-grid .single-note-item .side-stick.uno {
     position: absolute;
     width: 3px;
     height: 35px;
     left: 0;
     background-color: #00C689
 }

 .note-has-grid .single-note-item .side-stick.dos {
     position: absolute;
     width: 3px;
     height: 35px;
     left: 0;
     background-color: #3DA5F4
 }

 .note-has-grid .single-note-item .side-stick.tres {
     position: absolute;
     width: 3px;
     height: 35px;
     left: 0;
     background-color: #F1536E
 }

 .note-has-grid .single-note-item .side-stick.cuatro {
     position: absolute;
     width: 3px;
     height: 35px;
     left: 0;
     background-color: #FDA006
 }

 .note-has-grid .single-note-item .category [class*=category-]::after {
     content: "\f0d7";
     font: normal normal normal 14px/1 FontAwesome;
     font-size: 12px;
     color: #fff;
     position: absolute
 }


 @media (max-width:767.98px) {
     .note-has-grid .single-note-item {
         max-width: 100%
     }
 }

 @media (max-width:991.98px) {
     .note-has-grid .single-note-item {
         max-width: 216px
     }
 }
</style>