import { useParams } from 'react-router-dom';
import { getRecipeDetail } from '../services/getRecipeDetail';
import { useEffect, useState } from 'react';

import { BiTime } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import Layout from '../layout/layout';
import './styles/recipe.css';

/*Images*/
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpeg';
import icons from '../assets/recipe-icons.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Recipe = () => {
  let { id } = useParams();

  const [recipeDetail, setRecipeDetail] = useState(null);
  useEffect(() => {
    const data = async () => {
      const res = await getRecipeDetail(id);
      setRecipeDetail(res);
    };
    data();
  }, []);

  // console.log(recipeDetail.ingredients);
  if (!recipeDetail) {
    return <h1>No se encontrol</h1>;
  }

  return (
    <Layout>
      <div className="recipeContainer">
        <h1 className="title">{recipeDetail.name}</h1>
        <img src={images[Math.floor(Math.random() * images.length)]} className="detailImg" alt="" />
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
            {recipeDetail.ingredients.map((ingredient) => (
              <table className="ingredientsTable">
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
    </Layout>
  );
};

export default Recipe;
