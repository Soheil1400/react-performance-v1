import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import ColorChallenge from "./pages/ColorChallenge";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";


const router = createBrowserRouter([
    {
      element: <Home/>,
      path: '/'
    },
    {
        element: <ColorChallenge/>,
        path: '/color-challenge'
    },
    {
        element: <TodoList/>,
        path: '/todo-list'
    },
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
