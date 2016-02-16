/**
 * @jsx React.DOM
 */
var BearApp = React.createClass({

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

bearDelete: function(bear) {
  console.log(bear._id);
},

bearUpdate: function(bear) {
  console.log(bear);
},

render: function() {
  var bearNodes = this.state.bears.map(function(bear){
    return(
      <section key={bear._id} >
        <p> name: {bear.name}</p>
        <p>fishPreference: {bear.fishPreference} </p>
        <button onClick = {this.bearDelete.bind(this,bear)}>Delete</button>
        <button onClick = {this.bearUpdate.bind(this,bear)}>Update</button>
      </section>
    )
  }, this);
  return (
    <div className='bearList'>
      {
        bearNodes
      }
    </div>

  );
}
});

ReactDOM.render(
<BearApp source="http://localhost:3000/api/bears" />,
document.getElementById('get')
);
