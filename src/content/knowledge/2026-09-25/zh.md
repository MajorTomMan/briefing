---
title: "知识漫游：信息、文字与疾病因果"
dek: "从香农的信息论、罗塞塔石碑的破译，到幽门螺杆菌改写胃溃疡医学：三次把模糊问题转化为可验证机制的知识跃迁。"
date: 2026-09-25
lang: zh
section: knowledge
topics: ["信息论", "语言与文字", "医学史"]
counterpart: "knowledge/2026-09-25/en"
sources:
  - name: "Claude E. Shannon, A Mathematical Theory of Communication"
    published: "Bell System Technical Journal, 1948"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "British Museum — The Rosetta Stone"
    url: "https://www.britishmuseum.org/collection/object/Y_EA24"
  - name: "Nobel Prize — Physiology or Medicine 2005"
    published: "3 October 2005"
    url: "https://www.nobelprize.org/prizes/medicine/2005/press-release/"
  - name: "NIDDK — Treatment for Peptic Ulcers"
    url: "https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers/treatment"
quotes:
  - quote: "The semantic aspects of communication are irrelevant to the engineering problem."
    translation: "通信的语义层面与工程问题无关。"
    note: "香农在论文开篇明确区分“语义”与通信工程中的可测量问题。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - quote: "peptic ulcer disease is no longer a chronic, frequently disabling condition, but a disease that can be permanently cured."
    translation: "消化性溃疡不再是一种慢性、经常导致功能受损的疾病，而成为一种可以得到持久治愈的疾病。"
    note: "诺贝尔委员会对这一病因模型改变临床后果的概括。"
    source:
      name: "Nobel Prize — Physiology or Medicine 2005"
      published: "2005"
      url: "https://www.nobelprize.org/prizes/medicine/2005/7693-the-nobel-prize-in-physiology-or-medicine-2005-2005-6/"
charts:
  - title: "AWGN 信道：信噪比与单位带宽理论容量"
    description: "根据 Shannon 容量关系计算。横轴为信噪比（dB），纵轴为单位带宽容量 C/B。"
    type: line
    xLabel: "SNR (dB)"
    yLabel: "C/B (bit/s/Hz)"
    labels: ["−10", "−5", "0", "5", "10", "15", "20"]
    series:
      - name: "理论容量"
        values: [0.138, 0.396, 1.0, 2.057, 3.459, 5.028, 6.658]
    note: "由 C/B = log₂(1 + S/N) 计算，其中 S/N = 10^(SNR_dB/10)。这是理论曲线，不是实测网络数据。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
formulas:
  - name: "香农熵"
    expression: "H(X)=-\\sum_{i=1}^{n}p_i\\log_2 p_i"
    note: "离散随机变量不确定性的平均度量；对数底为 2 时单位为 bit。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "AWGN 信道容量"
    expression: "C=B\\log_2\\left(1+\\frac{S}{N}\\right)"
    note: "B 为带宽，S/N 为信噪功率比；图表使用该式计算单位带宽容量。"
    source:
      name: "Claude E. Shannon, A Mathematical Theory of Communication"
      published: "1948"
      url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
---

## 一、香农信息论：把“通信”从工程经验变成数学边界

1948 年，克劳德·香农（Claude E. Shannon）发表《通信的数学理论》。在那之前，工程师已经知道带宽、噪声和信号强度会限制通信，但缺少一个统一框架来回答更根本的问题：一条信道究竟最多能够可靠传多少信息，以及“信息量”本身应当怎样定义。

香农最重要的抽象，是暂时把“意义”从通信问题中拿掉。发送端从一组可能消息中选择一个，接收端的任务是尽可能准确地重建这个选择。因此，信息可以先被理解成**不确定性的减少**。

如果离散随机变量 $X$ 可能取值 $x_i$，概率为 $p_i$，香农熵定义为：

$$
H(X)=-\sum_{i=1}^{n}p_i\log_2 p_i
$$

单位是 bit。若两个结果等概率出现，熵为 1 bit；若一个结果几乎必然发生，熵趋近于 0，因为观察它几乎没有消除新的不确定性。

这个量直接连接到压缩。符号概率不相等时，没有必要让所有符号都使用相同长度的二进制表示。高概率符号可以用短码，低概率符号使用长码。只要消息块足够长并采用合适编码，平均无损描述长度可以逼近熵，但不能长期低于它同时仍保持无损恢复。

对于带噪信道，香农进一步使用互信息：

$$
I(X;Y)=H(X)-H(X\mid Y)
$$

它衡量观察 $Y$ 后，对 $X$ 的不确定性减少了多少。信道容量则写成：

$$
C=\max_{p(x)} I(X;Y)
$$

其含义并不是“存在一种万能编码器”，而是划定了可靠通信的理论边界：当传输速率 $R<C$ 时，存在编码方案可以把误码率压得任意低；当 $R>C$ 时，无论工程技巧多复杂，都不能突破这个极限。

对常见的加性白高斯噪声信道，有著名的容量关系：

$$
C=B\log_2\left(1+\frac{S}{N}\right)
$$

