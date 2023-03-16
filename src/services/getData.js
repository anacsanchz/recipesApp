import axios from 'axios';

const getData = async (limit = 200) => {
  const { data } = await axios.get('../recipes.json');
  return data.slice(0, limit);
};

export { getData };
