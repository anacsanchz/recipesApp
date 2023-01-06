import axios from 'axios';

const getData = async () => {
  const { data } = await axios.get('recipes.json');
  return data.slice(0, 200);
};

export { getData }
