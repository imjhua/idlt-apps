const global = `
:root {
  // theme: gray
  --color-light-bg: color(display-p3 0.975 0.975 0.975);
  --color-dark-bg: color(display-p3 0.098 0.098 0.098);
}

/* 시스템 테마에 따른 root 배경색상 지정. 텍스트는 하위 페이지 테마에서 관장 */
// @media (prefers-color-scheme: light) {
//   :root { background: var(--color-light-bg); }
//   svg{
//     fill: var(--color-light-bg);
//   }
// }
// @media (prefers-color-scheme: dark) {
//   :root { background: var(--color-dark-bg); }
//   svg{
//     fill: var(--color-dark-bg);
//   }
// }

input, textarea, button, select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  outline-style:none;

  border: none;
  background-color: inherit;
  color: inherit;
}


html {
  // font-family: 'Roboto', 'Montserrat', sans-serif;

  box-sizing: border-box;
  -moz-user-select: none;
       user-select: none;
  -webkit-user-select: none;
  /* 롱터치 long touch 막기 */
  -webkit-touch-callout: none;
  /* touch 시 나오는 음영 제거 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


html, body, body > div{
  // height: 100%;
  // min-height: 100%;
  // max-height: 100%;
  // background: var(--accent-4);
}

body{
  overflow-x: hidden;
}

ul{
  list-style: circle;
  list-style-position: inside;
}

table{
  table-layout: fixed !important;
  th, td{
    vertical-align: middle;
  }
}

form{
  label{
    margin: 0 !important;

    ~ span{
      font-size: 12px !important;
      // display: inline-block;

      &:before{
        content: '*';
        margin-right: 2px;
      }
    }
  }
}

a{
  text-decoration: none;
  &:visited, &:active, &:link{
    color: inherit;
  }
}

*{
  line-height: 1.4;
}

nav{
  > div{
    &:after{
      content: '|';
      text-align: center;
      width: 100%;
      display: block;
    }
  }
  > a{
    font-weight: bold;
  }
}

svg{
  vertical-align: middle;
}
`

export default global