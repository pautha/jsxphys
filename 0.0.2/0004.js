/*
	0004.js
	Try to design an editor
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200423
	1657 Derive it from 4.
	1745 Ok with ESC key for updating.
	
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
	divOut.style.float = "left";
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
		divOut.innerHTML = taIn.value;
		MathJax.Hub.Queue(["Typeset", MathJax.Hub, 'output']);
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

*/

/*
// Test #4

*/

