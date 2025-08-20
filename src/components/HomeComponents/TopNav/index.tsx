import React, { useState } from 'react';
import Container from '../../CommonComponents/Container';
import { icons } from '../../../helpers/IconsProvider';

const TopNav: React.FC = () => {
  const [topNav] = useState([
    { icon: icons.twitter, link: 'https://twitter.com' },
    { icon: icons.facebook, link: 'https://facebook.com' },
    { icon: icons.pinterest, link: 'https://pinterest.com' },
    { icon: icons.reddit, link: 'https://reddit.com' },
    { icon: icons.youtube, link: 'https://youtube.com' },
    { icon: icons.instagram, link: 'https://instagram.com' },
  ]);

  return (
    <div className="bg-secondary-700 py-4!">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <h2 className="body-small-400 text-gray-00">
            Welcome to Clicon online eCommerce store.
          </h2>
          <div className="flex justify-end">
            <div className="flex gap-x-4 body-small-400 text-gray-00 items-center">
              Follow us:
              <div className="flex gap-x-3">
                {topNav.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-warning-500 cursor-pointer hover:scale-110 transition-all transform duration-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default React.memo(TopNav) || TopNav;
