import React from 'react';
import { HomeLayout, MainLayout } from './layouts';
import { Home, Category, SubCategory } from './pages';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'category', element: <Category /> },
      { path: 'subcategory', element: <SubCategory /> },
    ],
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
];

export default routes;
