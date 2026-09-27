---
title: "Knowledge Brief | 2026-09-27: Satellite Time, Ammonia from Air and Reusable Type"
dek: "GPS turns relativity into an everyday engineering constraint; Haber-Bosch turns atmospheric nitrogen into an industrial feedstock; movable type changes the economics of reproducing text."
date: 2026-09-27
lang: en
section: knowledge
kind: feature
topics: ["GPS and Relativity", "Synthetic Ammonia", "Movable Type"]
counterpart: "knowledge/2026-09-27/zh"
principles:
  - chapter: "1. GPS and relativity"
    title: "Why GPS Must Correct Relativistic Time"
    href: "knowledge/principles/gps-relativity-en"
    note: "How orbital speed and weaker gravity produce a net satellite clock offset of about 38.6 microseconds per day."
  - chapter: "2. Haber-Bosch ammonia"
    title: "Why Haber-Bosch Is a Compromise Between Equilibrium and Reaction Rate"
    href: "knowledge/principles/haber-bosch-equilibrium-en"
    note: "How equilibrium, kinetics, catalysts, pressure engineering and recycle define the operating window."
  - chapter: "3. Gutenberg movable type"
    title: "What Movable Type Really Changed: The Cost of Repeating a Page"
    href: "knowledge/principles/gutenberg-movable-type-en"
    note: "How reusable metal type changed pages from one-off manual products into modular, repeatable production."
sources:
  - name: "NIST — Putting Einstein to the Test"
    url: "https://www.nist.gov/atomic-clocks/a-powerful-tool-for-science/putting-einstein-test"
  - name: "GPS.gov — GPS and Telling Time"
    url: "https://www.gps.gov/gps-and-telling-time"
  - name: "GPS.gov — GPS Time as Critical Infrastructure Application"
    published: "2011"
    url: "https://www.gps.gov/governance/advisory/meetings/2011-11/nelson.pdf"
  - name: "Fritz Haber — Nobel Lecture: Ammonia Synthesis from Its Elements"
    published: "1920"
    url: "https://www.nobelprize.org/uploads/2018/06/haber-lecture.pdf"
  - name: "Nobel Prize — Fritz Haber, Biographical"
    url: "https://www.nobelprize.org/prizes/chemistry/1918/haber/biographical/"
  - name: "Library of Congress — The Gutenberg Bible"
    url: "https://www.loc.gov/exhibits/bibles/interactives/gutenberg/index.html"
  - name: "Library of Congress — Alphabet Venture"
    published: "2018"
    url: "https://blogs.loc.gov/international-collections/2018/06/alphabet-venture/"
---

## 1. GPS and relativity: the blue dot begins with clocks

A GPS receiver calculates position from time before it ever produces latitude and longitude.

Satellites broadcast orbital data and transmission time. The receiver compares arrival times and converts signal travel time into range. Measurements from several satellites then constrain the receiver's position and clock bias.

Timing error therefore becomes ranging error. Light travels about 300 metres in one microsecond, so a systematic clock difference of only a few tens of microseconds is already far beyond the scale of useful navigation.

GPS satellite clocks naturally develop a difference of that size because of relativity.

Orbital motion produces special-relativistic time dilation, making the satellite clock run more slowly than a ground reference by about 7.2 microseconds per day. The satellite is also higher in Earth's gravitational field, where general relativity makes its clock run faster by about 45.8 microseconds per day.

The net secular（长期累积的） effect is about **+38.6 microseconds per day**.

Multiplied by the speed of light, that daily time scale corresponds to more than ten kilometres of signal travel. The exact positioning error is not simply “11 kilometres per day” because the navigation solution involves several satellites, receiver clock bias and geometry. The calculation shows why the effect cannot be ignored.

Relativity is built into GPS timing architecture. Satellite clock frequencies are offset for orbit, and further corrections account for changing orbital conditions. Earth's rotation adds another relativistic timing term through the Sagnac effect.

