import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
  <div>
    <Head>
      <title>Bitcoin Price</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
