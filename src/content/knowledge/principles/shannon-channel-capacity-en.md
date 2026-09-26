---
title: "Principle | Shannon Capacity: Why the Communication Limit Is Logarithmic"
dek: "From the AWGN model and mutual information to C = B log₂(1 + S/N): the famous expression is not an empirical fit but a reliability limit derived under explicit assumptions."
date: 2026-09-26
lang: en
section: knowledge
kind: principle
topics: ["Information Theory", "Communications", "Mathematical Principles"]
counterpart: "knowledge/principles/shannon-channel-capacity-zh"
prerequisites:
  level: intermediate
  subjects:
    - name: "Algebra and logarithms"
      note: "You should be comfortable with logarithms, exponents and reading how one variable changes with another."
    - name: "Basic probability"
      note: "Random variables, probability distributions, expectation and conditional probability are useful; entropy and mutual information are introduced in the article."
    - name: "Signal and communication intuition"
      note: "Knowing what bandwidth, noise and signal-to-noise ratio mean is enough; a formal communications course is not required."
  note: "Readers interested mainly in the result and engineering impact can skim the differential-entropy and degrees-of-freedom steps."
sources:
  - name: "Claude E. Shannon, A Mathematical Theory of Communication"
    published: "Bell System Technical Journal, 1948"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "IEEE/Bell Labs reprint — A Mathematical Theory of Communication"
    published: "1948"
    url: "https://reach.ieee.org/wp-content/uploads/2023/05/IEEE_REACH_A_Mathematical_Theory_of_Communication.pdf"
quotes:
  - quote: "The semantic aspects of communication are irrelevant to the engineering problem."
    note: "Shannon was narrowing the engineering problem to quantities that could be measured, not claiming that meaning itself was unimportant."
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
charts:
  - title: "Capacity rises logarithmically with signal-to-noise ratio"
    description: "The vertical axis is capacity per unit bandwidth, C/B. More power continues to help, but the incremental return declines."
    type: line
    xLabel: "SNR (dB)"
    yLabel: "C/B (bit/s/Hz)"
    labels: ["−10", "−5", "0", "5", "10", "15", "20", "25", "30"]
    series:
      - name: "Theoretical capacity"
        values: [0.138, 0.396, 1.0, 2.057, 3.459, 5.028, 6.658, 8.309, 9.967]
    note: "Calculated from C/B = log₂(1 + S/N), with S/N = 10^(SNR_dB/10). This is a theoretical AWGN curve, not measured network throughput."
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
formulas:
  - name: "Additive white Gaussian noise channel"
    expression: "Y=X+N"
    note: "Y is the received signal, X the transmitted signal and N Gaussian noise independent of X. Capacity also assumes an average-power constraint."
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "Mutual information"
    expression: "I(X;Y)=H(X)-H(X\\mid Y)"
    note: "It measures how much uncertainty about X is removed by observing Y. The continuous derivation uses differential entropy."
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "AWGN channel capacity"
    expression: "C=B\\log_2\\left(1+\\frac{S}{N}\\right)"
    note: "B is bandwidth and S/N the signal-to-noise power ratio. The result assumes a band-limited channel, additive white Gaussian noise and an average-power constraint."
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
---

Engineers knew before Shannon that wider channels could carry more information and that stronger signals were easier to recover from noise. What they lacked was a sharp limit. Given a fixed bandwidth and a specified noise level, was there a maximum reliable data rate that no clever implementation could exceed?

Shannon turned that engineering question into a probabilistic one in 1948. The sender chooses one message from many possibilities. The receiver observes a corrupted version and tries to infer what was sent. Once the problem is framed this way, uncertainty, conditional probability and error rate become measurable objects.

## Begin with $Y=X+N$

A standard idealisation is the additive white Gaussian noise channel:

$$
Y=X+N
$$

Here $X$ is the transmitted signal, $N$ is noise and $Y$ is what the receiver sees. “Additive” means the noise is superimposed on the signal. “Gaussian” describes the amplitude distribution of the noise. “White” means its power spectral density is approximately flat across the band of interest.

Capacity would be meaningless without a power constraint: an unlimited transmitter could simply keep increasing signal power. Let the average signal power be $S$ and the noise power be $N$. The question becomes: which distribution of $X$ lets the receiver extract the greatest amount of information from $Y$?

## Mutual information measures what survives the channel

Shannon's quantity is mutual information:

$$
I(X;Y)=H(X)-H(X\mid Y)
$$

The first term describes uncertainty about $X$ before observing the channel output. The second describes the uncertainty that remains after $Y$ is known. Their difference is the information the observation has supplied.

For continuous Gaussian variables the formal derivation uses differential entropy. One mathematical fact does much of the work: **among distributions with a fixed variance, the Gaussian distribution has the greatest differential entropy.**

If the noise is Gaussian and the input is also chosen to be Gaussian, then $Y=X+N$ is Gaussian. For one real degree of freedom, the resulting mutual information is

$$
rac{1}{2}log_2left(1+rac{S}{N}ight)
$$

A real band-limited channel of bandwidth $B$ provides about $2B$ real degrees of freedom per second. Multiplying the two gives

$$
C=Blog_2left(1+rac{S}{N}ight)
$$

with $C$ measured in bits per second.

This is a theoretical result under a model, not a curve fitted to network measurements.

## The immediate result: power helps, but with diminishing returns

Signal-to-noise ratio sits inside a logarithm. Doubling power therefore does not double capacity.

At low SNR, an improvement in signal quality can make a large relative difference. At high SNR, the same multiplicative increase in power buys a smaller increment of capacity. The chart on this page shows that diminishing-return（边际收益递减） pattern directly.

Bandwidth behaves differently because it appears outside the logarithm. In practice, engineers trade spectrum, transmit power, coding complexity, delay, antenna design and interference rather than optimising a single variable in isolation.

## The deeper result is a boundary between possible and impossible

The capacity number is only part of Shannon's result. The channel coding theorem supplies the more consequential boundary.

If the transmission rate $R<C$, there exist sufficiently long and sufficiently well-designed codes whose error probability can be made arbitrarily small. If $R>C$, no coding strategy can preserve that level of reliability.

The theorem does not hand engineers a universal encoder. It gives them a target. A new coding scheme can be judged not only against an older implementation but against the channel limit itself.

That shift changed the logic of communications engineering. Some performance gaps are implementation problems; others are consequences of the underlying channel model.

## The impact: engineering gained a mathematical ceiling

Before information theory, improvements often meant trying better filters, more power, wider bands or different modulation methods. Shannon supplied a way to distinguish an improvable design from a fundamental limitation.

That distinction remains practical. If a system operates far below capacity, better coding and detection may still deliver large gains. If it already sits close to the limit, higher throughput usually requires more bandwidth, a better SNR, different channel conditions or a willingness to accept other costs such as delay and complexity.

The formula also explains why “capacity” is not the same as an internet speed test. Real wireless links face fading, multipath propagation, interference, finite block lengths, protocol overhead and imperfect hardware. Shannon capacity is a benchmark, not a promise of observed throughput.

## What the formula does not cover

The familiar AWGN expression depends on explicit assumptions. Change the noise model, introduce fading, add multiple interfering users, restrict block length or include nonlinear hardware, and the capacity problem changes.

So the useful habit is not merely to remember

$$
C=Blog_2left(1+rac{S}{N}ight)
$$

but to ask what channel it describes, what constraints were imposed and what kind of limit the equation represents.

That is the point of a principle article: the formula matters because its assumptions, derivation, result and consequences fit together.
