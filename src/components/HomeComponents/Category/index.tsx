import React, { useState } from 'react';
import Container from '../../CommonComponents/Container';
import { icons } from '../../../helpers/IconsProvider';

const Category: React.FC = () => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const orderItems: { id: number; name: string; icon: React.ReactNode }[] = [
    {
      id: 1,
      name: 'Track Order',
      icon: icons.location ?? null,
    },
    {
      id: 2,
      name: 'Compare',
      icon: icons.rotate ?? null,
    },
    {
      id: 3,
      name: 'Customer Support',
      icon: icons.headphone ?? null,
    },
    {
      id: 4,
      name: 'Need Help',
      icon: icons.help ?? null,
    },
  ];
  return (
    <>
      <Container>
        <div className="py-3! grid grid-cols-2 items-center">
          <div className="flex items-center gap-x-8">
            <div className="relative">
              <select
                name="category"
                id="category"
                className="px-8! py-4! body-small-500 bg-gray-50 text-gray-900 appearance-none rounded outline-none cursor-pointer"
                onClick={() => setCategoryOpen(!categoryOpen)}
              >
                <option value="Mobile" className="body-small-500 bg-gray-50">
                  All Category
                </option>
                <option value="Laptop" className="body-small-500 bg-gray-50">
                  Phone
                </option>
                <option value="Laptop" className="body-small-500 bg-gray-50">
                  Laptop
                </option>
                <option value="Tablet" className="body-small-500 bg-gray-50">
                  Tablet
                </option>
                <option value="Camera" className="body-small-500 bg-gray-50">
                  Camera
                </option>
                <option
                  value="Accessories"
                  className="body-small-500 bg-gray-50"
                >
                  Accessories
                </option>
              </select>
              <span className="absolute top-1/2 -translate-1/2 right-0">
                {categoryOpen ? icons.uparrow : icons.downarrow}
              </span>
            </div>
            {/* cart item */}
            <div className="flex items-center gap-x-5">
              {orderItems.map(item => (
                <div className="text-gray-600 body-small-400 flex items-center gap-x-1 cursor-pointer hover:text-warning-500 transition-all">
                  <span className="text-xl">{item.icon}</span>
                  <span className="body-small-400">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* contact */}
          <div className="flex items-center gap-x-3 justify-self-end">
            <span className="text-gray-900">{icons.call}</span>
            <span className="text-gray-900 body-large-400">
              +1-202-555-0104
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}

export default React.memo(Category) || Category;
