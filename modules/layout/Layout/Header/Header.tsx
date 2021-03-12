import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styles from './Header.module.scss';
import DesktopHeader from './DesktopHeader';
import { IHeaderItem } from './header.type';

/**
 * Header with the header menu items
 */
export default function Header() {
  const router = useRouter();

  const gotoCart = () => {
    router.push('/cartPage');
  };

  const initialHeaderMenus: Array<IHeaderItem> = [
    {
      title: 'Cart', onClick: gotoCart, display: true, icon: <ShoppingCartOutlinedIcon />,
    },
  ];

  const [headerMenu, setHeaderMenu] = useState([...initialHeaderMenus]);

  return (
    <div className={styles.header}>
      <DesktopHeader headerMenu={headerMenu} />
    </div>
  );
}
