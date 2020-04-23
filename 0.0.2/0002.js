/*
	0002.js
	Prototype 2 for HTML+CSS+JS problems in Physics
	Try add chart from Chart.js
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200422
	0934 Derive it from 0 and 1.
	20200423
	1135 Try to add Chart.js chart.
	1223 Finish chart but without label.
	
	References
	1. https://stackoverflow.com/a/36954319/9475509
	2. https://stackoverflow.com/a/45098540/9475509
	3. https://stackoverflow.com/a/49238306/9475509
	4. https://stackoverflow.com/a/38396605/9475509
*/


// Define some parameters
var tab_num = 0;
var tab_prefix = "pjx-tab-";
var anchors = {};

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
	document.body.append(can);
	
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


// Parse table
function parseTable() {
	content = arguments[0];
	
	var lines = content.split('\n');
	
	var lines2 = [];
	var TAB = false;
	var TAB0 = false;
	var TAB1 = false;
	for(var i = 0; i < lines.length; i++) {
		if(lines[i].indexOf("TAB") > -1) {
			TAB = !TAB;
			if(TAB) TAB0 = true;
			if(!TAB) TAB1 = true;
		}
		if(lines[i].indexOf("TAB") < 0 && !TAB) {
			lines2.push(lines[i]);
		} else {
			if(TAB0) {
				lines2.push("<div style='display: flex; \
				flex-direction: column; justify-content: center; \
				align-items: center; padding-top: 1em; \
				padding-bottom: 1em;'>");
				lines2.push("<div style='background: #fff; \
				color: #444; padding: 10px 20px 10px 20px; \
				width: 360px;'>");
				TAB0 = false;
			}
			if(!TAB1) {
				var cols = lines[i].split("|");
				var row = "";
				for(var j = 0; j < cols.length; j++) {
					if(cols.length > 1) {
						row += "<div style='display: inline-block; \
						width: 25%; padding: 5px 15px 5px 15px;'>"
						+ cols[j] + "</div>";
					} else {
						var cap = createTableCaption(cols[j]);
						row += "<div style='display: inline-block; \
						width: 100%; padding-bottom: 5px;'>" + cap 
						+ "</div>";
					}
				}
				lines2.push("<div style='border-bottom: 1px solid \
				black;'>" + row + "</div>");
			}
			if(TAB1) {
				lines2.push("</div>");
				lines2.push("</div>");
				TAB1 = false;
			}
		}
	}
	content = lines2.join('\n');
	
	return content;
}


// Create table caption with number and HTML anchor
function createTableCaption() {
	// Get function arguments
	var str = arguments[0];
	
	// Split string
	var words = str.split(" ");
	
	// Remove table mark
	words.shift();
	
	// Get key for HTML anchor
	var key = words.shift();
	
	// Join words for caption
	var cap = words.join(" ");
	
	// Create HTML anchor
	anchors[key] = ++tab_num;
	var name = tab_prefix + key;
	var a = "<a name='" + name + "'></a><b>" + tab_num + "</b>";
	
	// Merge to cap
	cap = "Tabel " + a + " " + cap; 
	return(cap);
}


// Create table caption with number and HTML anchor
function parseReference() {
	var content = arguments[0];
	
	var lines = content.split("\n");
	for(var i = 0; i < lines.length; i++) {
		
		var NRefs = (lines[i].match(/REF/g) || []).length;
		
		for(var j = 0; j < NRefs; j++) {
			if(lines[i].indexOf("REF") > 0) {
				var words = lines[i].split("REF");
				var ref = words[1].split(" ");
				var tnum = anchors[ref[1]];
				var src = "#" + tab_prefix + ref[1];
				ref[1] = "<a href='" + src + "'>" + tnum + "</a>";
				words[1] = ref.join(" ");
				lines[i] = words.join("REF");
				lines[i] = lines[i].replace("REF ", "");
			}
		}
		
	}
	
	content = lines.join("\n");
	
	return content;
}
