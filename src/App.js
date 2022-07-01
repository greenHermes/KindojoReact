import React from 'react';
import Nav from './components/nav'
import Home from './pages/home'
import Classes from './pages/classes'
import Booking from './components/booking'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'
import Route from './components/Route'
import { Container } from '@mui/material';




function App() {

  return (<>


    <Nav/>

        <Route path='/'>
      <Container sx={{py:0, backgroundColor: '#212121'}}>
          <Home/>
        </Container>
        </Route>

        
      <Container sx={{py:4, backgroundColor: '#212121'}}>
        <Route path='/classes'>
          <Classes />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/booking'>
          <Booking />
        </Route>
      </Container>
  

      <Container sx={{pt:9, pb: 9, backgroundColor: '#212121'}}>
        <Route path='/contact'>
          <Contact />
        </Route> 
      </Container>

    <Footer/>
  </>
  );
}

export default App;
