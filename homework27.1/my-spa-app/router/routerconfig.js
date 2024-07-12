import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary, HomePage, ContactsPage, AboutPage } from "../src/components";

const routerConfig = [
  {
    path: "/",
    id: "app",
    children: [
      { index: true, element: <HomePage /> }
    ]
  },
  {
    path: "/contacts",
    id: "contacts",
    children: [
      { index: true, element: <ContactsPage /> }
    ]
  },
  {
    path: "/about",
    id: "about",
    children: [
      { index: true, element: <AboutPage /> }
    ]
  },
  {
    path: "*",
    errorElement: <ErrorBoundary />,
  },
];

export const router = createBrowserRouter(routerConfig);
