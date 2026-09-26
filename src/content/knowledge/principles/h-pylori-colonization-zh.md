---
title: "原理｜幽门螺杆菌如何在强酸环境中长期定植"
dek: "幽门螺杆菌并不是简单“耐酸”。它依靠尿素酶、酸响应运输、鞭毛运动和黏液层生态位共同降低局部酸压力，并由此建立持续感染。"
date: 2026-09-26
lang: zh
section: knowledge
kind: principle
topics: ["幽门螺杆菌", "胃生理", "感染机制"]
counterpart: "knowledge/principles/h-pylori-colonization-en"
prerequisites:
  level: basic
  subjects:
    - name: "酸碱化学基础"
      note: "知道 pH、质子 H⁺ 和氨 NH₃ 接受质子的基本概念即可。"
    - name: "胃的基本结构"
      note: "知道胃腔、胃黏液层和上皮表面之间存在不同微环境会更容易理解。"
  note: "不需要医学专业背景。只看机制和结果时，可以跳过化学反应式。"
sources:
  - name: "Nobel Prize — Physiology or Medicine 2005"
    published: "3 October 2005"
    url: "https://www.nobelprize.org/prizes/medicine/2005/press-release/"
  - name: "NIDDK — Treatment for Peptic Ulcers"
    url: "https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers/treatment"
  - name: "Yoshiyama H, Nakazawa T. Unique mechanism of Helicobacter pylori for colonizing the gastric mucus"
    published: "Microbes and Infection, 2000"
    url: "https://doi.org/10.1016/S1286-4579(00)00285-9"
formulas:
  - name: "尿素酶反应"
    expression: "\\mathrm{CO(NH_2)_2 + H_2O \\rightarrow 2NH_3 + CO_2}"
    note: "尿素被分解为氨和二氧化碳。氨可继续接受质子，降低细菌周围的瞬时酸压力。"
    source:
      name: "Yoshiyama H, Nakazawa T. Unique mechanism of Helicobacter pylori for colonizing the gastric mucus"
      published: "Microbes and Infection, 2000"
      url: "https://doi.org/10.1016/S1286-4579(00)00285-9"
  - name: "氨接受质子"
    expression: "\\mathrm{NH_3 + H^+ \\rightarrow NH_4^+}"
    note: "这是理解局部缓冲作用的简化酸碱关系，不代表胃内只发生这一项反应。"
    source:
      name: "Yoshiyama H, Nakazawa T. Unique mechanism of Helicobacter pylori for colonizing the gastric mucus"
      published: "Microbes and Infection, 2000"
      url: "https://doi.org/10.1016/S1286-4579(00)00285-9"
---

胃腔的酸度足以杀死许多微生物，但幽门螺杆菌能够在胃内持续存在多年。关键并不是它在整个胃腔中都能无条件承受强酸，而是它能够改变自己周围的化学环境，并迅速移动到更适合定植的位置。

## 胃里并不是一个均匀的酸池

胃腔中的 pH 可以很低，但胃壁表面覆盖着黏液层。靠近上皮细胞的一侧需要避免被胃酸和消化酶直接破坏，因此这里的化学环境与胃腔中央不同。

幽门螺杆菌利用这种梯度。它不需要把整个胃变成中性环境，只需要在自己的周围和最终定植的位置降低酸压力。

## 尿素酶先解决“进入时”的酸压力

幽门螺杆菌能够大量表达尿素酶。尿素进入细菌后被分解：

$$
\mathrm{CO(NH_2)_2 + H_2O \rightarrow 2NH_3 + CO_2}
$$

其中生成的氨可以接受质子：

$$
\mathrm{NH_3 + H^+ \rightarrow NH_4^+}
$$

从酸碱化学上看，这会消耗一部分自由质子，使细菌附近形成比外部环境更容易耐受的微区。

这里有一个容易产生误解的地方：尿素酶并不是把整个胃液“中和”。它的作用尺度主要是细菌及其周围微环境，而且必须与尿素供应、膜运输和细菌所处位置一起理解。

## 酸度变化还会控制尿素进入

如果细菌一直大量把尿素运入并分解，也会付出代谢和化学代价。幽门螺杆菌具有与酸度相关的尿素运输机制，使低 pH 条件下的尿素供应更有效地与尿素酶反应配合。

这形成一个反馈过程：

$$
\text{外部酸化}
\rightarrow
\text{尿素进入增加}
\rightarrow
\text{尿素酶生成 NH}_3
\rightarrow
\text{局部酸压力下降}
$$

这张关系式不是严格的动力学方程，而是机制顺序。

## 鞭毛运动把细菌带到更适合长期生存的位置

局部缓冲解决的是“暂时活下来”，长期定植还需要位置选择。

幽门螺杆菌具有鞭毛，并能对化学环境作出趋化反应。它可以穿过胃内容物，进入黏液层并靠近上皮表面。那里比胃腔中央更少受到极端酸度冲击，也更有利于持续获得营养。

因此，幽门螺杆菌的生存策略可以分成两个层次：

1. 用尿素酶和酸响应机制降低短期酸胁迫；
2. 用运动和趋化进入更稳定的胃黏液生态位。

只解释其中一项，都会低估它为什么能形成长期感染。

## 结果：持续定植带来的是慢性炎症，而不是一次急性感染

幽门螺杆菌在胃黏膜长期存在后，宿主免疫系统会持续作出反应。炎症的位置和程度不同，会进一步影响胃酸分泌、黏膜防御以及胃和十二指肠受到损伤的风险。

这解释了为什么“感染幽门螺杆菌”与“立即出现溃疡”不是同一回事。许多感染者并不会发生溃疡，而疾病风险还受菌株毒力、宿主遗传、免疫反应、感染位置、药物和其他环境因素影响。

机制上，感染提供了一个长期持续的扰动源；临床结果则由这个扰动与宿主条件共同决定。

## 影响：治疗目标从控制酸度转向同时清除病因

在感染机制被确认之前，抑酸治疗能够让许多溃疡愈合，却不能消除持续存在的细菌。停药后病因仍在，复发就可能发生。

一旦幽门螺杆菌被纳入因果链，治疗策略随之改变：一方面抑制胃酸，给受损黏膜恢复条件；另一方面用抗菌方案根除细菌。

这也是为什么现代消化性溃疡治疗中，“症状消失”与“病原被根除”是两个不同终点。抗生素耐药进一步成为现实限制，因为它会降低根除率，即使抑酸仍能暂时改善症状。

## 这套机制的边界

幽门螺杆菌不是所有胃病和所有溃疡的唯一原因。非甾体抗炎药、吸烟、其他疾病和个体差异也会改变风险。不同感染者的炎症模式、胃酸反应和长期结局也并不相同。

因此，“发现一种细菌”并没有把胃病简化成单因素模型。它更准确地说，是把一个长期被忽略的持续病因加入了可检验、可干预的因果链中。
