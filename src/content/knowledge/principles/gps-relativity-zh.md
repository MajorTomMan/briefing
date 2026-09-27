---
title: "原理｜GPS 为什么必须修正相对论时间差"
dek: "GPS 用信号传播时间换算距离。卫星原子钟同时受到高速运动和较弱引力场影响；如果不把两种相对论效应纳入系统，时钟偏差会迅速累积到无法用于精确定位的程度。"
date: 2026-09-27
lang: zh
section: knowledge
kind: principle
topics: ["GPS", "相对论", "原子钟"]
counterpart: "knowledge/principles/gps-relativity-en"
prerequisites:
  level: intermediate
  subjects:
    - name: "高中代数"
      note: "需要理解速度、距离、时间之间的关系，以及平方和近似。"
    - name: "狭义与广义相对论的基本直觉"
      note: "只需知道高速运动会使钟变慢、较弱引力场中的钟会相对变快；正文会给出近似关系。"
    - name: "GPS 基本定位思路"
      note: "知道接收机通过比较多个卫星信号的传播时间来估算距离即可。"
  note: "如果只关心工程结果，可以跳过相对论近似式，直接阅读“38.6 微秒如何进入定位系统”一节。"
sources:
  - name: "NIST — Putting Einstein to the Test"
    url: "https://www.nist.gov/atomic-clocks/a-powerful-tool-for-science/putting-einstein-test"
  - name: "GPS.gov — GPS Time as Critical Infrastructure Application"
    published: "2011"
    url: "https://www.gps.gov/governance/advisory/meetings/2011-11/nelson.pdf"
  - name: "GPS.gov — GPS and Telling Time"
    url: "https://www.gps.gov/gps-and-telling-time"
  - name: "ESA Navipedia — Relativistic Clock Correction"
    url: "https://gssc.esa.int/navipedia/index.php/Relativistic_Clock_Correction"
quotes:
  - quote: "GPS satellites — the ones that control the blue dot on your phone — all carry atomic clocks and are subject to the effects of relativity."
    translation: "GPS 卫星——也就是支撑手机上那个蓝点定位的卫星——都携带原子钟，并受到相对论效应影响。"
    note: "NIST 用这一例子说明，相对论在 GPS 中不是理论附注，而是工程条件。"
    source:
      name: "NIST — Putting Einstein to the Test"
      url: "https://www.nist.gov/atomic-clocks/a-powerful-tool-for-science/putting-einstein-test"
charts:
  - title: "GPS 卫星钟相对地面钟的每日时间偏移"
    description: "高速运动使卫星钟变慢，较弱引力场使卫星钟变快；两项相加后，卫星钟每天净快约 38.6 微秒。"
    type: bar
    xLabel: "效应"
    yLabel: "微秒/天"
    unit: "μs/day"
    labels: ["狭义相对论", "引力红移", "净效应"]
    series:
      - name: "时间偏移"
        values: [-7.2, 45.8, 38.6]
    yMin: -10
    yMax: 50
    note: "数值来自 GPS.gov 技术材料。正值表示卫星钟相对地面钟走得更快，负值表示更慢。"
    source:
      name: "GPS.gov — GPS Time as Critical Infrastructure Application"
      published: "2011"
      url: "https://www.gps.gov/governance/advisory/meetings/2011-11/nelson.pdf"
formulas:
  - name: "狭义相对论低速近似"
    expression: "\\frac{\\Delta t_{moving}-\\Delta t_{rest}}{\\Delta t_{rest}}\\approx-\\frac{v^2}{2c^2}"
    note: "当 v 远小于光速 c 时，可用这一近似理解运动导致的钟慢效应。GPS 的精确实现使用完整相对论模型。"
    source:
      name: "NIST — Putting Einstein to the Test"
      url: "https://www.nist.gov/atomic-clocks/a-powerful-tool-for-science/putting-einstein-test"
  - name: "弱场引力时间差近似"
    expression: "\\frac{\\Delta f}{f}\\approx\\frac{\\Delta U}{c^2}"
    note: "不同引力势 U 处的钟频率不同。GPS 卫星位于比地面更高的引力势，因此相对地面钟走得更快。"
    source:
      name: "ESA Navipedia — Fundamental Physics"
      url: "https://gssc.esa.int/navipedia/index.php/Fundamental_Physics"
