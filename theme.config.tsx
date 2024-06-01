import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from './components/navbar.module.css'


const config: DocsThemeConfig = {
  faviconGlyph: 'BF',
  useNextSeoProps() {
    return {
      titleTemplate: 'Batikify'
    }
  },
  logo: <>
    <span>Batikify</span>
    <div className={styles.navbar}>
      v0.1
    </div>
  </>,
  project: {
    link: 'https://github.com/C241-PS390',
  },
  chat: {
    link: 'https://discord.gg/KmRHwTHm',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <>
        Menyalah Abangkuuu 🔥
        <br />
        Made with Full of 💖 by Team C241-PS390
      </>
    ),
  },
}

export default config
