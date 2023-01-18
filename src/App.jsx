import React from 'react';
import Layout from './layout/layout';
import Recipes from './components/Recipes';


import Banner from './assets/img.jpg'
import './fonts/DMSans-Regular.ttf'
import './index.css'

function App() {
  return (
    <Layout>
      <img src={Banner} alt="" className='banner' />
      <Recipes />
    </Layout>
  );
}

export default App;
