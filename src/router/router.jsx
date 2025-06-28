
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../layouts/Rootlayout';
import Home from '../pages/home/Home';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'projects',
        Component: Projects,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
]);

