---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

<h2>   👋 Hi, I am Antonio Pelusi</h2>

<p>   🎓  I am a Computer Science graduate at <a href="https://www.unimore.it/" style="text-decoration: none;">Unimore</a>, Modena (IT)</p>

<p>   🌱  Currently enrolled in the Master's Degree course in Computer Science at <a href="https://www.unimore.it/" style="text-decoration: none;">Unimore</a>, Modena (IT)</p>

<p>   🕹️  Videogames enthusiast</p>

<p>   🎸  Guitar player</p>

<p>   👾  Browse my projects <a href="https://www.antoniopelusi.com/archives/">here</a>!</p>
      
---
## Skills and known programming languages
- C
- C++
- Java
- Kotlin
- Python
- HTML/CSS/JavaScript
- Django framework
- Servlet-based Web Apps

---
## Work experiences
- Internship in [Liferay](https://www.liferay.com/), in which I integrated a new payment method, [Stripe](https://stripe.com/), into [Liferay Portal](https://github.com/liferay/liferay-portal). Source code available [here](https://github.com/antoniopelusi/liferay-portal)

---
## Contact me

<i class="fas fa-envelope" aria-hidden="true"></i> **Email**: [antoniopelusi2000@gmail.com](mailto:antoniopelusi2000@gmail.com")

<i class="fab fa-linkedin" aria-hidden="true"></i> **LinkedIn**: [@antoniopelusi](https://www.linkedin.com/in/antoniopelusi/)

<i class="fab fa-twitter" aria-hidden="true"></i> **Twitter**: [@antopelusi](https://twitter.com/antopelusi)

<i class="fab fa-github" aria-hidden="true"></i> **GitHub**: [@antoniopelusi](https://github.com/antoniopelusi)


<html style="--house--size: 64px; --foundation--height: 42px; --foundation--width: 175px;" lang="en"><head>

  <meta charset="UTF-8">
  
<link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png">
<meta name="apple-mobile-web-app-title" content="CodePen">

<link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">

<link rel="mask-icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" color="#111">


  <title>CodePen - SVG animation with sliders</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.1.0/nouislider.min.css">
  
<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata");
:root {
  --house--size: $house--size;
  --foundation--height: $house-foundation--height;
  --foundation--width: $house-foundation--width;
}

body {
  background-color: #00000000;
  color: #fcfbff;
  font-family: "Inconsolata", monospace;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(min-content, 40px);
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  min-height: 100vh;
}

main {
  display: grid;
  grid-template-rows: minmax(300px, 1fr) 10vh;
  grid-gap: 3vh;
  height: 100%;
}
main #artboard {
  align-items: flex-end;
}
main #artboard .figure {
  position: relative;
  height: 100%;
  width: 100%;
}
main #artboard .figure-container {
  transform: translate(calc(calc(100vw - 50%) - 145px), 30vh);
}
main #artboard .figure .ground__shadow {
  fill: #00000075;
}
main #artboard .figure .ground__shadow[shadow="1"] {
  transform: translate(calc(calc(175px - var(--foundation--width)) * -1), 0);
}
.ready main #artboard .figure .ground__shadow[shadow="1"] {
  transition: transform 250ms 50ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .tree[tree="1"] {
  transform: translate(calc(calc(175px - var(--foundation--width)) / 2), 18px);
}
.ready main #artboard .figure .tree[tree="1"] {
  transition: transform 250ms 50ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .tree[tree="2"] {
  transform: translate(calc(178px - calc(calc(175px - var(--foundation--width)) / 1.1)), 53px) scale(0.7);
}
.ready main #artboard .figure .tree[tree="2"] {
  transition: transform 250ms 50ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .tree__fooliage {
  fill: #ff986d;
}
main #artboard .figure .tree__branch, main #artboard .figure .tree__trunk {
  fill: #552427;
}
main #artboard .figure .shrub[shrub="1"] {
  transform: translate(calc(49px + calc(calc(175px - var(--foundation--width)) / 2)), 68px) scale(0.55);
}
.ready main #artboard .figure .shrub[shrub="1"] {
  transition: transform 250ms 75ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .shrub[shrub="2"] {
  transform: translate(calc(130px - calc(calc(175px - var(--foundation--width)) / 2)), 102px) scale(0.3);
}
.ready main #artboard .figure .shrub[shrub="2"] {
  transition: transform 250ms 50ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .shrub[shrub="3"] {
  transform: translate(calc(180px - calc(calc(175px - var(--foundation--width)) / 2)), 83px) scale(0.4);
}
.ready main #artboard .figure .shrub[shrub="3"] {
  transition: transform 250ms 125ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .shrub[shrub="4"] {
  transform: translate(calc(185px - calc(calc(175px - var(--foundation--width)) / 2)), 57px) scale(0.6);
}
.ready main #artboard .figure .shrub[shrub="4"] {
  transition: transform 250ms 100ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .shrub[shrub="5"] {
  transform: translate(calc(235px - calc(calc(175px - var(--foundation--width)) / 2)), 99px) scale(0.3);
}
.ready main #artboard .figure .shrub[shrub="5"] {
  transition: transform 250ms 75ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .shrub__part {
  fill: #ff986d;
}
main #artboard .figure .foundation__pole--front {
  fill: #b8b9ea;
}
.ready main #artboard .figure .foundation__pole--front {
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__pole--back {
  fill: #fcfbff;
}
.ready main #artboard .figure .foundation__pole--back {
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__pole[pole="1"] {
  transform: translate(calc(75px + calc(calc(175px - var(--foundation--width)) / 2)), 143px) rotate(180deg);
}
.ready main #artboard .figure .foundation__pole[pole="1"] {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__pole[pole="1"] .foundation__pole--front {
  width: 10px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="1"] .foundation__pole--back {
  width: 3px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="2"] {
  transform: translate(calc(120px + calc(calc(175px - var(--foundation--width)) / 2)), 143px) rotate(180deg);
}
.ready main #artboard .figure .foundation__pole[pole="2"] {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__pole[pole="2"] .foundation__pole--front {
  width: 10px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="2"] .foundation__pole--back {
  width: 3px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="3"] {
  transform: translate(calc(154px - calc(calc(175px - var(--foundation--width)) / 2)), 143px) rotate(180deg);
}
.ready main #artboard .figure .foundation__pole[pole="3"] {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__pole[pole="3"] .foundation__pole--front {
  width: 10px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="3"] .foundation__pole--back {
  width: 7px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="4"] {
  transform: translate(calc(206px - calc(calc(175px - var(--foundation--width)) / 2)), 143px) rotate(180deg);
}
.ready main #artboard .figure .foundation__pole[pole="4"] {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__pole[pole="4"] .foundation__pole--front {
  width: 10px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__pole[pole="4"] .foundation__pole--back {
  width: 7px;
  height: var(--foundation--height);
}
main #artboard .figure .foundation__floor {
  fill: #d5d3f7;
  transform: translate(calc(47px + calc(calc(175px - var(--foundation--width)) / 2)), calc(136px - var(--foundation--height)));
}
.ready main #artboard .figure .foundation__floor {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__floor rect {
  height: 7px;
}
main #artboard .figure .foundation__floor rect:nth-of-type(1) {
  width: var(--foundation--width);
}
.ready main #artboard .figure .foundation__floor rect:nth-of-type(1) {
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .foundation__floor rect:nth-of-type(2) {
  fill: #fcfbff;
  width: 7px;
  transform: translate(calc(53px - calc(calc(175px - var(--foundation--width)) / 2.5)), 0);
}
.ready main #artboard .figure .foundation__floor rect:nth-of-type(2) {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .house {
  fill: #b8b9ea;
  transform: translate(calc(71px + calc(calc(64px - var(--house--size)) / 2)), calc(37px - var(--foundation--height)));
}
.ready main #artboard .figure .house {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .house__side__topwindow {
  fill: #414061;
}
main #artboard .figure .house__side__window {
  fill: #414061;
  height: 40px;
  width: 24px;
  transform: translate(20px, 30px);
}
main #artboard .figure .house__entrance {
  transform: translate(65px, 14px);
}
main #artboard .figure .house__entrance__wall {
  fill: #b8b9ea;
  height: 86px;
  width: var(--house--size);
}
.ready main #artboard .figure .house__entrance__wall {
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .house__entrance__sliding-door {
  transform: translate(1px, 8px);
}
main #artboard .figure .house__entrance__sliding-door__frame {
  fill: #fcfbff;
  height: 78px;
  width: 64px;
}
main #artboard .figure .house__entrance__sliding-door__glass {
  fill: #414061;
  height: 70px;
  width: 16px;
}
main #artboard .figure .house__entrance__sliding-door__glass[glass="1"] {
  transform: translate(4px, 4px);
}
main #artboard .figure .house__entrance__sliding-door__glass[glass="2"] {
  transform: translate(24px, 4px);
}
main #artboard .figure .house__entrance__sliding-door__glass[glass="3"] {
  transform: translate(44px, 4px);
}
main #artboard .figure .house__protruding-part {
  transform: translate(calc(66px - calc(64px - var(--house--size))), 14px);
}
.ready main #artboard .figure .house__protruding-part {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .house__protruding-part__side-wall {
  fill: #d5d3f7;
  height: 86px;
  width: 64px;
}
main #artboard .figure .house__protruding-part__wall {
  fill: #fcfbff;
  height: 86px;
  width: 32px;
  transform: translate(32px, 0);
}
main #artboard .figure .house__protruding-part__window {
  fill: #414061;
  height: 40px;
  width: 24px;
  transform: translate(calc(32px + 5px), 16px);
}
main #artboard .figure .house__roof {
  --roof--length: 64px;
  fill: #fcfbff;
  transform: translate(33px, -12px);
}
main #artboard .figure .house__roof__tiles {
  height: 26px;
  width: calc(var(--roof--length) - calc(64px - var(--house--size)));
  transform: skew(52deg);
}
.ready main #artboard .figure .house__roof__tiles {
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .house__roof__tower {
  transform: translate(calc(20px - calc(calc(64px - var(--house--size)) / 2.25)), 0);
}
.ready main #artboard .figure .house__roof__tower {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
main #artboard .figure .house__roof__tower__side-wall {
  fill: #b8b9ea;
}
main #artboard .figure .house__roof__tower__front-wall {
  fill: #d5d3f7;
}
main #artboard .figure .house__roof__tower__roof {
  height: 9px;
  width: 25px;
  transform: translate(12px, -12px) skew(55deg);
}
main #artboard .figure .house__roof__tower__topwindow {
  fill: #414061;
}
main #artboard .figure .house__roof__tower__window {
  fill: #414061;
  height: 7px;
  width: 17px;
  transform: translate(30px, 0);
}
main #controls {
  flex-wrap: wrap;
  padding-top: 0.5rem;
}
main #controls #house-size-slider {
  background-color: #fcfbff;
}
main #controls #house-size-slider .noUi-handle {
  border-color: #fcfbff;
}
main #controls #foundation-height-slider {
  background-color: #ff986d;
}
main #controls #foundation-height-slider .noUi-handle {
  border-color: #ff986d;
}
main #controls #foundation-width-slider {
  background-color: #b8b9ea;
}
main #controls #foundation-width-slider .noUi-handle {
  border-color: #b8b9ea;
}
main #controls .controller {
  flex: 1;
  margin: 0 3vw;
  min-width: 70px;
  max-width: 120px;
  border: unset;
  box-shadow: unset;
  height: 2px;
}
main #controls .controller .noUi-handle {
  background-color: #414061;
  border-radius: 0;
  border-width: 2px;
  box-shadow: unset;
  width: 10px;
  height: 10px;
  right: -8px;
  top: -4px;
}
main #controls .controller .noUi-handle::before, main #controls .controller .noUi-handle::after {
  content: unset;
}

