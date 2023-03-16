import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../services/getRecipeDetail';
import { useEffect, useState } from 'react';

import { BiTime } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import Layout from '../layout/layout';
import Sidebar from './Sidebar';
import './styles/recipe.css';

/*Images*/
import img1 from '../assets/img11.jpeg';
import img2 from '../assets/img12.jpeg';
import img3 from '../assets/img13.jpeg';

import icons from '../assets/recipe-icons.jpg';
import { getData } from '../services/getData';

const images = [img1, img2, img3];

const Recipe = () => {
  let { id } = useParams();

  const [recipeDetail, setRecipeDetail] = useState(null);
  const [latestRecipes, setLatestRecipes] = useState(null);

  useEffect(() => {
    const data = async () => {
      const res = await getRecipeDetail(id);
      setRecipeDetail(res);
    };
    data();
  }, []);

  useEffect(() => {
    const getLatest = async () => {
      const res = await getData(5);
      setLatestRecipes(res);
    };

    getLatest();
  }, []);

  // console.log(recipeDetail.ingredients);
  if (!recipeDetail) {
    return <h1>No se encontro</h1>; /*Hacer Loading*/
  }

  return (
    <Layout>
      <div className="recipeLayout layout">
        <div className="recipeContainer">
          <h1 className="title">{recipeDetail.name}</h1>
          <img
            src={images[Math.floor(Math.random() * images.length)]}
            className="detailImg"
            alt=""
          />
          <div className="recipeBox">
            <div className="recipeInfo">
              <p className="preptime">Preptime: {recipeDetail.preptime} minutes</p>
            </div>
            <p className="detailTagsLine">
              <span className="icon">
                <AiFillTag />
              </span>
              Tags: {recipeDetail.tags.join(', ')}
            </p>
            <div className="info">
              <h2>Ingredients:</h2>
              {recipeDetail.ingredients.map((ingredient, index) => (
                <table className="ingredientsTable" key={index}>
                  <tbody>
                    <tr>
                      <td>
                        {ingredient}
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
            <br />
            <img src={icons} alt="" className="icons-img" />
            <div className="info">
              <h2>Instructions:</h2>
              {recipeDetail.instructions}
            </div>
            <div>
              <table className="tableInfo">
                <tbody>
                  <tr>
                    <td className="tableTitle">Nutritional Information</td>
                    <td>
                      <span>{recipeDetail.fiber}g</span>
                      <p>Fiber</p>
                    </td>
                    <td>
                      <span>{recipeDetail.fat}g</span>
                      <p>Fat</p>
                    </td>
                    <td>
                      <span>{recipeDetail.protein}g</span>
                      <p>Protein</p>
                    </td>
                    <td>
                      <span>{recipeDetail.sugar}g</span>
                      <p>Sugar</p>
                    </td>
                    <td>
                      <span>{recipeDetail.calories}g</span>
                      <p>Calories</p>
                    </td>
                    <td>
                      <span>{recipeDetail.carbs}g</span>
                      <p>Carbs</p>
                    </td>
                    <td>
                      <span>{recipeDetail.fat}g</span>
                      <p>Trans fat</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <Sidebar latestRecipes={latestRecipes} />
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
