import React from 'react';
import { assets } from '../../helpers/AssetProvider';

const Product: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-100 border border-gray-500">
        <img src={assets.mobile} alt="Mobile" />
        {/* rating */}
        
      </div>
    </div>
  )
}

export default React.memo(Product);
