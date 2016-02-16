/**
 * @jsx React.DOM
 */
var BasicInputBox = React.createClass ({
  render: function (){
    return (
     <div>
       <label>{this.props.label}</label>
       <br/>
       <input type="text" onChange={this.props.valChange} value= {this.props.val} />
       <br/>
     </div>
    );
  }
 });

 var Contact = React.createClass({
    getInitialState: function(){
      return {}
    },

    submit: function (e){
      var self

      e.preventDefault()
      self = this

      // console.log(this.state.name);

      var data = {
        name: this.state.name,
        fishPreference: this.state.fishPreference
      }

      console.log(JSON.stringify(data));

      // Submit form via jQuery/AJAX
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/bears',
        data: data,
        dataType: "json"
      })
      .done(function(data) {
        self.clearForm()
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });

    },

    clearForm: function() {
      this.setState({
        name: "",
        fishPreference: ""
      });
    },

    nameChange: function(e){
      this.setState({name: e.target.value})
    },

    fishChange: function(e){
     this.setState({fishPreference: e.target.value})
    },

    render: function(){
       return (
        <form onSubmit={this.submit} >
          <BasicInputBox label="Name:" valChange={this.nameChange} val={this.state.name}/>
          <BasicInputBox label="Fish Preference:" valChange={this.fishChange} val={this.state.fishPreference}/>
          <button type="submit">Submit</button>
        </form>
      );
    }
});

ReactDOM.render(<Contact></Contact>, document.getElementById('post'));
