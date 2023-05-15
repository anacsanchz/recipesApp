import './styles/recipes.css';
import { BiTime } from 'react-icons/bi';
import { AiFillTag, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Recipes = ({recipes}) => {

  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/recipe/${id}`);
  };
  //   console.log(recipes);
  return (
    <div className="container">
      <div className="recipes">
        <div className="title">All Recipes</div>
        <div className="all">
          {recipes.map((recipe, index) => (
            <div className="recipe" key={recipe.id}>
              <img src={images[Math.floor(Math.random() * images.length)]} className="img" alt="" />
              <div className="recipeInfo">
                <p className="calories">Calories: {recipe.calories}</p>
                <p className="preptime">
                  <span className="icon">
                    <BiTime />
                  </span>{' '}
                  {recipe.preptime} minutes
                </p>
              </div>
              <a className="recipeName" href="" onClick={() => goToDetail(recipe.id)}>
                {recipe.name}
              </a>
              <div className="tags">
                <p className="tagsLine">
                  <span className="icon">
                    <AiFillTag />
                  </span>
                  Tags: {recipe.tags.slice(0, 3).join(', ')}
                </p>
              </div>
              <div className="favorite">
                <AiOutlineHeart className="heartLine" />
                <AiFillHeart className="heartFill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
