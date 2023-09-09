# Japanese Seasonal Anime Ranker
## Summary

A Japanese Animated Television Series Ranker built using [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/), [Next UI](https://nextui.org/) and [Next JS](https://nextjs.org/), and powered by [Anilist API](https://anilist.gitbook.io/anilist-apiv2-docs/).

The website ranks the top ten most anticipated shows in the current airing season based on Japanese Television seasonal categories. 

## Demo

A static version of the website can be found [here](https://japanese-seasonal-anime-ranker-9ut3.vercel.app/) for the Fall 2023 season.

## Getting Started

### Prerequisites
```
npm install npm@latest -g
```
### Installation

1. Clone the repo
```
git clone https://github.com/navatykhara/Japanese-Seasonal-Anime-Ranker.git
```
2. Switch to project directory
```
cd $(pwd)/Japanese-Seasonal-Anime-Ranker
```
3. Install NPM Packages
```
npm install
```
3. Build Project
```
npm run build
```
4. Run Server
```
npm run start
```

## Development Process

Tech used: HTML, CSS, JavaScript, TypeScript, Next.js, Next UI, Node.js

A data-collection method was built around the Anilist-API to gather up-to-date information on the current airing season. This method can be found in public/index.js. This method needs to be run manually to update the data though plans are in place to automate the procedure.

A simple front-end website was constructed for  the data.

## To-Do

Deploy website onto AWS with the data collection method routinely ran every few months to update the website. 

## Lessons Learned

This project was used to practice my front-end skills as well as serve as the basis for other cloud related practice.
