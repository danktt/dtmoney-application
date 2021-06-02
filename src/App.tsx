import React from 'react'
import styled from 'styled-components'
import { Dashboard } from './components/Dashbord';
import { Header } from './components/Hender';
import { GlobalStyle } from './styles/global'


function App() {
  return (
    <>
    <Header />
    <Dashboard />
    <GlobalStyle />
    </>
  );
}

export default App;