GPS.gov also treats time as a core GPS service, not a side product. Telecommunications, power systems and financial networks use GPS timing for synchronisation. The relativistic treatment of satellite clocks therefore feeds into infrastructure far beyond navigation.

The accompanying principle essay derives the error scale and explains why the system cannot be reduced to “subtract 38 microseconds once a day”.

## 2. Haber-Bosch ammonia: when a simple reaction becomes a systems problem

Atmospheric nitrogen is abundant, but molecular nitrogen is difficult to react because of its strong triple bond. Natural fixation by microbes and lightning supplied usable nitrogen long before industrial chemistry, yet concentrated nitrogen resources remained constrained.

In the early twentieth century Fritz Haber demonstrated catalytic synthesis of ammonia from nitrogen and hydrogen at elevated temperature and pressure. Carl Bosch and industrial teams then turned the laboratory process into large-scale continuous production.

The reaction is short:

$$
\mathrm{N_2+3H_2\rightleftharpoons2NH_3}
$$

The operating problem is not.

Ammonia formation is exothermic, so lower temperature favours ammonia at equilibrium. But lower temperature also slows the reaction sharply. Raising temperature improves kinetics（反应动力学） while reducing the equilibrium ammonia fraction.

Pressure creates another trade-off. Four gas molecules on the reactant side become two on the product side, so higher pressure favours ammonia. Higher pressure also means stronger vessels, more compression work and more demanding materials and safety systems.

A catalyst solves the rate problem, not the equilibrium problem. It helps the system reach equilibrium faster but does not move the equilibrium position by itself.

Industrial plants therefore do not require complete conversion in one pass. The reactor outlet is cooled so that ammonia can be separated, while unreacted nitrogen and hydrogen are returned to the reactor. The recycle loop turns modest single-pass conversion into efficient overall use of feedstock.

Haber's Nobel lecture discussed the interaction of pressure, temperature, gas ratio and circulation. Early industrial conditions around 150-200 atmospheres and roughly 500°C reflected the same compromise that still defines the process: thermodynamics prefers lower temperature and higher pressure; kinetics demands enough temperature; engineering limits pressure, materials and energy use.

Synthetic ammonia made atmospheric nitrogen available as a large-scale chemical feedstock for fertilisers and other nitrogen compounds. The same route also supported nitric acid and explosives, giving the technology an unavoidable dual-use history.

The principle essay treats Haber-Bosch as an optimisation problem: why the equilibrium-favourable condition is not automatically the industrial condition, and why recycle is as important as the reactor itself.

## 3. Gutenberg movable type: before information spread faster, copying became cheaper

Around the middle of the fifteenth century, Gutenberg used movable metal type in Mainz to produce major books. Library of Congress material describes the Gutenberg Bible, completed around 1455, as a landmark of movable-metal-type printing in Western Europe.

Movable type did not originate globally with Gutenberg; earlier traditions existed in Asia. What became influential in Western Europe was the integration of metal type, casting, composition, ink, paper handling and mechanical pressing into a repeatable production process.

A manuscript has a simple cost problem: another copy requires another substantial block of copying labour.

Woodblock printing already allowed one carved surface to make many impressions, but a page block was tied largely to that page. Movable type reduced the reusable unit to the individual character. After printing, letters could be dismantled, sorted and composed into another page.

That creates a different cost structure.

Type preparation, composition, proofreading and press setup are substantial upfront costs. Once a page is ready, additional copies mainly add paper, ink, press operation and binding. A longer print run spreads the setup cost across more copies.

This did not instantly make books cheap or literacy universal. Paper, presses, skilled labour, distribution, censorship and reader demand still mattered.

But replication itself had changed. Larger numbers of near-identical copies could circulate between cities, and readers could more easily refer to the same edition. Classical texts, religious works, administrative material, teaching texts, scientific arguments and pamphlets all operated under a different distribution constraint.

The lasting production insight is more specific than “printing became faster”: text became a product with high preparation cost and a lower marginal cost for the next copy.

The principle essay follows that cost structure and explains why type, ink, composition and pressing had to function as one system.
