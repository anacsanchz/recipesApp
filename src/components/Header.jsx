import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { getCategories } from '../services/getCategories';
import './styles/header.css';

const Header = ({setSelected}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const categories = async () => {
      const res = await getCategories();
      setOptions(res);
    };
    categories();
  }, []);

  // console.log(options);

  const defaultOption = options[0];

  return (
    <div className="header">
      <div>
        <a href="/">
          <span className="appName">RecipesApp</span>
        </a>
      </div>
      <div className="headerMenu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Dropdown
              options={options}
              onChange={setSelected}
              value={'Categories'}
              placeholder="Categories"
              arrowClosed={<IoIosArrowDown />}
              arrowOpen={<IoIosArrowUp />}
            />
          </li>
          <li>
            <a href="">Favorites</a>
          </li>
        </ul>
        <div className="searchForm">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
