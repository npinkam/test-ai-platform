"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../styles/global.css");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous"/>
      <Component {...pageProps}/>
    </div>);
}
exports.default = App;
