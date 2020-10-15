<template>
	<div class="row">
		<div class="col-md-4">
			<div class="card rounded">
				<div class="card-body">
					<div class="card-title text-center text-secondary">
						<small>PEDIDOS ESTE AÑO</small>
					</div>
					<div class="col-md-12">
						<canvas id="myChart" width="400" height="400"></canvas>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card rounded">
				<div class="card-body">
					<div class="card-title text-center text-secondary">
						<small>PEDIDOS ESTE AÑO</small>
					</div>
					<div class="col-md-12">
						<canvas id="lineChart" width="400" height="400"></canvas>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card rounded">
				<div class="card-body">
					<div class="card-title text-center text-secondary">
						<small>PEDIDOS ESTE AÑO</small>
					</div>
					<div class="col-md-12">
						<canvas id="pieChart" width="400" height="400"></canvas>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
    export default {
        props: [],
        methods: {
        	barChart(){
        		var ctx = document.getElementById('myChart');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['Red', 'Blue', 'Yellow', 'Green'],
				        datasets: [{
				            label: '# of Votes',
				            data: [12, 19, 3, 5],
				            backgroundColor: [
				                '#00C689',
				                '#3DA5F4',
				                '#F1536E',
				                '#FDA006',
				            ],
				            borderColor: [
				                '#fff',
				                '#fff',
				                '#fff',
				                '#fff',
				            ],
				            borderWidth: 1,
				            pointBorderColor: "#55bae7",
				        }]
				    },
				    options: {
				        scales: {
				            yAxes: [{
				                ticks: {
				                    beginAtZero: true
				                }
				            }]
				        }
				    }
				});
        	},
        	lineChart(){
        		var ctx = document.getElementById('lineChart');
				var myChart = new Chart(ctx, {
				    type: 'line',
				    data: {
				        labels: ['Red', 'Blue', 'Yellow', 'Green'],
				        datasets: [{
				            label: '# of Votes',
				            data: [12, 19, 3, 5],
				            backgroundColor: '#F1536E',
				            borderColor: '#fff',
				            borderWidth: 1,
				            pointBorderColor: "#fff",
				        }]
				    },
				    options: {
				        scales: {
				            yAxes: [{
				                ticks: {
				                    beginAtZero: true
				                }
				            }]
				        }
				    }
				});
        	},
        	pieChart(){
        		var ctx = document.getElementById('pieChart');
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Red', 'Blue', 'Yellow'],
				        datasets: [{
				            label: '# of Votes',
				            data: [12, 19, 3],
				            backgroundColor: [
				                '#3DA5F4',
				                '#F1536E',
				                '#FDA006',
				            ],
				            borderColor: [
				                '#fff',
				                '#fff',
				                '#fff',
				            ],
				            borderWidth: 1,
				            pointBorderColor: "#55bae7",
				        }]
				    }
				});
        	}
        },
        mounted() {

        	this.barChart();
        	this.lineChart();
        	this.pieChart();
        }
    }
</script>