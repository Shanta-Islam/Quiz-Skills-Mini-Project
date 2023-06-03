import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainL from './layout/MainL';
import QuizTopics from './components/QuizTopics/QuizTopics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import NotFound from './components/NotFound/NotFound';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainL></MainL>,
      children: [
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <QuizTopics></QuizTopics>
        },
        {
          path: "/home",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <QuizTopics></QuizTopics>
        },
        {
          path: "statistics",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: "blog", 
          element: <Blog></Blog>
        },
        {
          path: "quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: "*",
          element: <NotFound></NotFound>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
