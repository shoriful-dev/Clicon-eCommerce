import React from 'react';

const ProductSkeleton: React.FC = () => {
  return (
    <div className="h-full animate-pulse">
      <div className="max-w-[300px] p-4 border border-gray-100 rounded relative shadow">
        {/* Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 rounded w-[202px] h-[172px]" />
        </div>

        <div className="pt-4">
          {/* Rating Placeholder */}
          <div className="flex items-center gap-x-2 mt-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="w-4 h-4 bg-gray-200 rounded" />
              ))}
            </div>
            <div className="w-10 h-4 bg-gray-200 rounded" />
          </div>

          {/* Title */}
          <div className="h-5 bg-gray-200 rounded w-3/4 my-2" />
          {/* Description */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />

          {/* Price */}
          <div className="flex items-center gap-x-2">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Hot Deal Label */}
        <div className="absolute top-2 left-2 bg-gray-200 py-1 px-3 rounded w-20 h-5" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
