class Prices extends React.Component {
  state = {
    currency: 'USD', // default
  };

  getPrice = () => {
    const { currency } = this.state;
    return (
      <li className="list-group-item">
        Bitcoin rate for {this.props.bpi[currency].description}:
        <span class="badge badge-primary">{this.props.bpi[currency].code}</span>
        <strong>{this.props.bpi[currency].rate}</strong>
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
