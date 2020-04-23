/*
	0003.js
	Prototype 2 for HTML+CSS+JS problems in Physics
	Try to design an editor (not yet)
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200422
	0934 Derive it from 0 and 1.
	20200423
	1627 Rename it from pjxTable to jsxpTable.
	1653 Figure has caption but added manually.
	
	References
	1. 
*/


// Execute main function
main();


// Define main function
function main() {
	var content = String.raw`$\$
Massa jenis benda $\rho$ dapat dihitung menggunakan

\begin{equation}
\label{eq:mass-density}
\rho = \frac{m}{V},
\end{equation}

dengan $m$ adalah massa benda dan $V$ adalah volume benda. Persamaan \eqref{eq:mass-density} dapat digunakan untuk menghasilkan data-data dalam Tabel REF ta:mass-density berikut.

TAB ta:mass-density Beberapa contoh nilai massa, volume, dan massa jenis.
Massa $m$ | Volume $V$ | Massa jenis $\rho$
1 | 2 | 0.5
4 | 2 | 2
10 | 4 | 2.5
0.3 | 0.5 | 0.6
TAB

Tabel REF ta:mass-density memenuhi hubungan dalam Persamaan \eqref{eq:mass-density}.


TAB ta:another-mass-density Beberapa contoh nilai massa, volume, dan massa jenis.
Massa $m$ | Volume $V$ | Massa jenis $\rho$
0.3 | 0.5 | 0.6
1 | 2 | 0.5
10 | 4 | 2.5
4 | 2 | 2
1 | 1 | 1
TAB

Coba diterapkan bila terdapat dua tabel, seperti Tabel REF ta:mass-density dan REF ta:another-mass-density sebelumnya.
`;
	
	content = content.replace('\\', '\\\\');
	
	content = parseTable(content);
	
	content = parseReference(content);
	
	var p = document.createElement("p");
	p.innerHTML = content;
	document.body.append(p);

	var can = document.createElement("canvas");
	
	var div = document.createElement("div");
	div.style.textAlign = "center";
	div.style.display = "flex";
	div.style.flexDirection = "column";
	div.style.justifyContent =  "center";
	div.style.alignItems =  "center";
	
	var div2 = document.createElement("div");
	div2.style.width = "600px";
	
	var p2 = document.createElement("p");
	p2.innerHTML = "Gambar <b>1</b> Fungsi $y_i = f(x_i)$, $i$ = 1, .., 5.";
	
	document.body.append(div);
		div.append(div2);
			div2.append(can);
			div2.append(p2);
	
	var ctx = can.getContext('2d');
	var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'line',

			// The data for our dataset
			data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [{
							label: 'My First dataset',
							//backgroundColor: 'rgb(255, 99, 132)',
							borderColor: 'rgb(255, 99, 132)',
							data: [0, 10, 5, 2, 20, 30, 45]
					}]
			},

			// Configuration options go here
			options: {}
	});
	
	var scatterChart = new Chart(ctx, {
			type: 'scatter',
			data: {
					datasets: [{
							label: 'Scatter Dataset',
							borderColor: 'rgb(255, 99, 132)',
							borderWidth: 1,
							//backgroundColor: 'rgb(255, 200, 200)',
							showLine: true,
							lineTension: 0, // bezierCurve: 0 false, 0.4
							data: [{
									x: -10,
									y: 0
							}, {
									x: -5,
									y: 8
							}, {
									x: 0,
									y: 10
							}, {
									x: 5,
									y: 5
							}, {
									x: 10,
									y: 4
							}]
					}]
			},
			options: {
					//responsive: true,
					scales: {
							xAxes: [{
									scaleLabel: {
										display: true,
										fontFamily: 'Times',
										fontStyle: 'italic',
										fontSize: 16,
										fontColor: 'rgb(0, 0, 0)',
										labelString: 'x',
									},
									type: 'linear',
									position: 'bottom',
							}],
							yAxes: [{
									ticks: {
											// Include a dollar sign in the ticks
											callback: function(value, index, values) {
													return '$' + value;
											},
									},
									type: 'linear',
									position: 'left',
									scaleLabel: {
										display: true,
										fontFamily: 'Times',
										fontStyle: 'italic',
										fontSize: 16,
										fontColor: 'rgb(0, 0, 0)',
										labelString: 'y',
									},
							}]
					}
			}
	});
	
}
