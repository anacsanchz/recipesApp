/*Images*/
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpeg';
import img3 from '../assets/5.jpeg';

const images = [img1, img2, img3];

const MoreRecipes = ({ alsoLike }) => {
  return (
    <div className="alsoLike">
      <h2 className="alsoTitle">you might also be interested in</h2>
      <div className="recipesBox">
        {alsoLike.map((likeRecipe, index) => (
          <div className="likeRecipe" key={index}>
            <img src={images[Math.floor(Math.random() * images.length)]} alt="" className='recipeImg' />
            <p className='recipeNameP'>{likeRecipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreRecipes;
