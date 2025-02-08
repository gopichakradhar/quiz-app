
# Quiz App

A minimalistic, gamified quiz application built with React that fetches quiz data from an external API. This project is designed with a clean, student-friendly interface featuring a countdown timer, real‑time scoreboard, and an option to exit the quiz early.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Deployment](#deployment)
- [Notes](#notes)
- [License](#license)

## Overview

This Quiz App is a React‑based application that displays multiple-choice questions with instant visual feedback. Each question is timed; if the user fails to answer before time expires, a penalty is applied. The app displays the current score and question count in a header section, and also includes an "Exit Quiz" button to allow users to end the quiz early and view their final score.

**Important:** The quiz data is not hosted as a local static JSON file; instead, it is fetched dynamically from the external API endpoint at [https://api.jsonserve.com/MwKrGT](https://api.jsonserve.com/MwKrGT).

## Features

- **Dynamic Quiz Data:**  
  Fetches live quiz data from the external API endpoint.

- **Multiple-Choice Questions:**  
  Presents quiz questions with four answer options and immediate feedback.

- **Timer:**  
  A countdown timer for each question. If time expires, a penalty is applied and the next question is automatically loaded.

- **Scoreboard:**  
  Displays the current score and question progress (e.g., "Question: 2 / 10").

- **Exit Button:**  
  Allows users to exit the quiz early. When clicked, the quiz ends immediately and displays the final score, marking remaining questions as unattempted.

- **Modular Design:**  
  Code is organized into separate components and CSS files for improved maintainability and clarity.

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
└── README.md             // This README file
```

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (bundled with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/quiz-app.git
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

This project fetches quiz data from the external API endpoint at [https://api.jsonserve.com/MwKrGT](https://api.jsonserve.com/MwKrGT). In the code (e.g., in **src/components/Quiz.js**), the API URL is set as:

```jsx
const QUIZ_API = 'https://api.jsonserve.com/MwKrGT';
```

If you encounter CORS issues when fetching from this endpoint, consider using a server‑side proxy (see the [Notes](#notes) section).

## Usage

- **Starting the Quiz:**  
  Click the “Start Quiz” button on the welcome screen.

- **Answering Questions:**  
  Each question displays multiple options. Click an option to receive immediate feedback (Correct! or Wrong!) and see your score update.

- **Timer:**  
  A countdown timer (15 seconds by default) is shown for each question. If time expires, a penalty is applied and the app automatically loads the next question.

- **Exiting the Quiz:**  
  Click the “Exit Quiz” button at any time to end the quiz immediately. The final score is then displayed.

## Deployment

To create a production build, run:

```bash
npm run build
```

This generates a **build** folder containing your static assets. You can deploy these files to any static hosting service (e.g., Netlify, Vercel, GitHub Pages). If you need to use a server‑side proxy for the external API in production, consider setting up an Express server.

## Notes

- **CORS Considerations:**  
  The external API at [https://api.jsonserve.com/MwKrGT](https://api.jsonserve.com/MwKrGT) might not return the required CORS headers. If you experience “Failed to load quiz data” errors due to CORS, you may need to use a proxy:
  - **For Development:** Add a proxy setting in your package.json or use a public CORS proxy.
  - **For Production:** Implement a server‑side proxy (e.g., using Express) so your app fetches the data from your own domain.

- **Dynamic Data:**  
  Since the quiz data is fetched from an API, any updates at the source will be reflected in your app (as long as caching is managed appropriately).
