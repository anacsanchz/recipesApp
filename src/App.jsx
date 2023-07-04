import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './services/getData';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';

import Banner from './assets/img.jpg';
import './fonts/DMSans-Regular.ttf';
import './index.css';
import InProgress from './components/InProgress';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getData2 = async () => {
      const res = await getData();
      setRecipes(res);
    };
    getData2();
  }, []);

  useEffect(() => {
    if (selected?.label?.toLowerCase() === 'all') {
      console.log('fdf');
      const getData3 = async () => {
        const res = await getData();
        setRecipes(res);
      };
      getData3();
      return;
    }
    if (selected) {
      console.log(selected);
      const filtered = recipes.filter((recipe) =>
        recipe.tags.includes(selected.label.toLowerCase())
      );
      setRecipes(filtered);
      console.log(filtered);
    }
  }, [selected]);

  return (
    <>
      <InProgress />
      <Header setSelected={setSelected} />
      <img src={Banner} alt="" className="banner" />
      <Recipes recipes={recipes} />
      <Footer />
    </>
  );
}

export default App;
