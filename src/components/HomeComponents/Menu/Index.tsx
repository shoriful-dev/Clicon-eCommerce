import React from 'react';
import Container from '../../CommonComponents/Container';
import { assets } from '../../../helpers/AssetProvider';

const Menu: React.FC = () => {
  return (
    <>
      <div className="bg-secondary-700 py-4! border-t border-t-gray-500">
        <Container>
          <div className="grid grid-cols-3 items-center">
            <img src={assets.logo} alt={assets.logo} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Menu;
