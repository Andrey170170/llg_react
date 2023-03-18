import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./roots/root";
import {Skills} from "./roots/Skills";
import {Resume} from "./roots/Resume";
import {AboutMe} from "./roots/AboutMe";

const router = createBrowserRouter([
    {
        path: "/llg_react/",
        element: <Root />,
        children: [
            {
                path: "/llg_react/",
                element: <AboutMe />,
            },
            {
                path: "/llg_react/skills",
                element: <Skills />,
            },
            {
                path: "/llg_react/resume",
                element: <Resume />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
