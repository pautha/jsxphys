/*
	0000.js
	Prototype 0 for HTML+CSS+JS problems in Physics
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200418
	1951 Create this after tested in HTML.
	2001 Find the solution for backslach problem.
	2040 Both [1-2] do not work.
	2055 Finaly find the solution but \r become a problem.
	2102 Add $\$ in the string raw to overcome it.
	2106 Removing new line after ` char still not work.
	2107 Do not understand why it works.
	2120 Finish for today.
	
	References
	1. https://stackoverflow.com/a/54653158/ 12 Feb 2019.
	2. https://stackoverflow.com/a/8892049/ 17 Jan 2012.
	3. https://stackoverflow.com/q/7015188/ 10 Aug 2011.
	4. https://docs.w3cub.com/javascript/global_objects/string/raw/
*/


// Execute main function
main();


// Define main function
function main() {
	var content = String.raw`$\$
Terdapat sebuah benda bermassa $m = 2 \ {\rm kg}$ dengan volume $V = 4 \ {\rm m}^3$. Berapakah massa jenis benda tersebut?

Massa jenis benda diperoleh melalui

\begin{equation}
\label{eq:mass-density}
\rho = \frac{m}{V}.
\end{equation}

Persamaan \eqref{eq:mass-density} akan memberikan hasil

\begin{equation*}
\rho = \frac{2 \ {\rm kg}}{4 \ {\rm m}^3} = 0.5 \ {\rm kg/m}^3.
\end{equation*}

Perhatikan bagaimana satuan besaran pun ikut dioperasikan sehingga menghasilkan satuan pada besaran hasil yang dicari.

Variasi lain dari soal ini adalah diketahui $m$ dan $\rho$ untuk mencari $V$, serta diketahui $V$ dan $\rho$ untuk mencari $m$. Total terdapat tiga macam variasi

\begin{equation}
\label{eq:mass-density-combination}
\frac{3!}{2! \ 1!} = 3,
\end{equation}

bila terdiri dari tiga variabel, dengan dua variabel diketahui dan satu ingin dicari. Persamaan \eqref{eq:mass-density-combination} ini dapat digunakan untuk memperkirakan jumlah variasi soal yang dapat dibentuk.
`;
	
	content = content.replace('\\', '\\\\');
	
	var p = document.createElement("p");
	p.innerHTML = content;
	document.body.append(p);
}

