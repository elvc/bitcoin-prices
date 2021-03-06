import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = props => (
  <Layout>
    <React.Fragment>
      <h1>Welcome to Bitcoin Prices</h1>
      <Prices bpi={props.bpi} />
    </React.Fragment>
  </Layout>
);

Index.getInitialProps = async () => {
  const result = await fetch(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
  );
  const data = await result.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
