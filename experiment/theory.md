## Theory

 <p class="heading-content">Convolution is a fundamental constituent of digital signal processing. When an input signal 
                                sequence x(k)
                                passes through a filter whose impulse response is h(k) as shown in the figure below, the output of the filter be denoted as y(k),
                                then mathematically, </p>
                            <p style="text-align:">y(n)=h(k)*x(k)</p>
                            <p>where '*' symbol means convolution.
                            </p><center><img src="images/pic-1.png" style="height:50%;width:50%;" align="center" /></center>
                            <p class="heading-content">Let's say that the input sequence x(k) has length Q in time domain, the impulse response h(k) has 
                                length P in time-domain, then mathematically,<p style="text-align:">`y(x)=sum_(k=0)^(P+Q-2)h(k)x(n-k)`</p></p>
                            <p class="heading-content">Thus the length of the output sequence y(n) will be (P+Q-1)</p>
                            <p class="heading-content">Thus performing convolution involves the following steps:</p>
                            <p>1.Plotting both h(k) and x(k).</p>
                            <p>2.Flipping the x(k) sequence about the k = 0 value to get x(-k).</p>
                            <p>3.Summing the products of h(k) and x(0-k) for all k, to obtain y(0).</p>
                            <p>4.Shifting x(-k) one sample to the right.</p>
                            <p>5.Summing the products of h(k) and x(1-k) for all k to obtian y(1).</p>
                            <p>6.Repeat steps (5) & (6) i.e. shifting and summing products until there's no overlap of h(k) and 
                                the shifted x(n-k), in which case all further y(n)'s are zero.</p>
                            <p>Let the input sequence x(k) passes through two filters with impulse response h1(k) and h2(k), and 
                                the output sequence after the signal passes through the first and the second filter be denoted as
                                y1(n) and y2(n), then we have the following relations</p>
                            <p style="text-align:">`y(x)=sum_(k=0)^(P+Q-2)h(k)x(n-k)`</p>
                            <p style="text-align:">`y1(n)=h1(k)**x(k)`</p>
                            <p style="text-align:">`y2(n)=h2(k)**y1(k)`</p>
                            <p style="text-align:">`=h2(k)**(h1(k)**x(k))`</p>
                            <p>For a linear time-invariant system, we thus have,</p>
                            <p style="text-align:">`y2(n) = (h1(k) **h2(k)) **x(k)`</p>
                            <p style="text-align:">`= h(k) ** x(k)`</p>
                            <p>Thus the effective transfer function of the two filter blocks in series is given by,</p>
                            <p style="text-align:">`h(k) = h1(k) ** h2(k)`</p>
                            <p>Let the input sequence x(k) passes through two filters in parallel with impulse response h1(k) 
                                and h2(k), and the output sequence after the signal passes through the first and the second filter be denoted as 
                                y1(n) and y2(n) as shown in the figure below.</p>
                            <p>We thus have the following relations,</p>
                            <p style="text-align:">`y1(n) = h1(k) **x(k)`</p>
                            <p style="text-align:">`y2(n) = h2(k)**x(k)`</p>
                            <p>The combined output is thus given by,</p>
                            <p style="text-align:">`y(n) = y1(n) + y2(n)`</p>
                            <p style="text-align:">`= h1(k) ** x(k) + h2(k)**x(k)`</p>
                            <p style="text-align:">`=(h1(k) + h2(k)) ** x(k))`</p>
                           <p>Thus the effective transfer function of the two filter blocks in parallel is given by</p>
                           <p style="text-align:">`h(k) = h1(k) + h2(k)`</p>                           


 <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js"></script>    
 