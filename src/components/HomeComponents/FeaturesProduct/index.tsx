import React, { useState } from 'react';
import { assets } from '../../../helpers/AssetProvider';
import Container from '../../CommonComponents/Container';
import type { featureProduct } from '../../../types/fearuresProduct';
import { icons } from '../../../helpers/IconsProvider';

const FeaturesProduct: React.FC = () => {
  const [featuresProductList] = useState<featureProduct[]>([
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
                <div className="flex items-center gap-x-8">
                  <ul className="flex items-center gap-x-4">
                    {featuresProductList?.map(item => (
                      <li
                        key={item.id}
                        className="body-small-400 text-gray-600 customStyle"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-x-2 text-primary-500">
                    Browse All Product{' '}
                    <span className="mt-1! body-small-600 text-[17px]!">
                      {icons.rightarrow}
                    </span>
                  </button>
                </div>
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
