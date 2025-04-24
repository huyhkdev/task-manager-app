# Task Manager App
Built with React, TypeScript, and Redux Toolkit.

## Features

- Create new tasks with title, description, priority, and due date
- Update existing tasks
- Delete tasks
- Filter tasks by status (All, In Progress, Completed)
- Responsive design with Tailwind CSS
- Data persistence using localStorage
- Modern UI components with animations

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- Vite for build tooling
- Jest and React Testing Library for testing

## Prerequisites

- Node.js (v18 or higher)
- yarn

## Setup Instructions

1. Install dependencies:
```bash
yarn
```

2. Start the development server:
```bash
yarn dev
```

3. Run the unit test:
```bash
yarn test
```
4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── app/          # App configuration (store, hooks)
├── pages/        # Page components
├── widgets/      # Reusable UI components
├── helpers/      # Helper functions
└── utils/        # Utility functions
```