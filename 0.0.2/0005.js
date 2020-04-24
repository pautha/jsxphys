/*
	0004.js
	Try to design an editor (continue)
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200423
	1657 Derive it from 4.
	1745 Ok with ESC key for updating.
	2011 Add table from 003.
	2012 It works but out of DIV area. To-Do DIV with scrollbar?
	20200424
	1003 Try to fix problem while refresh MathJax.
	1021 Fix but with not fully understanding.
	1022 Table numbering is still a problem.
	
	References
	1. https://www.w3schools.com/jsref/event_onkeypress.asp
	2. https://stackoverflow.com/a/32239474/9475509
*/


// Define global variables
var taIn, divOut;


// Execute main function
main();


// Define main function
function main() {
	divOut = document.createElement("div");
	taIn = document.createElement("textarea");
	
	divOut.style.width = (window.innerWidth - 80) + "px";
	divOut.style.height = "200px";
	divOut.style.border = "1px solid #ccc";
	//divOut.style.float = "left";
	divOut.id = "output";
	divOut.style.padding = "10px";

	taIn.style.width = (parseInt(divOut.style.width) - 4) + "px";
	taIn.style.height = "200px";
	//taIn.style.float = "left";
	taIn.addEventListener("keydown", display);
	taIn.value = "";
	taIn.style.padding = "10px";
		
	document.body.append(divOut);
	document.body.append(taIn);
	taIn.focus();
}

function display(e) {
	if(e.key == "Escape") {
		console.log(e.key);
		var content = parseTable(taIn.value);
		content = parseReference(content);
		divOut.innerHTML = content;
		
		MathJax.Hub.Queue(
			["resetEquationNumbers",MathJax.InputJax.TeX],
			["PreProcess",MathJax.Hub],
			["Reprocess",MathJax.Hub]
		);
		//MathJax.Hub.Queue(["Typeset", MathJax.Hub, 'output']);
		//MathJax.startup.document.state(0);
		//MathJax.texReset();
		//MathJax.typeset();
		
		
		
	}
}


/*
// Test #1
Terdapat titik-titik $a$, $b$, $c$, $d$, dan $e$. Antara dua titik berurutan terdapat hanya sebuah resistor, misalnya antara titik $a$ dan $b$ terdapat $R_{ab}$. Beda potensial $V_{ae} = V_a - V_e = 5  \ {\rm V}$ dengan $R_{ab} = 1 \ \Omega$, $R_{bc} = 1 \ \Omega$, $R_{cd} = 2 \ \Omega$, dan $R_{de} = 1 \ \Omega$. Arus yang mengalir $I$ dan beda potensial $V_{bd} = V_b - V_d$ adalah <br /> <br />

A. 0.5 A, 3 V.<br />
B. 1 A, 2 V.<br />
C. 0.5 A, 2 V.<br />
D. 1 A, 2 V.<br />
E. 1 A, 3 V.<br /><br />

ANSWER: E

Pembahasan:
Dengan menggunakan hukum I Kirchhof dapat dituliskan bahwa $V_{ae} - I R_{ab} -I R_{bc} - I R_{cd} - I R_{de} = 0$, sehingga dapat diperoleh bahwa $I = 1 \ {\rm A}$. <br /> <br />

Selanjutnya $V_{bd} = I (R_{bc} + R_{cd}) = 3 \ {\rm V}$.
*/

/*
// Test #2
Terdapat titik-titik $a$, $b$, $c$, $d$, dan $e$. Antara dua titik berurutan terdapat hanya sebuah resistor, misalnya antara titik $a$ dan $b$ terdapat $R_{ab}$. Beda potensial $V_{ab} = V_a - V_b = 2  \ {\rm V}$ dengan $R_{ab} = 1 \ \Omega$, $R_{bc} = 1 \ \Omega$, $R_{cd} = 2 \ \Omega$, dan $R_{de} = 1 \ \Omega$. Arus yang mengalir $I$ dan beda potensial $V_{ce} = V_c - V_e$ adalah <br /> <br />

A. 0.5 A, 3 V.<br />
B. 1 A, 3 V.<br />
C. 1 A, 6 V.<br />
D. 2 A, 6 V.<br />
E. 3 A, 3 V.<br /><br />

ANSWER: D
*/

/*
// Test #3
Terdapat titik-titik $a$ dan $b$ yang terhubung oleh dua resistor $R_1$ dan $R_2$ secara paralel. Beda potensial $V_{ab} = V_a - V_b = 9 \ {\rm V}$ dengan $R_1 = 3 R_2$. Pernyataan yang salah adalah<br /><br />

A. $I_1 + I_2 = 12 \ {\rm A}$ bila $R_2 = 1 \ \Omega$ <br />
B. $I_1 + I_2 = 6 \ {\rm A}$ bila $R_2 = 2 \ \Omega$ <br />
C. $I_1 + I_2 = 4 \ {\rm A}$ bila $R_2 = 3 \ \Omega$ <br />
D. $I_1 + I_2 = 3 \ {\rm A}$ bila $R_2 = 4 \ \Omega$ <br />
E. $I_1 + I_2 = 1.5 \ {\rm A}$ bila $R_2 = 6 \ \Omega$ <br /><br />

ANSWER: E
*/

/*
// Test #4
Terdapat titik-titik $a$ dan $b$ yang terhubung oleh dua resistor $R_1$ dan $R_2$ secara paralel. Beda potensial $V_{ab} = V_a - V_b = 9 \ {\rm V}$ dengan $R_1 = 3 R_2$. Pernyataan yang salah adalah<br /><br />

A. $I_2 - I_1 = 9 \ {\rm A}$ bila $R_2 = 1 \ \Omega$ <br />
B. $I_2 - I_1 = 3 \ {\rm A}$ bila $R_2 = 2 \ \Omega$ <br />
C. $I_2 - I_1 = 2 \ {\rm A}$ bila $R_2 = 3 \ \Omega$ <br />
D. $I_2 - I_1 = 1.5 \ {\rm A}$ bila $R_2 = 4 \ \Omega$ <br />
E. $I_2 - I_1 = 1 \ {\rm A}$ bila $R_2 = 6 \ \Omega$ <br /><br />

ANSWER: A
*/

/*
// Test #5
Terdapat tiga buah titik $a$, $b$, dan $c$. Titik $a$ dan $b$ terhubung hanya ke $R_1 = 1.2 \ \Omega$, sedangkan titik $b$ dan $c$ terhubung ke dua buah resitor $R_2 = 1 \ \Omega$ dan $R_3 = 4 \ \Omega$. Daya yang terdisipasi pada $R_2$ adalah $P_2 = 0.64 \ {\rm W}$. Beda potensial $V_{ac} = V_a - V_c$ adalah ... V.  {=2 =2,0 =2.0}
*/

/*
// Test #5
Terdapat tiga buah titik $a$, $b$, dan $c$. Titik $a$ dan $b$ terhubung ke dua buah resitor $R_1 = 1 \ \Omega$ dan $R_2 = 4 \ \Omega$, sedangkan titik $b$ dan $c$ hanya terhubung hanya ke $R_3 = 1.2 \ \Omega$. Daya yang terdisipasi pada $R_2$ adalah $P_2 = 0.16 \ {\rm W}$. Daya yang terdisipasi pada $R_3$ adalah $P_3$. Nilai $P_3$ adalah .. W. {=1.2 =1,2}
*/

/*
// Previous test
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
*/