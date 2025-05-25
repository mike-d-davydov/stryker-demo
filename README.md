# Stryker Demo - Code for a Lightning Talk on Mutation Testing

This repository contains the supporting code for an [InRhythm Lightning Talk](https://www.youtube.com/watch?v=Mu4bEs9KvZo&list=PLr7BUdyeim8Nb3snSzRswjJ0mIrGIkJwg&index=1&t=628s) titled: **"Introduction to Test Design and Test Coverage"** (originally presented September 30, 2021).

## 🎯 Purpose of this Repository & The Associated Talk

The primary goal of the talk and this supporting codebase is to **demonstrate visually and practically**:

* Why 100% traditional **line code coverage** can be a deceptive metric and is often insufficient to guarantee robust, bug-free code.
* How **mutation testing**, using frameworks like **Stryker** (configured here with Jest for a TypeScript project), can effectively reveal deficiencies in test suites that simple line coverage metrics miss.
* The real-world application of mutation testing to improve overall test quality and uncover hidden bugs.

**This repository provides the technical setup for the live demonstration discussed in the talk, including:**
* A simple TypeScript library representing classes that can be used for implementing a game of cards [src/cards.ts](./src/cards.ts).
* Unit tests (using Jest) that achieve 100% line coverage for this library [src/cards.spec.ts](./src/cards.spec.ts)
* Necessary NPM scripts

**The core demonstration, step-by-step walkthrough, and explanation of these concepts occur in the video of the Lightning Talk.** This repository provides the tangible code that was used as the basis for that demonstration.

## ✨ What this Setup is Designed to Illustrate (as shown in the talk):

* Executing standard unit tests to confirm 100% line coverage.
* Running the Stryker mutation testing tool against the codebase.
* Analyzing the Stryker report to identify "surviving mutants" – these highlight specific areas where the existing tests, despite providing full line coverage, are not actually robust enough to catch certain types of bugs.

## 🚀 Exploring the Code

* The TypeScript library can be found in [src/cards.ts](./src/cards.ts).
* Jest tests are located in [src/cards.spec.ts](./src/cards.spec.ts).
* Stryker configuration is in [stryker.conf.js](stryker.conf.js).
* To see the initial test results (line coverage): `npm run test`.
* To run mutation testing with Stryker: `npm run stryker`.
