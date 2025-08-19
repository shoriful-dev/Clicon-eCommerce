import React from 'react';

type PropTypes = {
  children: React.ReactNode;
  className?: string;
};

const Search: React.FC<PropTypes> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Search;
