import React from 'react';
import Container from '../../CommonComponents/Container';
import { assets } from '../../../helpers/AssetProvider';
// import Slider from '../../CommonComponents/Slider';

const ShopByCategory: React.FC = () => {
  return (
    <>
      <div className="mt-10!">
        <Container>
          <div className="grid justify-center">
            <h1 className="heading1 text-gray-900">Shop with Categorys</h1>
          </div>
          {/* slider category */}
          <div className="py-10!">
            <div className="border border-gray-100 py-5! rounded">
              <img src={assets.shopImage1} alt="" />
              <h1 className='body-medium-500 text-gray-900'>Computer & Laptop</h1>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default React.memo(ShopByCategory);
