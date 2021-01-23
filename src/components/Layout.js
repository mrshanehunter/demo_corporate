import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { theme } from '../styles/Theme';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { useOnClickOutside } from '../Hook'



export default function Layout({children}) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return(
  
    <ThemeProvider theme={theme}>
      <>    
      <GlobalStyles />
      <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      </div>
              {children}
      
        
      </>
      </ThemeProvider>   

  );
}