footer {
  padding: 0 1rem;
}

a {
  color: #b8b9ea;
}

main #artboard, main #controls {
  display: flex;
  justify-content: center;
}
</style>

  <script>
  window.console = window.console || function(t) {};
</script>

  
  
  <script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
</script>


</head>

<body translate="no" class="ready">
  <main>
  <small style="position: absolute; padding: .5rem;">For better experience please use Chrome</small>
  <section id="artboard">
    <svg class="figure" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <g class="figure-container">
        <g class="figure-landscape"><!-- Background landscape -->
          <g class="ground">
            <path class="ground__shadow" shadow="1" d="M240 140 l-4000 0 l0 350 Z"></path>
          </g>
          <g class="tree" tree="1">
            <circle class="tree__fooliage" cx="50" cy="50" r="50"></circle>
            <g>
              <path class="tree__trunk" d="M50 125 l0 -95 l2 0 l0 95 Z"></path>
              <path class="tree__branch" d="M50 80 l-8 -8 l-15 0 l0 -2 l13 0 l-5 -5 l1 -2 l16 16 Z"></path>
              <path class="tree__branch" d="M50 44 l-12 -7 l0 -2 l3 2 l0 -20 l2 0 l0 21 l7 4 Z"></path>
              <path class="tree__branch" d="M52 64 l25 -20 l1 1 l-8 7 l20 0 l0 2 l-22 0 l-16 13 Z"></path>
              <path class="tree__branch" d="M52 86 l12 -10 l2 1 l-14 12 Z"></path>
            </g>
          </g>
          <g class="tree" tree="2">
            <circle class="tree__fooliage" cx="50" cy="50" r="50"></circle>
            <g>
              <path class="tree__trunk" d="M50 125 l0 -95 l2 0 l0 95 Z"></path>
              <path class="tree__branch" d="M50 80 l-8 -8 l-15 0 l0 -2 l13 0 l-5 -5 l1 -2 l16 16 Z"></path>
              <path class="tree__branch" d="M50 44 l-12 -7 l0 -2 l3 2 l0 -20 l2 0 l0 21 l7 4 Z"></path>
              <path class="tree__branch" d="M52 64 l25 -20 l1 1 l-8 7 l20 0 l0 2 l-22 0 l-16 13 Z"></path>
              <path class="tree__branch" d="M52 86 l12 -10 l2 1 l-14 12 Z"></path>
            </g>
          </g>
          <g class="shrub" shrub="3">
            <path class="shrub__part" d="M21 125 a20 20 0 0 1 40 0 Z"></path>
            <path class="shrub__part" d="M6 135 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M0 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M41 139 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M61 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M16 140 a25 25 0 0 1 50 0 Z"></path>
          </g>
          <g class="shrub" shrub="4">
            <path class="shrub__part" d="M21 125 a20 20 0 0 1 40 0 Z"></path>
            <path class="shrub__part" d="M41 139 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M61 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M16 140 a25 25 0 0 1 50 0 Z"></path>
          </g>
          <g class="shrub" shrub="5">
            <path class="shrub__part" d="M21 125 a20 20 0 0 1 40 0 Z"></path>
            <path class="shrub__part" d="M6 135 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M0 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M41 139 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M61 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M16 140 a25 25 0 0 1 50 0 Z"></path>
          </g>
        </g>

        <g class="figure-house">
          <g class="foundation">
            <g class="foundation__pole" pole="1">
              <rect class="foundation__pole--front"></rect>
              <rect class="foundation__pole--back"></rect>
            </g>
            <g class="foundation__pole" pole="2">
              <rect class="foundation__pole--front"></rect>
              <rect class="foundation__pole--back"></rect>
            </g>
            <g class="foundation__pole" pole="3">
              <rect class="foundation__pole--front"></rect>
              <rect class="foundation__pole--back" x="3"></rect>
            </g>
            <g class="foundation__pole" pole="4">
              <rect class="foundation__pole--front"></rect>
              <rect class="foundation__pole--back" x="3"></rect>
            </g>
            <g class="foundation__floor">
              <rect></rect>
              <rect></rect>
            </g>
          </g>
          <g class="house">
            <g class="house__side">
              <path class="house__side__wall" d="M0 100 l0 -86 l33 -26 l33 26 l0 86 Z"></path>
              <circle class="house__side__topwindow" cx="33" cy="6" r="7"></circle>
              <rect class="house__side__window"></rect>
            </g>
            <g class="house__entrance">
              <rect class="house__entrance__wall"></rect>
              <g class="house__entrance__sliding-door">
                <rect class="house__entrance__sliding-door__frame"></rect>
                <rect class="house__entrance__sliding-door__glass" glass="1"></rect>
                <rect class="house__entrance__sliding-door__glass" glass="2"></rect>
                <rect class="house__entrance__sliding-door__glass" glass="3"></rect>
              </g>
            </g>
            <g class="house__protruding-part">
              <rect class="house__protruding-part__side-wall"></rect>
              <rect class="house__protruding-part__wall"></rect>
              <rect class="house__protruding-part__window"></rect>
            </g>
            <g class="house__roof">
              <rect class="house__roof__tiles"></rect>
              <g class="house__roof__tower">
                <path class="house__roof__tower__side-wall" d="M0 0 l6 0 l13 10 l6 0 l0 -13 l-13 -9 l-12 9 Z"></path>
                <path class="house__roof__tower__front-wall" d="M25 -3 l0 13 l25 0 l0 -13 Z"></path>
                <rect class="house__roof__tower__roof"></rect>
                <circle class="house__roof__tower__topwindow" cx="12" cy="-5" r="2"></circle>
                <rect class="house__roof__tower__window"></rect>
              </g>
            </g>
          </g>
        </g>
        
        <g class="figure-landscape"><!-- Foreground landscape -->
          <g class="shrub" shrub="1">
            <path class="shrub__part" d="M21 125 a20 20 0 0 1 40 0 Z"></path>
            <path class="shrub__part" d="M6 135 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M0 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M41 139 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M61 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M16 140 a25 25 0 0 1 50 0 Z"></path>
          </g>
          <g class="shrub" shrub="2">
            <path class="shrub__part" d="M21 125 a20 20 0 0 1 40 0 Z"></path>
            <path class="shrub__part" d="M6 135 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M0 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M41 139 a15 15 0 0 1 30 0 Z"></path>
            <path class="shrub__part" d="M61 140 a10 10 0 0 1 20 0 Z"></path>
            <path class="shrub__part" d="M16 140 a25 25 0 0 1 50 0 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  </section>
  <section id="controls">
    <div id="house-size-slider" class="controller noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-connects"></div><div class="noUi-origin" style="transform: translate(-100%); z-index: 4;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="0.0" aria-valuetext="1.00"></div></div></div></div>
    <div id="foundation-height-slider" class="controller noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-connects"></div><div class="noUi-origin" style="transform: translate(-100%); z-index: 4;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="0.0" aria-valuetext="1.00"></div></div></div></div>
    <div id="foundation-width-slider" class="controller noUi-target noUi-ltr noUi-horizontal"><div class="noUi-base"><div class="noUi-connects"></div><div class="noUi-origin" style="transform: translate(-100%); z-index: 4;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="0.0" aria-valuetext="1.00"></div></div></div></div>
  </section>