其中 $B$ 是带宽，$S/N$ 是信噪功率比。这个式子把一个工程事实写得非常清楚：增加功率可以提高容量，但收益按对数递减；增加带宽同样能提高容量。因此现实通信系统始终在频谱、功耗、硬件复杂度和延迟之间做交换。

信息论后来进入数据压缩、纠错码、密码学、统计学习、神经网络和生物信息学。但需要保留一个边界：香农熵衡量的是概率分布上的不确定性，它并不直接等于“语义”“价值”或“知识”。

## 二、罗塞塔石碑：真正被破解的是一套混合书写系统

罗塞塔石碑于 1799 年在埃及拉希德附近被发现。它记录的是公元前 196 年的一份祭司法令，正文以三种书写形式出现：埃及圣书体、世俗体和古希腊文。古希腊文仍然能够被欧洲学者阅读，因此它提供了已知文本；真正困难的是判断另外两套符号究竟如何编码语言。

一个长期障碍是，许多早期学者把象形文字理解为主要表示“概念”的图画系统。若这个假设完全成立，即使知道希腊文意思，也很难建立稳定的符号对应关系。

突破来自专名。托勒密等王名通常写在王名圈中。托马斯·杨证明其中部分符号具有表音作用，商博良随后比较 Ptolemy、Cleopatra 等名字，利用重复出现的音素和符号建立对应。

从方法上看，这很像一个受约束的解码问题：如果你大致知道某一符号串应该表示什么名字，那么其中重复的声音就能够提供锚点。但真正决定性的发现并不是得到一张“象形文字字母表”，而是确认古埃及书写是一套**混合系统**。

同一套文字中既有表音符号，也有表意符号，还有不发音、用于提示词义类别的限定符。因此，一个词可能由表示辅音的字符构成，再附加一个不发音的符号告诉读者这是人名、地点或某一类事物。这解释了为什么象形文字数量远多于简单字母表所需要的规模。

科普特语则提供了另一座桥梁。它是古埃及语的晚期阶段，以希腊字母为主书写。商博良掌握科普特语，因此能够把推测出来的声音继续连接到真实的埃及语词汇，而不是停留在外国王名的拼写层面。

罗塞塔石碑真正重要的地方，不只是“同一篇文字写了三遍”，而是它建立了一个约束充分的系统：已知语言给出内容边界，王名提供音值锚点，多份文本允许重复检验，科普特语则提供语言连续性。破解来自不断提出假设、跨文本验证，再淘汰无法保持一致的解释。

## 三、幽门螺杆菌：胃溃疡如何从“体质问题”变成可针对病因治疗的疾病

20 世纪后半叶以前，胃炎和消化性溃疡经常被解释为胃酸过多、压力、饮食习惯或生活方式共同作用的结果。抑酸药可以让溃疡愈合，但不少患者停止治疗后又会复发。这个临床现象后来成为重要线索：如果胃酸本身就是完整病因，为什么控制酸度后疾病仍然如此容易回来？

澳大利亚病理学家 Robin Warren 在胃黏膜活检中观察到弯曲状细菌，并注意到细菌周围常伴随炎症。Barry Marshall 随后与他合作。两人在 1980 年代初培养出了后来命名为 *Helicobacter pylori* 的细菌，并将它与慢性胃炎以及大量胃、十二指肠溃疡联系起来。2005 年，两人因此获得诺贝尔生理学或医学奖。

最直观的反对意见是：胃腔 pH 可以低至约 1–2，细菌怎么可能在那里长期生存？

幽门螺杆菌的一项关键能力是尿素酶。它可以催化：

$$
\mathrm{CO(NH_2)_2 + H_2O \rightarrow 2NH_3 + CO_2}
$$

生成的氨能够接受质子，帮助缓冲细菌周围的酸性微环境。与此同时，幽门螺杆菌依靠鞭毛运动、趋化以及与酸度相关的尿素运输机制，迅速穿过胃腔中最恶劣的酸环境，进入靠近上皮表面的黏液层；那里的局部 pH 更高，也更适合长期定植。

这并不意味着“感染就一定出现溃疡”。结果还受到细菌毒力因子、感染位置、宿主免疫反应、胃酸分泌模式以及其他危险因素影响。长期感染造成的炎症可以改变黏膜防御和胃酸调节，并增加部分胃癌和胃黏膜相关淋巴组织淋巴瘤风险。

真正改变临床实践的是因果模型改变后，治疗目标也随之改变。过去主要是“把酸压下去”；确认感染机制以后，治疗变成“抑酸帮助黏膜愈合，同时根除细菌”。因此现代方案通常组合抑酸药与多种抗生素，部分方案加入铋剂。抗生素耐药也由此成为治疗选择中的核心约束。

这段医学史最值得记住的，不是“旧医学完全错了”。胃酸仍然重要，压力、药物等因素也可以影响症状和风险。真正发生变化的是因果层级：大量过去被视为慢性体质或酸相关疾病的病例，被重新理解成具有明确微生物病因、能够通过根除治疗改变复发轨迹的疾病。
