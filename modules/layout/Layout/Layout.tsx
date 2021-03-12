import React, { ReactNode } from 'react';
import Header from './Header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout with header and main content
 */
export default function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>
      <Header />
      <main>
        {children}
      </main>
    </div>;
}
