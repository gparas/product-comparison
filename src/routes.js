import React from 'react';
import { MainLayout } from './layouts';
import { Home, Category, SubCategory } from './pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      { path: 'category', element: <Category /> },
      { path: 'subcategory', element: <SubCategory /> },
    ],
  },
];

export default routes;
