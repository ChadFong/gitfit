var React = require('react');
var Chart = require('./Chart.jsx');

var Box = React.createClass({
  getInitialState: function() {
    return {
      metric: localStorage[this.props.storageType + 'Counts'],
      dates: localStorage[this.props.storageType + 'Dates'],
      currentValue: this.getData()
    }
  },

  componentDidMount: function() {
    this.setState({
      metric: localStorage[this.props.storageType + 'Counts'],
      dates: localStorage[this.props.storageType + 'Dates'],
      currentValue: this.getData()
    });
  },
  
  getData: function() {
    // Demo version:
    if(this.props.storageType === "step") {
      return 7638;
    } else {
      return 7;
    }
  },

  shouldComponentUpdate: function() {
    if (localStorage[this.props.storageType + 'Counts'] !== this.state.metric) {
      this.setState({
        metric: localStorage[this.props.storageType + 'Counts'],
        dates: localStorage[this.props.storageType + 'Dates']
      }, function() {
        this.setState({
          currentValue: this.getData()
        });
      });
    }

    return true;
  },
  
  render: function() {
    return (
      <div className={this.props.storageType + 's-box'}>
        <h2>{this.props.title}</h2>
        <Chart parentId={this.props.storageType + 's-chart'} currentValue={this.state.currentValue} max={this.props.max} />
      </div>
    );
  }

});

module.exports = Box;
