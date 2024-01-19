import { createTheme } from '@mui/material/styles';
import PoppinsBold from '../assets/fonts/PoppinsBold.ttf';
import PoppinsLight from '../assets/fonts/PoppinsLight.ttf';
import PoppinsMedium from '../assets/fonts/PoppinsMedium.ttf';
import PoppinsRegular from '../assets/fonts/PoppinsRegular.ttf';
import PoppinsSemiBold from '../assets/fonts/PoppinsSemiBold.ttf';

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

const poppinsBold = {
  fontFamily: 'PoppinsBold',
  src: `url(${PoppinsBold}) format("truetype")`,
};
const poppinsSemiBold = {
  fontFamily: 'PoppinsSemiBold',
  src: `url(${PoppinsSemiBold}) format("truetype")`,
};
const poppinsMedium = {
  fontFamily: 'PoppinsMedium',
  src: `url(${PoppinsMedium}) format("truetype")`,
};
const poppinsRegular = {
  fontFamily: 'PoppinsRegular',
  src: `url(${PoppinsRegular}) format("truetype")`,
};
const poppinsLight = {
  fontFamily: 'PoppinsLight',
  src: `url(${PoppinsLight}) format("truetype")`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#282828',
      100: '#161616',
      200: '#151515',
      500: '#000',
    },
    secondary: {
      main: '#ff2626',
    },
    text: {
      primary: '#fff',
      secondary: '#f7f7f7',
      disabled: '#b7b7b7',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [
            poppinsBold,
            poppinsSemiBold,
            poppinsMedium,
            poppinsRegular,
            poppinsLight,
          ],
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: 'PoppinsBold',
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '60px',
    },
    h2: {
      fontFamily: 'PoppinsBold',
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    h3: {
      fontFamily: 'PoppinsBold',
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '46px',
    },
    h4: {
      fontFamily: 'PoppinsBold',
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '18px',
    },
    h5: {
      fontFamily: 'PoppinsSemiBold',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '36px',
    },
    body1: {
      fontFamily: 'PoppinsMedium',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '30px',
    },
    body2: {
      fontFamily: 'PoppinsMedium',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '18px',
    },
    body3: {
      fontFamily: 'PoppinsMedium',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
    },
    subtitle1: {
      fontFamily: 'PoppinsRegular',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '30px',
    },
    subtitle2: {
      fontFamily: 'PoppinsRegular',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '30px',
    },
    subtitle3: {
      fontFamily: 'PoppinsRegular',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '18px',
    },
    caption: {
      fontFamily: 'PoppinsLight',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 36, 40, 44, 48],
});
export default theme;
