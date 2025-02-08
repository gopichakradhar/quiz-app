
# Quiz App

A minimalistic, gamified quiz application built with React that fetches quiz data from an external API. This project is designed with a clean, student-friendly interface featuring a countdown timer, real‑time scoreboard, and an option to exit the quiz early.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Overview

This Quiz App is a React‑based application that displays multiple-choice questions with instant visual feedback. Each question is timed; if the user fails to answer before time expires, a penalty is applied. The app displays the current score and question count in a header section and includes an "Exit Quiz" button to allow users to end the quiz early and view their final score.

**Important:** The quiz data is fetched dynamically from the external API endpoint at [https://api.jsonserve.com/MwKrGT](https://api.jsonserve.com/MwKrGT).

## Features

- **Dynamic Quiz Data:**  
  The quiz data is obtained live from an external API endpoint.

- **Multiple-Choice Questions:**  
  Displays questions with four answer options and provides immediate feedback.

- **Countdown Timer:**  
  A 15‑second timer for each question. If time expires, a penalty is applied, and the next question loads automatically.

- **Scoreboard:**  
  Displays the current score and question progress (e.g., "Question: 2 / 10").

- **Exit Button:**  
  Allows users to exit the quiz at any time. The quiz ends immediately and shows the final score, marking remaining questions as unattempted.

- **Modular Design:**  
  The code is organized into separate components and CSS files for maintainability and clarity.

## Project Structure

```
quiz-app/
├── public/
│   ├── index.html        // Main HTML file that loads global CSS (main.css)
│   └── main.css          // Global styles for index.html (resets, base styling)
├── src/
│   ├── components/
│   │   ├── Quiz.js       // Main quiz component handling data fetch, state, and quiz flow
│   │   ├── QuestionCard.js  // Displays individual questions and answer options
│   │   ├── Timer.js      // Countdown timer component for each question
│   │   ├── Quiz.css      // Styles specific to the Quiz component
│   │   ├── QuestionCard.css  // Styles for the question card component
│   │   ├── Timer.css     // Styles for the timer display
│   │   └── Summary.css   // Styles for the summary screen (final score)
│   ├── App.js            // Root component that toggles between start, quiz, and summary screens
│   ├── App.css           // Global styles for overall layout and start screen
│   ├── index.js          // Entry point that renders the App component
│   └── index.css         // Additional global styles for the React app
├── package.json          // Project metadata and dependencies
└── README.md             // This file
```

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (bundled with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Gopi1603/quiz-app.git
   cd quiz-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application in Development Mode:**

   ```bash
   npm start
   ```

   The app should open in your browser at [http://localhost:3000](http://localhost:3000).

### Using the External API

This project fetches quiz data from the external API endpoint at [https://api.jsonserve.com/MwKrGT](https://api.jsonserve.com/MwKrGT). In the code (in **src/components/Quiz.js**), the API URL is set as:

```jsx
const QUIZ_API = 'https://api.jsonserve.com/MwKrGT';
```

If you encounter CORS issues when fetching from this endpoint, you may need to use a proxy solution.

## Usage

- **Starting the Quiz:**  
  Click the “Start Quiz” button on the welcome screen.

- **Answering Questions:**  
  Each question displays multiple options. Click an option to receive immediate feedback (Correct! or Wrong!) and see your score update.

- **Timer:**  
  A countdown timer (15 seconds by default) is shown for each question. If time expires, a penalty is applied and the next question loads automatically.

- **Exiting the Quiz:**  
  Click the “Exit Quiz” button to end the quiz at any time. The quiz will stop immediately and display your final score.

## Deployment

To create a production build, run:

```bash
npm run build
```

This generates a **build** folder containing the static assets of your React app. You can deploy these files to any static hosting service.

For example, I deploy my small project assignments via GitHub Pages and other hosting platforms. You can view the deployed quiz app at:
[https://quiz-nrncd84oh-gopichakradhars-projects.vercel.app/](https://quiz-nrncd84oh-gopichakradhars-projects.vercel.app/) *(if applicable)*

The source code is hosted on my GitHub repository:  
[https://github.com/Gopi1603](https://github.com/Gopi1603)