---

GPS 接收机并不直接“看见”自己的坐标。它接收卫星广播的时间和轨道信息，再用电磁波传播时间估算自己与卫星之间的距离。一个时间误差如果没有被控制，就会立刻转化成距离误差。

电磁波在真空中的传播速度约为每秒 30 万公里。1 微秒是百万分之一秒，在这段时间里，光可以传播约 300 米。因此，对 GPS 来说，几十微秒并不是一个可以忽略的钟表误差。

## 两种相反方向的相对论效应

GPS 卫星绕地球高速运行。按照狭义相对论，运动中的钟相对于地面参考钟会走得更慢。GPS 技术材料给出的量级约为每天 **-7.2 微秒**。

与此同时，GPS 卫星位于远高于地面的轨道，引力场比地面弱。按照广义相对论，处在较高引力势的钟相对于地面钟会走得更快。这一项约为每天 **+45.8 微秒**。

两项合起来：

$$
-7.2+45.8=+38.6\ \mu s/day
$$

也就是说，如果只比较长期平均速率，卫星钟每天会比地面参考钟多走大约 38.6 微秒。

## 为什么几十微秒会迅速破坏定位

把时间偏差直接乘以光速，可以得到一个粗略的等效距离尺度：

$$
\Delta r\approx c\Delta t
$$

若把 38.6 微秒直接换算：

$$
\Delta r\approx 3.0\times10^8\times38.6\times10^{-6}
\approx1.16\times10^4\ \mathrm{m}
$$

结果约为 11.6 公里。

这并不意味着一台没有做相对论修正的接收机每天一定“刚好偏 11.6 公里”。实际定位由多个卫星、接收机钟差、几何关系和导航方程共同决定。这个计算只是说明：相对论带来的时间漂移量级足以在一天内变成公里级传播距离差，远超 GPS 所要求的精度。

## 工程上不是事后补一刀

GPS 系统没有等待卫星钟每天偏掉 38.6 微秒以后再简单减去一个常数。相对论被写进了整个时间系统。

卫星原子钟在设计和运行中会预先考虑长期频率偏移，使其进入轨道后与地面定义的 GPS 时间保持一致。轨道又不是完美圆形，因此卫星速度和引力势还会随位置变化，导航消息和接收机算法需要处理周期性的相对论修正。

此外，地球自转还引入 Sagnac 效应。对于需要纳秒级时间一致性的系统，不能只处理“卫星钟快多少”这一项。

## 为什么 GPS 是相对论最常见的工程例子

相对论常被介绍为高速粒子、黑洞或宇宙学中的理论。但 GPS 把同一套物理规律放进了每天都在运行的基础设施。

GPS.gov 资料显示，GPS 不只提供位置，也提供精确时间。通信网络、电力系统、金融网络等都利用 GPS 时间进行同步。换句话说，卫星钟的相对论修正影响的不只是地图导航，还进入了现代基础设施的时间基准。

这也是这个例子最值得注意的地方：相对论效应并不因为人类工程尺度“看起来很小”就可以忽略。只要系统对时间足够敏感，微小的相对误差就会经过光速和长时间累积，转化成巨大的绝对误差。

## 适用边界

上面的 -7.2、+45.8 和 +38.6 微秒/天是说明 GPS 长期主要相对论效应的代表值。实际导航系统还要处理卫星轨道偏心、地球自转、钟差估计、信号传播环境和接收机算法。

因此，把 GPS 概括成“每天修正 38 微秒”并不完整。更准确的说法是：GPS 从系统设计开始就采用了一个相对论一致的时间和导航模型，38.6 微秒/天只是最容易看见的长期项。
