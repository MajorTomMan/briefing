---
title: "Principle | Why GPS Must Correct Relativistic Time"
dek: "GPS converts signal travel time into distance. Satellite atomic clocks are affected in opposite directions by orbital speed and weaker gravity, so relativity has to be built into the system rather than treated as a theoretical footnote."
date: 2026-09-27
lang: en
section: knowledge
kind: principle
topics: ["GPS", "Relativity", "Atomic Clocks"]
counterpart: "knowledge/principles/gps-relativity-zh"
prerequisites:
  level: intermediate
  subjects:
    - name: "High-school algebra"
      note: "Comfort with distance, speed, time, squares and simple approximations is enough."
    - name: "Basic relativity intuition"
      note: "Moving clocks run slower; clocks higher in a gravitational field run faster relative to ground clocks."
    - name: "Basic GPS idea"
      note: "A receiver estimates range from signal travel time and combines several satellite measurements."
  note: "Readers mainly interested in the engineering result can skim the approximation equations and begin with the 38.6-microsecond section."
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
charts:
  - title: "Daily rate offset of a GPS satellite clock relative to a ground clock"
    description: "Orbital motion slows the satellite clock, while weaker gravity speeds it up. The long-term net effect is about +38.6 microseconds per day."
    type: bar
    xLabel: "Effect"
    yLabel: "Microseconds/day"
    unit: "μs/day"
    labels: ["Special relativity", "Gravitational shift", "Net effect"]
    series:
      - name: "Clock-rate offset"
        values: [-7.2, 45.8, 38.6]
    yMin: -10
    yMax: 50
    note: "Values are from GPS.gov technical material. Positive means the satellite clock advances relative to the ground reference."
    source:
      name: "GPS.gov — GPS Time as Critical Infrastructure Application"
      published: "2011"
      url: "https://www.gps.gov/governance/advisory/meetings/2011-11/nelson.pdf"
formulas:
  - name: "Low-speed special-relativity approximation"
    expression: "\\frac{\\Delta t_{moving}-\\Delta t_{rest}}{\\Delta t_{rest}}\\approx-\\frac{v^2}{2c^2}"
    note: "Useful for intuition when v is much smaller than c. Operational GPS uses a fuller relativistic model."
    source:
      name: "NIST — Putting Einstein to the Test"
      url: "https://www.nist.gov/atomic-clocks/a-powerful-tool-for-science/putting-einstein-test"
  - name: "Weak-field gravitational frequency shift"
    expression: "\\frac{\\Delta f}{f}\\approx\\frac{\\Delta U}{c^2}"
    note: "A clock at higher gravitational potential runs faster relative to a clock deeper in the gravitational field."
    source:
      name: "ESA Navipedia — Fundamental Physics"
      url: "https://gssc.esa.int/navipedia/index.php/Fundamental_Physics"
---

A GPS receiver does not directly observe its coordinates. It receives satellite time and orbit information, estimates how long each radio signal took to arrive, and converts that travel time into range.

That makes timing error a positioning problem. Light travels roughly 300 metres in one microsecond, so a clock drift that sounds tiny on an ordinary watch is enormous in a ranging system.

## Two relativistic effects pull in opposite directions

GPS satellites move rapidly around Earth. Special relativity says that a moving clock runs more slowly relative to a stationary reference. GPS technical material puts this effect at about **-7.2 microseconds per day**.

The satellites are also far above Earth's surface, where the gravitational field is weaker. General relativity predicts the opposite effect: a clock at higher gravitational potential runs faster relative to a ground clock. For GPS, this contribution is about **+45.8 microseconds per day**.

The long-term net is therefore

$$
-7.2+45.8=+38.6\ \mu s/day
$$

so the satellite clock would advance by roughly 38.6 microseconds per day relative to the ground reference if the rate difference were left uncompensated.

## Why tens of microseconds are not small

A simple scale estimate is

$$
\Delta r\approx c\Delta t
$$

Using 38.6 microseconds,

$$
\Delta r\approx3.0\times10^8\times38.6\times10^{-6}
\approx1.16\times10^4\ \mathrm{m}
$$

which is about 11.6 kilometres.

This does not mean an uncorrected receiver would produce exactly an 11.6-kilometre error after one day. GPS positioning combines several satellite observations, receiver clock bias and geometry. The calculation shows the scale: relativistic clock drift is far too large to ignore in a precision navigation system.

## Relativity is built into the engineering

GPS does not simply wait for a daily 38.6-microsecond error and subtract it afterward. The time system is designed around relativistic corrections.

Satellite clock frequencies are offset so that, once in orbit, their long-term rates agree with GPS time as defined for users near Earth. Real orbits are not perfectly circular, so speed and gravitational potential vary over an orbit; navigation data and receiver algorithms include additional periodic corrections.

Earth's rotation also introduces the Sagnac effect. At nanosecond-level timing precision, the system must remain internally consistent across all of these effects.

## Why GPS is such a useful relativity example

Relativity is often introduced through particle accelerators, black holes or cosmology. GPS places the same physics inside routine infrastructure.

GPS.gov notes that GPS supplies precise time as well as position. Communications systems, power grids and financial networks use that timing for synchronisation. The relativistic treatment of satellite clocks therefore matters beyond the blue position dot on a phone.

The engineering lesson is straightforward: a very small fractional timing effect can become a large practical error when it is multiplied by the speed of light and allowed to accumulate.

## Limits of the simple numbers

The -7.2, +45.8 and +38.6 microseconds per day are representative long-term terms. Operational GPS also deals with orbital eccentricity, Earth rotation, clock estimation, signal propagation and receiver design.

So “GPS corrects 38 microseconds every day” is an oversimplification. A better description is that GPS uses a relativistically consistent timing and navigation model from the start; the 38.6-microsecond figure is simply its most visible secular（长期累积的） term.
