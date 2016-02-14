(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Q_X/Desktop/code401/reacting/src/js/crud_get.js":[function(require,module,exports){
var BearApp = React.createClass({displayName: "BearApp",

getInitialState: function() {
  return {
    bears: []
  };
},

loadBearsFromServer: function() {
  $.ajax({
    url: this.props.source,
    type: 'GET',
    success: function (data) {
      this.setState({
        bears:data
      })
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.source, status, err.toString());
    }.bind(this)
  });
},

componentDidMount: function() {
  this.loadBearsFromServer();
  setInterval(this.loadBearsFromServer,1000);
},

componentWillUnmount: function() {
  this.serverRequest.abort();
},

render: function() {
  return (
    React.createElement("div", null, 
      
        this.state.bears.map(function(bear) {
          return React.createElement("section", {key: bear._id}, " ", React.createElement("p", null, " name: ", bear.name), "  ", React.createElement("p", null, "fishPreference: ", bear.fishPreference, " "), " ")
        })
      
    )

  );
}
});

ReactDOM.render(
React.createElement(BearApp, {source: "http://localhost:3000/api/bears"}),
document.getElementById('get')
);

},{}]},{},["/Users/Q_X/Desktop/code401/reacting/src/js/crud_get.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvUV9YL0Rlc2t0b3AvY29kZTQwMS9yZWFjdGluZy9zcmMvanMvY3J1ZF9nZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLDZCQUE2Qix1QkFBQTs7QUFFakMsZUFBZSxFQUFFLFdBQVc7RUFDMUIsT0FBTztJQUNMLEtBQUssRUFBRSxFQUFFO0dBQ1YsQ0FBQztBQUNKLENBQUM7O0FBRUQsbUJBQW1CLEVBQUUsV0FBVztFQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtJQUN0QixJQUFJLEVBQUUsS0FBSztJQUNYLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRTtNQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ1osS0FBSyxDQUFDLElBQUk7T0FDWCxDQUFDO0tBQ0gsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ1osS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7TUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDMUQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0dBQ2IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7QUFFRCxpQkFBaUIsRUFBRSxXQUFXO0VBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0VBQzNCLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsQ0FBQzs7QUFFRCxvQkFBb0IsRUFBRSxXQUFXO0VBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0IsQ0FBQzs7QUFFRCxNQUFNLEVBQUUsV0FBVztFQUNqQjtJQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7TUFDRjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtVQUNsQyxPQUFPLG9CQUFBLFNBQVEsRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUUsSUFBSSxDQUFDLEdBQUssQ0FBQSxFQUFBLEdBQUEsRUFBQyxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFBLFNBQUEsRUFBUSxJQUFJLENBQUMsSUFBUyxDQUFBLEVBQUEsSUFBQSxFQUFFLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUEsa0JBQUEsRUFBaUIsSUFBSSxDQUFDLGNBQWMsRUFBQyxHQUFLLENBQUEsRUFBQSxHQUFXLENBQUE7U0FDcEg7TUFDRjtBQUNQLElBQVUsQ0FBQTs7SUFFTjtDQUNIO0FBQ0QsQ0FBQyxDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU07QUFDZixvQkFBQyxPQUFPLEVBQUEsQ0FBQSxDQUFDLE1BQUEsRUFBTSxDQUFDLGlDQUFpQyxDQUFBLENBQUcsQ0FBQTtBQUNwRCxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztDQUM3QixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBCZWFyQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5nZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGJlYXJzOiBbXVxuICB9O1xufSxcblxubG9hZEJlYXJzRnJvbVNlcnZlcjogZnVuY3Rpb24oKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiB0aGlzLnByb3BzLnNvdXJjZSxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJlYXJzOmRhdGFcbiAgICAgIH0pXG4gICAgfS5iaW5kKHRoaXMpLFxuICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMucHJvcHMuc291cmNlLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICB9LmJpbmQodGhpcylcbiAgfSk7XG59LFxuXG5jb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gIHRoaXMubG9hZEJlYXJzRnJvbVNlcnZlcigpO1xuICBzZXRJbnRlcnZhbCh0aGlzLmxvYWRCZWFyc0Zyb21TZXJ2ZXIsMTAwMCk7XG59LFxuXG5jb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VydmVyUmVxdWVzdC5hYm9ydCgpO1xufSxcblxucmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICB0aGlzLnN0YXRlLmJlYXJzLm1hcChmdW5jdGlvbihiZWFyKSB7XG4gICAgICAgICAgcmV0dXJuIDxzZWN0aW9uIGtleT17YmVhci5faWR9PiA8cD4gbmFtZToge2JlYXIubmFtZX08L3A+ICA8cD5maXNoUHJlZmVyZW5jZToge2JlYXIuZmlzaFByZWZlcmVuY2V9IDwvcD4gPC9zZWN0aW9uPlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICk7XG59XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuPEJlYXJBcHAgc291cmNlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9iZWFyc1wiIC8+LFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldCcpXG4pO1xuIl19
