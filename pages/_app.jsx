import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import '../styles/globals.css';

const progress = new ProgressBar({
  size: 2,
  color: '#93268F',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
