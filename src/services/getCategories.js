import axios from 'axios';

const getCategories = async () => {
  const { data: categories } = await axios.get('../categories.json');

  return categories.map((category) => {
      const lower = category.name.toLowerCase()
      return {
          ...category, 
          label: category.name.charAt(0).toUpperCase() + lower.slice(1),
          value: category.id
      }
  })
};

export { getCategories };
