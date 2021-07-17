import '../styles/global.css';

// _app.js
const MyApp = ({ Component, pageProps }) => {
  console.log("yo")
  return <Component {...pageProps} />
}
export default MyApp;