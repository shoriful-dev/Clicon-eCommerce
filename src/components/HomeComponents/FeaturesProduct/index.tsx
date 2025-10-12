import React, { useState } from 'react';
import { assets } from '../../../helpers/AssetProvider';
import Container from '../../CommonComponents/Container';
import { icons } from '../../../helpers/IconsProvider';
import Product from '../../CommonComponents/Product';
import { useQuery } from '@tanstack/react-query';
import { GetFeaturesProduct } from '../../../api/FeatureProduct';
import { categoryWiseData, getCategoryData } from '../../../api/Category';

const FeaturesProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['featureProduct'],
    queryFn: GetFeaturesProduct,
  });

  const { data: categoryData } = useQuery({
    queryKey: ['category'],
    queryFn: getCategoryData,
  });

  const {
    data: categoryProduct,
    isError: categoryError,
    isPending: categoryPending,
    error: categoryErrorData,
  } = useQuery({
    queryKey: ['categoryWiseProduct', selectedCategory],
    queryFn: () => categoryWiseData(selectedCategory),
    enabled: !!selectedCategory,
  });

  const handleCategory = (item: string) => {
    setSelectedCategory(item);
  };
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_3.7fr] h-[716px] gap-x-6 mb-20!">
          <div className="h-full">
            <img
              src={assets.FeatureProductLeft}
              alt="Feature Left Banner Image"
              className="h-full w-full object-center rounded"
            />
          </div>
          <div className="grid grid-rows-[8%_90%] rounded! h-full">
            <div className="grid grid-cols-[1fr_4fr]">
              <h2 className="heading3 text-gray-900">Featured Products</h2>
              <div className="justify-self-end mt-1!">
                <div className="flex items-center gap-x-8">
                  <ul className="flex items-center gap-x-4">
                    {categoryData?.slice(0, 7).map((item, index) => (
                      <li
                        onClick={() => handleCategory(item)}
                        key={index}
                        className="text-gray-600 capitalize body-medium-500 customStyle"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-x-2 text-primary-500 cursor-pointer">
                    Browse All Product
                    <span className="mt-1! body-small-600 text-[17px]!">
                      {icons.rightarrow}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Product
                status={
                  selectedCategory === 'all'
                    ? {
                        isPending,
                        isError,
                        data: { products: data?.products },
                        error,
                      }
                    : {
                        isPending: categoryPending,
                        isError: categoryError,
                        data: { products: categoryProduct?.products },
                        error: categoryErrorData,
                      }
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default React.memo(FeaturesProduct);
