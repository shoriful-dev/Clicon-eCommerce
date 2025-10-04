import React, { useState } from 'react';
import { assets } from '../../../helpers/AssetProvider';
import Container from '../../CommonComponents/Container';
import type { featureProduct } from '../../../types/fearuresProduct';
import { icons } from '../../../helpers/IconsProvider';
import Product from '../../CommonComponents/Product';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const FeaturesProduct: React.FC = () => {
  const queryClient = useQueryClient();
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
  const query = useQuery({ queryKey: ['featureProducts'], queryFn: () => {

  } });
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_3.7fr] h-[716px] gap-x-6">
          <div className='h-full'>
            <img
              src={assets.FeatureProductLeft}
              alt="Feature Left Banner Image"
              className="h-full w-full object-center rounded"
            />
          </div>
          <div className="grid grid-rows-[8%_90%] rounded! h-full">
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
            <div className="grid grid-cols-4 gap-4">
              {[...new Array(8)].map((_, index) => (
                <Product key={index}/>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default React.memo(FeaturesProduct);
