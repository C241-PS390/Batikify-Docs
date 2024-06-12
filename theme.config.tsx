import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/PinKevin/Docs-Test',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Batikify',
      };
    }
  },
  head: (
    <>
      <link type="images/png" href="assets/logo_full_white.png" rel="icon"></link>
    </>
  ),
  logo: (
    <>
      <img
        src="assets/logo_full_white.png"
        alt=""
        width={50}
        height={50}
        style={{ borderRadius: 10 }}
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800, fontSize: 20 }}>Batikify</span>
    </>
  ),
  project: {
    link: 'https://github.com/C241-PS390',
  },
  banner: {
    key: 'deve',
    dismissible: true,
    text: (
      <a href="https://github.com/C241-PS390" target="_blank">
        ⚠ Batikify is under development. Click to see details →
      </a>
    ),
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <>
        Menyalah Abangkuuu 🔥
        <br />
        Made with Full of 💖 by Team C241-PS390
      </>
    ),
  },
};

export default config;
