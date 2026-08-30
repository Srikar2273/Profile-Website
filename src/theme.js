import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f7a73'
    },
    secondary: {
      main: '#c07f32'
    },
    text: {
      primary: '#132631',
      secondary: '#4e626d'
    },
    background: {
      default: '#eef2f1',
      paper: '#ffffff'
    }
  },
  shape: {
    borderRadius: 14
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    button: {
      fontWeight: 700,
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 16,
          paddingBlock: 10,
          transition: 'all 180ms ease'
        },
        contained: {
          boxShadow: '0 12px 22px rgba(15, 122, 115, 0.22)',
          '&:hover': {
            boxShadow: '0 16px 28px rgba(15, 122, 115, 0.26)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10
        }
      }
    }
  }
});

export default theme;
