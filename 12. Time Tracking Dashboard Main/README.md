# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./solution/desktop-1.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

- Learned a lot about CSS grid-system
- One more step towards Improvement of responsive designing
- Learned to load JSON data to JS & parse it.
- Learned to load data to the DOM.

To see how you can add code snippets, see below:

```html
<div class="parent"></div>
```

```css
.parent {
  width: 100%;
  display: grid;
  grid-template-columns: 0 repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.parent > div {
  width: 29rem;
  height: 29rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-position: 90% -1%;
}

.div1 {
  grid-area: 1 / 2 / 2 / 3;
  background: var(--Primary-Color-2) url("./images/icon-work.svg") no-repeat;
}
.div2 {
  grid-area: 2 / 2 / 3 / 3;
  background: var(--Primary-Color-5) url("./images/icon-exercise.svg") no-repeat;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
  background: var(--Primary-Color-3) url("./images/icon-play.svg") no-repeat;
}
.div4 {
  grid-area: 2 / 3 / 3 / 4;
  background: var(--Primary-Color-6) url("./images/icon-social.svg") no-repeat;
}
.div5 {
  grid-area: 1 / 4 / 2 / 5;
  background: var(--Primary-Color-4) url("./images/icon-study.svg") no-repeat;
}
.div6 {
  grid-area: 2 / 4 / 3 / 5;
  background: var(--Primary-Color-7) url("./images/icon-self-care.svg") no-repeat;
}
```

```js
data.forEach((d, i) => {
      let html = `
        <div class="div${i + 1}">
            <div class="in-card">
              <small class="type">${d.title}</small>
              <h1 class="current-report"><span>${
                d.timeframes.weekly.current
              }</span>hrs</h1>
              <small class="last-report">Last Week - <span>${
                d.timeframes.weekly.previous
              }</span>hrs</small>
              <button class="btn">
                <img src="./images/icon-ellipsis.svg" />
              </button>
            </div>
          </div>
        `;

      parentEl.innerHTML += html;
```

### Continued development

- Continue focusing on HTML5, CSS3 & JavaScript.
- Still not completely comfortable with responsive designs.
- Still not completely comfortable with ES6 modules in JS.
- Might learn ReactJS for future projects.

### Useful resources

- [CSS Grid Generator](https://cssgrid-generator.netlify.app/) - This helped me for grid system in CSS. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@riki8055](https://www.frontendmentor.io/profile/riki8055)
- Instagram - [@\_rit.ik\_](https://www.instagram.com/_rit.ik_)

## Acknowledgments

I want to thanks Frontend Mentor which provides such challenges to work on. Practice these challenges helped me improving my skills for frontend development. The challenges so far I've solved are fantastic and I really love to solve them!