</main>

<footer>
  <small>
  I saw this fancy animation by <a href="https://www.instagram.com/p/BdsGs4DlqMV/?taken-by=ameenimagina" target="_blank">Ameen Shahid</a> - I wanted to recreate it with HTML and CSS - made by <a href="https://twitter.com/knekkii" target="_blank">Kenneth Aamås</a></small> 
</footer>
    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.1.0/nouislider.min.js"></script>
      <script id="rendered-js">
const config = {
  start: [1],
  step: 1,
  range: {
    min: [1],
    max: [150] } };



let houseSizeSlider = noUiSlider.create(document.getElementById('house-size-slider'), config),
foundationHeightSlider = noUiSlider.create(document.getElementById('foundation-height-slider'), config),
foundationWidthSlider = noUiSlider.create(document.getElementById('foundation-width-slider'), config);

houseSizeSlider.on('update', updateValue);
foundationHeightSlider.on('update', updateValue);
foundationWidthSlider.on('update', updateValue);

function updateValue() {
  let value = parseInt(this.get()),
  id = this.target.id;

  switch (id) {
    case 'house-size-slider':
      document.documentElement.style.setProperty('--house--size', 63 + value + 'px');
      break;
    case 'foundation-height-slider':
      document.documentElement.style.setProperty('--foundation--height', 41 + (value >= 2 ? value / 2 : value) + 'px');
      break;
    case 'foundation-width-slider':
      document.documentElement.style.setProperty('--foundation--width', 174 + value + 'px');
      break;
    default:}

}

