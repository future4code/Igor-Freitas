import React from 'react'
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'




function App() {
  const token = localStorage.getItem('token')
  const [rightButtonText ,setRightButtonText] = useState(token ? 'Logout' : 'Login')
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
