import React, { useState } from 'react';
import { assets } from '../../../helpers/AssetProvider';
import Container from '../../CommonComponents/Container';

const FeaturesProduct: React.FC = () => {
  const [featuresProductList] = useState([
    {
      id: 1,
      name: 'All Product',
      slug: 'all-product',
    },
    {
      id: 2,
      name: 'Smart Phone',
      slug: 'smart-phone',
    },
    {
      id: 3,
      name: 'Laptop',
      slug: 'laptop',
    },
    {
      id: 4,
      name: 'Headphone',
      slug: 'headphone',
    },
    {
      id: 5,
      name: 'TV',
      slug: 'tv',
    },
  ]);
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_3fr] py-10! gap-x-5">
          <div className="">
            <img
              src={assets.FeatureProductLeft}
              alt="Feature Left Banner Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-[0.5fr_4fr] rounded border">
            <div className="grid grid-cols-[1fr_1fr]">
              <h2 className="heading3 text-gray-900">Featured Products</h2>
              <div className="justify-self-end">
                <ul className='flex items-center gap-x-5'>
                  <li>All Product</li>
                  <li>Smart Phone</li>
                  <li>Laptop</li>
                  <li>Headphone</li>
                  <li>TV</li>
                </ul>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default React.memo(FeaturesProduct);
