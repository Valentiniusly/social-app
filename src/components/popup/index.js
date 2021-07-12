import React, { useEffect } from 'react';
import { Layout, Container } from './styles/popup';

export default function Popup({ close, children, ...restProps }) {
  const escClosePopup = (e) => {
    if (e.key === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', escClosePopup);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', escClosePopup);
      document.documentElement.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <Layout
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            close();
          }
        }}
      >
        <Container {...restProps}>{children}</Container>
      </Layout>
    </>
  );
}
