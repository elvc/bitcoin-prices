import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <div>
      <h1>About Bitcoin Prices</h1>
      <p>Application to view bitcoin prices, using React and Next.js</p>
      <p>Data from CoinDesk Bitcoin Price Index API</p>
    </div>
  </Layout>
);
export default About;
