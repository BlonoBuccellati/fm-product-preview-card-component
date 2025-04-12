# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Tech Stack](#tech-stack)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solutions](https://www.frontendmentor.io/profile/BlonoBuccellati/solutions)
- Live Site URL: [Deployed on Vercel](https://fm-product-preview-card-component-one.vercel.app/)

## My process

### Tech Stack

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,tailwind,nodejs)](https://skillicons.dev)

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JS library
- [tailwindcss](https://styled-components.com/) - utility-first CSS framework
- [node.js](https://nodejs.org/) - Runtime & Build Tool

### What I learned

- history of responsive design
- Since the `button` tag only allows [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content), you should not place a `div` inside a `button`.
  Instead, use elements like `span` or `strong` if you need to apply styling or layout inside a button.
- how to use `@utility` of tailwindCSS

```css
@utility text-preset-1 {
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0px;
}
```

- how to use `srcset`

```js
<source srcSet="/images/image-product-desktop.jpg" media="(min-width:768px)" />
```

- How to style text such as `uppercase` or `tracking`

```js
<div className="text-Gray tracking-[.3rem] uppercase">perfume</div>
```

### Continued development

- Name of the componentized CSS for typography

```css
@utility text-preset-1 {
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0px;
}
```

-I want to deepen my understanding of how to use `next/image` effectively.

### Useful resources

- [How to import SVGs into your Next.js apps](https://blog.logrocket.com/import-svgs-next-js-apps/) - This article helped me figure out how to use SVGs in my Next.js projects.

## Author

- Website - [BlonoBuccellati](https://github.com/BlonoBuccellati)
- Frontend Mentor - [@BlonoBuccellati](https://www.frontendmentor.io/profile/BlonoBuccellati)
- zenn - [@bln](https://zenn.dev/bln)
