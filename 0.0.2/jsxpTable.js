/*
	pjxTable.js
	Prototype 2 for HTML+CSS+JS problems in Physics
	Try to design an editor
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200422
	0934 Derive it from 0 and 1.
	20200423
	1627 Rename it from pjxTable to jsxpTable.
	20200424
	1245 Reset Table refs with resetNumbering() function.
	1247 Face the similar problem with MathJax [1].
	1251 It works but not sure.
	
	References
	1. https://docs.mathjax.org/en/v2.7-latest/advanced/typeset.html#reset-automatic-equation-numbering
*/


// Define some parameters
var tab_num = 0;
var tab_prefix = "jsxp-tab-";
var anchors = {};


// Reset numbering
function resetNumbering() {
	anchor = {};
	tab_num = 0;
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
