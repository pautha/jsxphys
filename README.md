# jsxphys
Markup language simple parser using JavaScript for x with the use of Physics

## Motivation
After reading some questions and answers [1-4], it triggers again a desire from the past in making a language for Physics that can accomodate equations, tables, figures, sounds, videos, and animations. We will not reinvent the wheel but use what has been already optimized or too complicated, e.g. equations will be handled by MathJax [5] (or later KaTeX? [6]), charts by Chart.js [7]. Tables will imitate markup from Markdown, but since it is in the development stage, the code is still complex and inefficient.

Right now the social distancing and limitation policy in Bandung due to coronavirus pandemic [8] and other cities,  work from home (WFH) and study from home (SFH) require a lot of data transaction through internet which also be an additional cost to the students [9], since the use of online meeting application with sound and video. It would be better when only plain text is transmitted and then the rich content is created in user browser, this will save user bandwidth.

## Version
0.0.1 Table with TAB markup and reference without style [20200418] <br />
0.0.2 Chart from Chart.js with JS but not yet with markup [20200423] <br />

## Limitation
The jsxPhys will remain a client-side application to support users without complexity in installation as in a server-side application.

## Dependencies
1. MathJax | https://www.mathjax.org/
2. Chart.js | https://www.chartjs.org/

## References
1. Markdown vs markup - are they related? <br />
   url https://stackoverflow.com/a/24044/9475509 <br />
   23 Aug 2008
2. What is the difference between markup and Markdown? <br />
   url https://meta.stackexchange.com/a/167679/538710 <br />
   14 Jul 2013
3. Creating a markup language like markdown [closed] <br />
   url https://stackoverflow.com/a/39156767/9475509
   26 Aug 2016
4. If Markdown is a superset of HTML, then why can't it do everything HTML can? <br />
   url https://stackoverflow.com/a/55558811/9475509 <br />
   7 Apr 2019
5. MathJax | Beautiful math in all browsers <br />
   url https://www.mathjax.org/ <br />
   [20200423]
6. KaTeX | The fastest math typesetting library for the web <br />
   url https://katex.org/ <br />
   [20200423]
7. Chart.js | Simple yet flexible JavaScript charting for designers & developers <br />
   url https://www.chartjs.org/ <br />
   [20200423]
8. tim/fra, "Tangkal Corona, PSBB Bandung Raya Mulai Berlaku Hari Ini", CNN Indonesia <br />
   url https://www.cnnindonesia.com/nasional/20200422071248-20-495899/tangkal-corona-psbb-bandung-raya-mulai-berlaku-hari-ini <br />
   Rabu, 22/04/2020 07:22 WIB
9. Alfian Putra Abdi, "Nasib Mahasiswa UI saat Corona: Kuliah Online Tanpa Subsidi Pulsa", tirto.id - Pendidikan <br />
   url https://tirto.id/nasib-mahasiswa-ui-saat-corona-kuliah-online-tanpa-subsidi-pulsa-eNGi <br />
   17 April 2020
