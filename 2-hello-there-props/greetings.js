// Generated by CoffeeScript 1.7.1
(function() {
  var R;

  R = React.DOM;

  this.Greetings = React.createClass({
    propTypes: {
      name: React.PropTypes.string
    },
    getDefaultProps: function() {
      return {
        name: 'there'
      };
    },
    render: function() {
      return R.h1(null, "Hello, " + this.props.name + "!");
    }
  });

  React.render(React.createElement(this.Greetings, {
    name: 'Xuebing'
  }), document.body);

}).call(this);