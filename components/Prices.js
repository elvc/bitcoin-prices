class Prices extends React.Component {
  state = {
    currency: 'USD', // default
  };

  getPrice = () => {
    const { currency } = this.state;
    const { bpi } = this.props;

    return (
      <li className="list-group-item">
        Bitcoin rate for {bpi[currency].description}:
        <div>
          <span class="badge badge-primary">{bpi[currency].code}</span>
          <strong>{bpi[currency].rate}</strong>
        </div>
      </li>
    );
  };

  render() {
    return (
      <div>
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <br />
        <ul className="list-group">{this.getPrice()}</ul>
      </div>
    );
  }
}

export default Prices;
