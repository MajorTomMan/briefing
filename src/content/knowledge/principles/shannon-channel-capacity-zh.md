---
title: "原理｜香农信道容量：为什么通信极限是一个对数"
dek: "从 AWGN 模型、互信息到 C = B log₂(1 + S/N)：这个公式不是经验拟合，而是在明确假设下得到的可靠通信上限。"
date: 2026-09-26
lang: zh
section: knowledge
kind: principle
topics: ["信息论", "通信", "数学原理"]
counterpart: "knowledge/principles/shannon-channel-capacity-en"
prerequisites:
  level: intermediate
  subjects:
    - name: "高中代数与对数"
      note: "需要理解对数、指数以及函数随变量变化的基本含义。"
    - name: "概率论基础"
      note: "最好知道随机变量、概率分布、期望和条件概率；正文会补充熵与互信息。"
    - name: "信号与通信的直觉"
      note: "知道带宽、噪声、信噪比是什么即可，不要求学过通信原理课程。"
  note: "如果只想理解结论和工程影响，可以跳过中间的微分熵与自由度推导；如果想完整跟推导，建议先熟悉概率分布和对数函数。"
sources:
  - name: "Claude E. Shannon, A Mathematical Theory of Communication"
    published: "Bell System Technical Journal, 1948"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "IEEE/Bell Labs reprint — A Mathematical Theory of Communication"
    published: "1948"
    url: "https://reach.ieee.org/wp-content/uploads/2023/05/IEEE_REACH_A_Mathematical_Theory_of_Communication.pdf"
quotes:
  - quote: "The semantic aspects of communication are irrelevant to the engineering problem."
    translation: "通信的语义层面与工程问题无关。"
    note: "这句话并不是说语义不重要，而是说香农首先把通信问题收缩到可测量的概率与误差问题上。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
charts:
  - title: "信噪比提高时，容量按对数增长"
    description: "纵轴是单位带宽容量 C/B。功率继续增加仍然有收益，但每增加同样倍数的功率，新增容量越来越少。"
    type: line
    xLabel: "SNR (dB)"
    yLabel: "C/B (bit/s/Hz)"
    labels: ["−10", "−5", "0", "5", "10", "15", "20", "25", "30"]
    series:
      - name: "理论容量"
        values: [0.138, 0.396, 1.0, 2.057, 3.459, 5.028, 6.658, 8.309, 9.967]
    note: "由 C/B = log₂(1 + S/N) 计算，S/N = 10^(SNR_dB/10)。这是 AWGN 模型下的理论结果，不是某个真实网络的测速数据。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
formulas:
  - name: "加性白高斯噪声信道"
    expression: "Y=X+N"
    note: "Y 为接收信号，X 为发送信号，N 为与 X 独立的高斯噪声。讨论容量时还要限制发送信号的平均功率。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "互信息"
    expression: "I(X;Y)=H(X)-H(X\\mid Y)"
    note: "它表示看到接收端 Y 以后，对发送端 X 的不确定性减少了多少。连续随机变量的严格推导使用微分熵。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "AWGN 信道容量"
    expression: "C=B\\log_2\\left(1+\\frac{S}{N}\\right)"
    note: "B 为带宽，S/N 为信噪功率比。结论依赖带宽受限、加性白高斯噪声和平均功率约束等假设。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
---

通信工程在香农之前已经知道两件事：频带越宽，能传的东西通常越多；信号越强、噪声越弱，通信也越可靠。困难在于，这些经验并不能回答一个更严格的问题——给定带宽和噪声以后，可靠传输究竟有没有一个不可突破的上限。

香农在 1948 年把这个问题改写成概率问题。发送端不是“传递意义”，而是从许多可能消息中选出一个；接收端得到受噪声污染的观察结果，再推断发送端原来的选择。这样一来，通信系统就可以用概率分布、条件概率和误码率来分析。

## 从 $Y=X+N$ 开始

最常见的理想模型之一是加性白高斯噪声信道：

$$
Y=X+N
$$

$X$ 是发送信号，$N$ 是噪声，$Y$ 是接收信号。“加性”意味着噪声直接叠加在信号上；“高斯”意味着噪声幅度服从高斯分布；“白”意味着在所讨论频带内，噪声功率谱密度近似平坦。

