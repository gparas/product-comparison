import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { NavBar } from '../../components';

const MainLayout = () => {
  return (
    <>
      <NavBar position="relative" />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
