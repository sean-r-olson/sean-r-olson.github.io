import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import './App.css';
import Layout from './Layout/Layout';

const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Major Mono Display',
  },
}));

theme.typography.h5 = {
  fontFamily: 'Major Mono Display',
  '@media (min-width:0px)': {
    fontSize: '1rem',
    fontWeight: '300',
  },
  '@media (min-width:600px)': {
    fontSize: '1.1rem',
    fontWeight: '300',
  },
  '@media (min-width:900px)': {
    fontSize: '1.2rem',
    fontWeight: '300',
  },
  '@media (min-width:1200px)': {
    fontSize: '1.3rem',
    fontWeight: '300',
  },
  '@media (min-width:1536px)': {
    fontSize: '1.4rem',
    fontWeight: '300',
  },
};

theme.typography.h6 = {
  fontFamily: 'Major Mono Display',
  '@media (min-width:0px)': {
    fontSize: '0.9rem',
    fontWeight: '300',
  },
  '@media (min-width:600px)': {
    fontSize: '1rem',
    fontWeight: '300',
  },
  '@media (min-width:900px)': {
    fontSize: '1.1rem',
    fontWeight: '300',
  },
  '@media (min-width:1200px)': {
    fontSize: '1.2rem',
    fontWeight: '300',
  },
  '@media (min-width:1536px)': {
    fontSize: '1.3rem',
    fontWeight: '300',
  },
};

theme.typography.body1 = {
  fontFamily: 'Roboto Mono',
  '@media (min-width:0px)': {
    fontSize: '0.7rem',
    fontWeight: '200',
  },
  '@media (min-width:600px)': {
    fontSize: '0.8rem',
    fontWeight: '200',
  },
  '@media (min-width:900px)': {
    fontSize: '0.9rem',
    fontWeight: '200',
  },
  '@media (min-width:1200px)': {
    fontSize: '1rem',
    fontWeight: '200',
  },
  '@media (min-width:1536px)': {
    fontSize: '1.1rem',
    fontWeight: '200',
  },
};

theme.typography.body2 = {
  fontFamily: 'Roboto Mono',
  fontSize: '16px',
}




const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