仅仅把发射功率无限增大当然可以改善接收效果，因此容量问题还必须加入平均功率约束。设信号平均功率为 $S$，噪声功率为 $N$。工程问题于是变成：在这个约束下，怎样选择 $X$ 的概率分布，才能让接收端从 $Y$ 中得到最多关于 $X$ 的信息？

## 互信息给出“接收到多少”

香农用互信息衡量这个量：

$$
I(X;Y)=H(X)-H(X\mid Y)
$$

右边第一项是发送前对 $X$ 的不确定性，第二项是在看到 $Y$ 以后仍然剩下的不确定性。两者之差，就是这次传输真正消除掉的不确定性。

对于连续的高斯变量，严格推导改用微分熵。关键一步是一个很强的数学事实：**在方差固定时，高斯分布拥有最大的微分熵。**

若噪声 $N$ 是高斯的，而发送信号 $X$ 也选择为高斯分布，那么 $Y=X+N$ 仍然是高斯的。此时每一个实数自由度上的互信息可以写成

$$
rac{1}{2}log_2left(1+rac{S}{N}ight)
$$

这里的 $1/2$ 来自单个实数自由度。对带宽为 $B$ 的实值带限信道，奈奎斯特采样观点给出每秒约 $2B$ 个独立实数自由度。把两者相乘，就得到

$$
C=Blog_2left(1+rac{S}{N}ight)
$$

单位是 bit/s。

这不是对某批实验数据做出的拟合，而是在模型假设成立时得到的理论上限。

## 结果：功率有效，但不是线性有效

公式最容易被误读的地方，是把“更高的 SNR 能提高容量”理解成“功率越大越划算”。实际上，功率出现在对数里面。

当 $S/N$ 已经很高，再把功率翻倍，容量只增加一个固定得多的小量；相反，在低 SNR 区间，改善信噪比带来的相对收益更明显。上面的曲线把这种递减关系直接画了出来。

带宽则处在对数外部，因此扩展频谱和提高功率是两条不同的工程路径。真实系统还受到频谱许可、天线、功放效率、编码复杂度、延迟、终端功耗和干扰等约束，因而不会只沿着其中一个方向优化。

## 更重要的结果，是“可达到”与“不可达到”的分界

容量公式本身只是数值边界。香农真正改变通信理论的，是信道编码定理所给出的分界。

当传输速率 $R<C$ 时，存在某些足够长、足够好的编码，使误码概率可以压到任意低；当 $R>C$ 时，不存在一种编码能同时维持这样的可靠性。

这句话没有直接告诉工程师该怎样设计编码器，却改变了工程目标。此后一个编码方案不仅可以问“比旧方案好多少”，还可以问“距离信道容量还有多远”。

这也是信息论后来成为现代数字通信共同语言的原因之一。编码、调制、功率分配和频谱效率都可以放在同一个边界下比较。

## 影响：通信工程第一次有了明确的物理—数学天花板

香农以前，改进通信系统往往意味着不断尝试更好的滤波器、更大的功率、更宽的频带或更巧的调制方式。香农之后，工程师第一次知道：某些性能不足是实现还不够好，另一些则是模型给出的极限，单靠技巧不能跨过去。

这一区分对工程决策很重要。若系统离容量很远，改进编码与接收算法可能值得投入；若已经接近容量，进一步提升速率通常意味着增加带宽、提高 SNR、改变信道条件，或者接受更高延迟与复杂度。

它也解释了为什么“理论上限”并不等于“现实速度”。真实无线系统存在衰落、多径、干扰、时变信道、有限码长、协议开销和硬件非理想性。香农容量给出的是基准线，而不是现实设备的保证值。

## 这个公式没有回答什么

AWGN 容量公式建立在一组明确假设上。噪声不是高斯、信道会衰落、用户相互干扰、码长有限，或者发射机和接收机存在非线性时，问题都会变化。

因此，使用

$$
C=Blog_2left(1+rac{S}{N}ight)
$$

时最重要的不是记住公式，而是同时记住它描述的是哪一种信道、哪一种约束，以及它给出的是怎样的极限。

这也是“原理文章”与公式手册的区别：公式的价值不只在结果，还在它成立的边界。