function playIntroSequence() {
  // Intro sequence
  setTimeout(() => {
    houseSizeSlider.set(100);
    foundationHeightSlider.set(100);
    foundationWidthSlider.set(100);
  }, 500);

  setTimeout(() => {
    houseSizeSlider.set(0);
  }, 1100);

  setTimeout(() => {
    houseSizeSlider.set(100);
  }, 1700);

  setTimeout(() => {
    foundationWidthSlider.set(150);
  }, 2300);

  setTimeout(() => {
    foundationWidthSlider.set(100);
  }, 2900);

  setTimeout(() => {
    houseSizeSlider.set(150);
    foundationWidthSlider.set(150);
  }, 3700);

  setTimeout(() => {
    houseSizeSlider.set(1);
    foundationWidthSlider.set(1);
  }, 4500);

  setTimeout(() => {
    houseSizeSlider.set(100);
    foundationWidthSlider.set(100);
  }, 5100);

  setTimeout(() => {
    houseSizeSlider.set(1);
    foundationHeightSlider.set(1);
    foundationWidthSlider.set(1);
  }, 6000);
}

setTimeout(() => {
  document.body.classList.add('ready');

  // Play intro sequence
  setTimeout(() => {
    playIntroSequence();
  }, 1000);
}, 0);
//# sourceURL=pen.js
    </script>

  




 
</body></html>
