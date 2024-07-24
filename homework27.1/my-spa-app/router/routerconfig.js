import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../src/components/ErrorBoundary";
import HomePage from "../src/components/HomePage";
import ContactsPage from "../src/components/ContactsPage";
import AboutPage from "../src/components/AboutPage";


const routerConfig = [
  {
    path: "/",
    id: "app",
    children: [
      { index: true, element: HomePage() }
    ]
  },
  {
    path: "/contacts",
    id: "contacts",
    children: [
      { index: true, element: ContactsPage() }
    ]
  },
  {
    path: "/about",
    id: "about",
    children: [
      { index: true, element: AboutPage() }
    ]
  },
  {
    path: "*",
    errorElement: new ErrorBoundary(),
  },
];

export const router = createBrowserRouter(routerConfig);

