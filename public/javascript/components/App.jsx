var React = require('react'),
HelloMessage = require('./helloMessage');

var App = React.createClass({
    render() {
        return (
            <HelloMessage/>
        );
    }
});

module.exports = App;