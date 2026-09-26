---
title: "Knowledge Brief: Information, Writing and Causality in Disease"
dek: "Shannon's information theory, the decipherment of the Rosetta Stone, and the discovery of Helicobacter pylori all show how a vague problem becomes tractable once its hidden structure is made testable."
date: 2026-09-25
lang: en
section: knowledge
topics: ["Information Theory", "Writing Systems", "Medical History"]
counterpart: "knowledge/2026-09-25/zh"
sources:
  - name: "Claude E. Shannon, A Mathematical Theory of Communication"
    published: "Bell System Technical Journal, 1948"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x"
  - name: "British Museum — The Rosetta Stone"
    url: "https://www.britishmuseum.org/collection/object/Y_EA24"
  - name: "Nobel Prize — Physiology or Medicine 2005"
    published: "2005"
    url: "https://www.nobelprize.org/prizes/medicine/2005/press-release/"
  - name: "NIDDK — Treatment for Peptic Ulcers"
    url: "https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers/treatment"
---

## 1. Shannon's information theory: turning communication into a mathematical limit

In 1948, Claude E. Shannon published *A Mathematical Theory of Communication*. Engineers already understood that bandwidth, noise and signal power constrained communication. Shannon's deeper move was to ask a general question: how much information can a channel carry reliably, and how should information itself be measured?

He deliberately separated semantic meaning from transmission. A sender chooses one message from a set of possible messages, and the receiver tries to reconstruct that choice. From this viewpoint, information can first be treated as a reduction of uncertainty（不确定性）.

For a discrete random variable (X) with outcomes (x_i) and probabilities (p_i), Shannon entropy is

$$
H(X)=-\sum_{i=1}^{n}p_i\log_2 p_i
$$

The unit is the bit. Two equally likely alternatives have an entropy of one bit. If one outcome is almost certain, entropy approaches zero because observing it removes very little uncertainty.

This idea connects directly to compression. When symbols have unequal probabilities, there is no reason to assign every symbol the same code length. Common symbols can use shorter codewords and rare symbols longer ones. With sufficiently long blocks and suitable coding, the average lossless description length can approach the source entropy, but cannot stay below it while still preserving exact reconstruction.

For noisy channels, Shannon introduced mutual information:

$$
I(X;Y)=H(X)-H(X\mid Y)
$$

It measures how much observing (Y) tells us about (X). Channel capacity is then

$$
C=\max_{p(x)} I(X;Y)
$$

The theorem is existential（存在性的） rather than a recipe for one universal encoder. If the transmission rate (R<C), codes exist that can make the error probability arbitrarily（任意地） small. If (R>C), no engineering trick can evade the limit.

For the familiar additive white Gaussian noise channel,

$$
C=B\log_2\left(1+\frac{S}{N}\right)
$$

where (B) is bandwidth and (S/N) is the signal-to-noise power ratio. The relation exposes a practical trade-off: additional power increases capacity, but with diminishing returns（边际收益递减）; additional bandwidth can also increase capacity. Real systems therefore trade spectrum, power, hardware complexity and delay against one another.

Information theory later shaped compression, error-correcting codes, cryptography, machine learning and many other fields. One distinction remains essential: Shannon entropy measures uncertainty in a probability distribution. It is not a direct measure of semantic meaning（语义意义）, usefulness or truth.

## 2. The Rosetta Stone: deciphering a hybrid writing system

The Rosetta Stone was found in 1799 near Rashid in Egypt. It carries a decree from 196 BCE written in Egyptian hieroglyphs, Demotic and ancient Greek. Because scholars could still read Greek, the inscription supplied a known version of the text. The harder problem was to discover what kind of encoding system the Egyptian scripts used.

One early obstacle was the belief that hieroglyphs were mainly ideographic（表意的） pictures. If every sign simply represented an idea, then mapping the Egyptian text onto Greek would remain extremely difficult.

Royal names created a foothold. Thomas Young demonstrated that some signs inside cartouches（王名圈） had phonetic（表音的） values. Jean-François Champollion extended that approach by comparing names such as Ptolemy and Cleopatra and looking for repeated correspondences between sounds and signs.

The method resembles constrained decoding. If a sign sequence is believed to represent a known name, repeated sounds become testable anchors. The decisive advance, however, was not the construction of a simple alphabet. It was the realization that Egyptian writing was hybrid.

The same system could combine phonetic signs, meaning-bearing signs and determinatives（限定符） that classified a word without being pronounced. A word might therefore contain signs for consonantal sounds plus another sign indicating that the word referred to a person, place or category of object.

Coptic provided another bridge. As a late stage of the Egyptian language written mainly with Greek letters, it gave Champollion access to actual Egyptian vocabulary and pronunciation patterns. This allowed the phonetic hypothesis to expand beyond foreign royal names and into the language itself.

The Rosetta Stone mattered not merely because “the same text appeared three times.” It provided a tightly constrained system: Greek supplied semantic boundaries, royal names supplied phonetic anchors, repeated texts allowed cross-checking, and Coptic supplied linguistic continuity. Decipherment（破译） emerged from hypotheses that survived repeated tests across all of those constraints.

## 3. Helicobacter pylori: how an infection changed the causal model of peptic ulcer

For much of the twentieth century, peptic ulcer disease was commonly associated with excess acid, stress, diet and lifestyle. Acid suppression could heal ulcers, yet relapse（复发） was common. That pattern became a clue: acid might be a crucial mechanism of injury without being the complete underlying cause.

Australian pathologist J. Robin Warren observed curved bacteria in gastric biopsies and noticed inflammation around them. Barry J. Marshall joined him in investigating the finding. In the early 1980s, they cultured the organism later named *Helicobacter pylori* and linked it to chronic gastritis and many gastric and duodenal ulcers. Their work was recognized by the 2005 Nobel Prize in Physiology or Medicine.

The biological puzzle was obvious. The stomach lumen can reach a pH close to 1–2. How could a bacterium persist there?

One important answer is urease（尿素酶）. *H. pylori* catalyses the reaction

$$
\mathrm{CO(NH_2)_2 + H_2O \rightarrow 2NH_3 + CO_2}
$$

The ammonia can accept protons and help buffer the bacterium's immediate environment. The organism also uses flagellar motility and chemotaxis（趋化） to move through the harsh lumen and into the mucus layer near the gastric epithelium, where the local environment is less acidic and more suitable for persistent colonization.

Infection does not guarantee an ulcer. Outcomes depend on bacterial virulence factors, the location and pattern of inflammation, host immune responses, acid secretion and other risks. Chronic infection can disrupt mucosal（黏膜的） defence and acid regulation, and it is also associated with higher risks of some gastric cancers and gastric MALT lymphoma.

The clinical revolution followed the change in causal model. If persistent infection drives a large share of disease, treatment should not merely suppress acid; it should eradicate（根除） the organism. Modern regimens therefore combine acid suppression with multiple antibiotics, sometimes with bismuth. Antibiotic resistance has become an important constraint because symptom relief without eradication does not remove the causal agent.

The broader lesson is not that older observations were useless. Acid still matters, and other factors still modify risk. What changed was the hierarchy of explanation: many ulcers once treated mainly as chronic acid-related disorders became diseases in which a microbial cause could be identified and, in many cases, removed.
