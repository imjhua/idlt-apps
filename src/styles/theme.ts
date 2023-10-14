
declare module '@emotion/react' {
  export interface Theme {
    color: string;
    border: string;
    divider: string;
    background: string;
    primary: string;
    highlight: string;
  }
}

const theme = {
  light: {
    color: '#444',
    border: '#dcdddf',
    divider: 'rgba(38, 45, 57, .32)',
    background: '#fff',
    primary: '#7d4cdb',
    highlight: '#ffe58f',
  },
  dark: {
    color: '#eee',
    border: '#333',
    divider: '#dcdddf',
    background: '#222',
    primary: '#7d4cdb',
    highlight: '#a59b79',
  }
}
export default theme

