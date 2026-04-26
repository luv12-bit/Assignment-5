# My Custom Hook Assignment: useFetch

This is my project for Assignment 5, where I learned how to create a custom React hook to simplify data fetching.

## What is this project?
In this project, I built a custom hook called `useFetch` that handles the repetitive logic of fetching data from an API. Instead of writing `fetch`, `useState`, and `useEffect` in every component that needs data, I can just use my hook.

## The useFetch Hook
Custom hooks are really useful because they let you "extract" component logic into reusable functions. 

In my `useFetch` hook:
- I used `useState` to keep track of the `data`, `loading` state, and any `error` messages.
- I used `useEffect` to trigger the fetch whenever the URL changes.
- I learned how to handle errors using `try...catch` and checking `response.ok`.

## Setup Instructions
To run this project locally, follow these steps:

1. Clone the repository or download the files.
2. Open your terminal in the project folder.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.
5. Open the link shown in the terminal (usually `http://localhost:5173`).

## API Choice
I used the **Platzi Fake Store API** (`https://api.escuelajs.co/api/v1/products`) because it provides real-looking product data with images, which made it easier to test if my grid was working correctly.

## Learning Process
While building this, I initially struggled with the `useEffect` dependency array, but I realized that putting the `url` in there ensures that if I ever want to fetch from a different endpoint, the hook will automatically update. I also added some `console.log` statements in the hook code to see exactly when the data comes back from the server.
