import { defineConfig } from 'vitepress'
import { themeConfig } from './themeConfig'
import { viteConfig } from './viteConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Global EV Data",
  description: "An open electric vehicle data initiative for sharing the latest and historical information on the electric vehicle market, policy and charging infrastructure across the globe.",
  themeConfig: themeConfig,
  base: '/EVChargerSite/',
  vite: viteConfig,
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4706EZS57W' }
    ],
    [
      'script',
      {},
      `  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4706EZS57W');`
    ]
  ]})