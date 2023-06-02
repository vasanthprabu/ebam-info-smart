import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as FiIcons from 'react-icons/fi';

export const AuthSidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Logout',
    path: '/logout',
    icon: <FiIcons.FiLogOut />,
    cName: 'nav-text'
  }
];

export const NoAuthSidebarData = [
  {
    title: 'Brand',
    path: '/brand',
    icon: <FcIcons.FcAdvertising />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Up',
    path: '/signup',
    icon: <MdIcons.MdAppRegistration />,
    cName: 'nav-text'
  },
  {
    title: 'Sign In',
    path: '/signin',
    icon: <FaIcons.FaSignInAlt />,
    cName: 'nav-text'
  }
];
