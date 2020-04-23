/*
	0001.js
	Prototype 0 for HTML+CSS+JS problems in Physics
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200418
	2156 Try to produce a table.
	2304 Align at center column [1].
	2318 Make columns [2].
	2325 Finish table, but without numbering and proper caption.
	2329 Create function parseTable().
	2336 Change column separator from & to | as in Markdown [3].
	2346 Adjust table padding. Must calculate size of cell
	     content.
	2352 Close for now. To-Do calculate rows, cols, width.
	0711 Start again with HTML anchor [4] for table.
	0731 Thinks about PhysJax as a name?
	0755 There is also KaTeX from Khan Academy [5].
	0801 But there is not yet any CDN for it [6].
	0804 And it's complicated than MathJax.
	0805 Or GaTex (Ganesha TeX, from 0731)? :-D.
	0848 Begin designing table caption.
	0856 Manipulate array [7].
	0931 Finish parseTable() function, begin parseReference()
	     function.
	0954 Internat link does not work.
	1003 Can not parse two or more REF in the same line.
			 It can be hacked with add two new line in the input text.
	1047 Solve using match and regex [8]. It was very elegant.
	1107 Finish for now. To-Do manage style, count width and rows.
	
	References
	1. https://stackoverflow.com/a/48030311 30 Dec 2017.
	2. https://stackoverflow.com/a/25037114/9475509 23 May 2017.
	3. https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet 29 May 2017.
	4. http://www.echoecho.com/htmllinks08.htm
	5. https://katex.org/
	6. https://www.intmath.com/blog/mathematics/katex-a-new-way-to-display-math-on-the-web-9445
	7. https://love2dev.com/blog/javascript-remove-from-array/
	8. https://stackoverflow.com/a/4009768/9475509 24 Oct 2018.
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

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


Coba diterapkan bila terdapat dua tabel, seperti Tabel REF ta:mass-density dan REF ta:another-mass-density sebelumnya.
`;
	
	content = content.replace('\\', '\\\\');
	
	content = parseTable(content);
	
	content = parseReference(content);
	
	var p = document.createElement("p");
	p.innerHTML = content;
	document.body.append(p);
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
