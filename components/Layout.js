import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>Bitcoin Price</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </React.Fragment>
);

export default Layout;
