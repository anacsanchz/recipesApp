import './styles/sidebar.css';
import { useNavigate } from 'react-router-dom';

/*Images*/
import img1 from '../assets/img11.jpeg';
import img2 from '../assets/img12.jpeg';
import img3 from '../assets/img13.jpeg';

import banner1 from '../assets/sidebar-banner1.jpg';
import banner2 from '../assets/sidebar-banner2.jpg';

const images = [img1, img2, img3];

const Sidebar = ({ latestRecipes }) => {
  
  const navigate = useNavigate();

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="sideContainer">
      <div className="sideTitle">LATEST RECIPES</div>
      <div className="latestRecipes">
        {latestRecipes.map((lastRecipe, index) => (
          <div className="lastRecipe" key={lastRecipe.id}>
            <div className="lastContainer">
              <div className="lastImg">
                <img src={images[Math.floor(Math.random() * images.length)]} alt="" width={150} />
              </div>
              <div className="lastText">
                <p className="lastRecipeName" onClick={() => goToRecipe(lastRecipe.id)}>{lastRecipe.name}</p>
                <p className="lastRecipeCalories">March 12, 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
