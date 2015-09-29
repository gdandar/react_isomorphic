var React = require('react');

var HelloMessage = React.createClass({
  getInitialState() {
      return {
        userName: ''
      };
    },
    render() {
      return (
          <div className="hello-message">
            <input type="text" onChange={this.onChange}/>
            <span>Hello: {this.state.userName}</span>
          </div>
      );
    },
    onChange(event) {
      var text = event.target.value;

      this.setState({
        userName: text
      });
    }
});
module.exports = HelloMessage;
