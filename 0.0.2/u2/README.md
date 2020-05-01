# Ujian FI3201-01 Fisika Komputasi
Mata kuliah Fisika komputasi berkode FI3201 untuk kelas 01 akan melangsungkan U2 dengan memanfaatkan format Markdown dalam penyampaian jawabannya dan diarsipan di [jsxPhys versi 0.02](https://github.com/dudung/jsxphys/tree/master/0.0.2).


## Persiapan dan pelaksanaan ujian kelompok

1. Pelajari Markdown markup language. Jawaban U2 akan dituliskan dalam format Markdown https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

2. Pelajari C++ online compiler untuk membuat kode yang akan disubmit, misalnya C++ hhell http://cpp.sh/

3. Pelajari fomat LaTeX untuk menulis persamaan matematika https://davidhamann.de/2017/06/12/latex-cheat-sheet/

4. Latih format LaTeX tersebut dengan penyunting daring, misalnya http://tiny.cc/fi3201-01-u2

5. Pelajari prinsip kerja ANN pada https://playground.tensorflow.org/ dengan melakukan berbagai variasi parameter

6. Pelajari online chart seperti https://chart-studio.plotly.com/create/#/ sehingga dapat share hasilnya seperti https://plotly.com/~Sparisoma/3/#/ untuk jawaban U2.

7. Ujian dikumpulkan dalam sebuah berkas README.md yang dicantumkan pada halaman Github salah seorang wakil kelompok dan link disampaikan secara pribadi lewat WA.

8. Batas waktu ujian adalah pukul 23.59 pada hari Jumat, 1 Mei 2020.


## Soal
Terdapat lima buat soal yang akan dikerjakan secara per kolompok dan pemberian soal diberikan berangsur-angsur.

### Soal 1
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya.

	Terdapat sistem bandul yang terdiri dari titik pusat koordinat $O(0, 0)$, tali tak bermassa dengan panjang $l$, dan mata bandul berbentuk bola dengan diameter $D$ dan massa $m$. Sumbu $x$ berarah horizontal ke kanan dan sumbu $y$ berarah vertikal ke atas, dengan keduanya berada pada bidang gambar layar monitor. Percepatan gravitasi dalam sistem ini adalah

	\begin{equation}
	\label{eqn:acc-grav}
	\vec{g} = - g \hat{y},
	\end{equation}

	dengan $g$ adalah besar percepatan gravitasi bumi. Tali selalu tegang dengan tegangan tali $T$.
	<br /><br />

	a. Gunakan hukum-hukum Newton pada masing-masing arah sehingga dapat diperoleh persamaan diferensial non-linier pada arah $x$

	\begin{equation}
	\label{eqn:nlode-x}
	\ddot{x} + \left( \frac{3 \pi \eta D}{m} \right) \dot{x} - \left( \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2} \right) xy = 0
	\end{equation}

	dan $y$

	\begin{equation}
	\label{eqn:nlode-y}
	\ddot{y} + \left( \frac{3 \pi \eta D}{m} \right) \dot{y} - \left( \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) y + \left( \frac{g}{l^2} \right) y^2 = -g.
	\end{equation}

	b. Jelaskan makna dari masing-masing suku yang dimaksud.
	<br /><br />

	c. Tuliskan kembali Persamaan \eqref{eqn:nlode-x} dan \eqref{eqn:nlode-y} untuk benda jatuh bebas tanpa gesekan udara. Jelaskan dalam parameter $\eta$ dan $l$.
	<br /><br />

	d. Untuk bandul dengan simpangan kecil dan tanpa gaya gesek udara, bagaimanakah bentuk Persamaan \eqref{eqn:nlode-x} dan \eqref{eqn:nlode-y}? Jelaskan maksud suku-sukunya.

### Soal 2
Gunakan [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html) untuk melihat tampilan soal sebenarnya.

	Dengan menggunakan sistem bandul dalam soal sebelumnya dapat pula dipilih sistem koordinat polar $r$ dan $\theta$ yang dalam hal ini akan terpenuhi $\dot{r} = 0$ karena tali tidak mulur atau $r = l$.
	<br /><br />
	
	a. Perolehlah persamaan diferensial pada arah $\theta$
	\begin{equation}
	\label{eqn:nlode-theta}
	\ddot{\theta} + \left( \frac{g}{l} \right) \sin \theta = 0
	\end{equation}
	
	dan $r$
	
	\begin{equation}
	\label{eqn:nlode-r}
	\dot{\theta}^2 + \left( \frac{g}{l} \right) \cos \theta = \left( \frac{T}{lm} \right).
	\end{equation}
	
	b. Carilah solusi analitik $\theta$ dan $T$ untuk nilai $\theta$ kecil.
	<br /><br />
	
	c. Carilah solusi numerik dengan algoritma Euler untuk sembarang nilai $\theta$.
	<br /><br />
	
	d. Buatlah program sederhana di http://cpp.sh/ untuk menghasilkan angka-angka
	dari keduanya untuk sudut kecil dan sudut besar. Program harus siap untuk
	dijalankan.
