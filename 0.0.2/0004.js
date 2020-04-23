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
Terdapat titik-titik $a$, $b$, $c$, $d$, dan $e$. Antara dua titik berurutan terdapat sebuah resistor, misalnya antara titik $a$ dan $b$ terdapat $R_{ab}$. Beda potensial $V_a$ - $V_b$ = 5 V dengan $R_{ab}$ = 2 $\Omega$, $R_{bc}$ = 1 $\Omega$, $R_{cd}$ = 1 $\Omega$, dan $R_{de}$ = 1 $\Omega$. Tentukanlah $V_{bd} = V_b - V_d$. <br />

<br />

Dengan menggunakan hukum I Kirchhof dapat dituliskan bahwa $V_{ab} - I R_{ab} -I R_{bc} - I R_{ce} - I R_{de} = 0$, sehingga dapat diperoleh bahwa $I = 1$ A. <br />

Selanjutnya $V_{bd} = $
*/

