import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { store } from './app/store'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7aa2f7', light: '#a8c0ff', dark: '#547bcf' },
    success: { main: '#5bb98c' },
    background: { default: '#10151d', paper: '#171e28' },
    text: { primary: '#edf2f8', secondary: '#9aa9ba' },
    divider: 'rgba(158, 177, 200, 0.14)',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h3: { fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.035em' },
    h4: { fontSize: '1.35rem', fontWeight: 650, letterSpacing: '-0.02em' },
    h5: { fontSize: '1.06rem', fontWeight: 650, letterSpacing: '-0.012em' },
    h6: { fontSize: '1rem', fontWeight: 650, lineHeight: 1.4 },
    subtitle2: { fontWeight: 650 },
  },
  components: {
    MuiCard: { styleOverrides: { root: { backgroundColor: 'rgba(23, 30, 40, 0.78)', backgroundImage: 'none', border: '1px solid rgba(184, 202, 224, 0.14)', boxShadow: '0 10px 28px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(14px)' } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 8, fontWeight: 650, textTransform: 'none', boxShadow: 'none' }, contained: { '&:hover': { boxShadow: '0 7px 18px rgba(72, 111, 181, 0.25)' } } } },
    MuiTextField: { defaultProps: { size: 'small' } },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
