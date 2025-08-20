import { FaPinterestP, FaReddit, FaRegHeart } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaUserAstronaut, FaYoutube, FaArrowsRotate, FaHeadphones } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp, IoIosHelpCircleOutline } from 'react-icons/io';
import { IoIosSearch } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhoneCall, LuShoppingCart } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';

type Icons = {
  [key: string]: React.ReactNode;
}

export const icons: Icons = {
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  pinterest: <FaPinterestP />,
  reddit: <FaReddit />,
  youtube: <FaYoutube />,
  instagram: <FaInstagram />,
  cart: <LuShoppingCart />,
  heart: <FaRegHeart />,
  user: <FaUserAstronaut />,
  search: <IoIosSearch />,
  location: <IoLocationOutline />,
  rotate: <FaArrowsRotate />,
  headphone: <FaHeadphones />,
  help: <IoIosHelpCircleOutline />,
  call: <LuPhoneCall />,
  rightarrow: <BsArrowRight />,
  downarrow: <IoIosArrowDown />,
  uparrow: <IoIosArrowUp />,
};
