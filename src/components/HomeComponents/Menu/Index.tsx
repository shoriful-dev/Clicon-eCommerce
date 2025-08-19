import React from 'react';
import Container from '../../CommonComponents/Container';
import { assets } from '../../../helpers/AssetProvider';
import Search from '../../CommonComponents/Search';
import { icons } from '../../../helpers/IconsProvider';

const Menu: React.FC = () => {
  return (
    <>
      <div className="bg-secondary-700 py-4! border-t border-t-gray-500">
        <Container>
          <div className="grid grid-cols-3 items-center">
            <img src={assets.logo} alt={assets.logo} />
            {/* Search */}
            <Search className="relative">
              <input
                type="search"
                name="search"
                placeholder="Search for anithing...."
                className="bg-gray-00 w-full body-small-400 rounded py-3! outline-none text-gray-500 px-4! pr-12!"
              />
              <span className="text-gray-900 text-xl absolute top-3 right-4">
                {icons.search}
              </span>
            </Search>
            {/* cart button */}
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-x-5">
                <span className="relative text-gray-00 text-2xl">{icons.cart} <span className='absolute -top-2 -right-2 bg-gray-00 text-gray-900 text-xs font-bold rounded-full px-1.5! py-0.5! border border-secondary-700'>3</span></span>
                <span className="text-gray-00 text-2xl">{icons.heart}</span>
                <span className="text-gray-00 text-2xl">{icons.user}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Menu;
