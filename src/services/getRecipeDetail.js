import axios from 'axios';

const getRecipeDetail = async (id) => {
  const { data } = await axios.get('../recipes.json');
  return data.find((recipe) => recipe.id === id);
};

export { getRecipeDetail }
