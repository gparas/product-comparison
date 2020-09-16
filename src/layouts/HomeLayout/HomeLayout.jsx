import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components';

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
