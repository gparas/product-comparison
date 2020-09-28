import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { NavBar, Footer } from '../../components';

const MainLayout = () => {
  return (
    <>
      <NavBar color="secondary" position="relative" />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
