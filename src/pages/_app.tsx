import '@/styles/globals.css'
import '@/styles/fonts/iconfont/iconfont.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {


  // 主题色的切换
  let [theme,setTheme]= useState("light")
  const toogleTheme = ()=>{
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  
  return(
    <div className={theme}>
      {/* <button onClick={toogleTheme} style={{marginTop:100}}>切换</button> */}
      <Component {...pageProps} />
      <div id="mask"></div>
    </div>
  )
}
