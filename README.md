# AngularJS
AngularJS initially released in 2009 by google. Right now, Angular is updated to version 2.0.
AngularJS lets us create dynamic application by extending HTMl attributes.  

# React



# Comparison between AngularJS and React

## Example 1

![Alt text](/screen_shots/example1.png?raw=true "Optional Title" {width=40px height=40px})

### AngularJS

```js
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourContent" placeholder="Enter content here">
      <hr>
      <h1>{{yourContent}}!</h1>
    </div>
  </body>
</html>

```
In the above example, `ng-model` is built core in AngularJS, which represent the data model `{{yourContent}}` is the variable to store the input data. `{{yourContent}}` is to execute this variable and display its value into h1 tag.
### React

```js

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  rawMarkup: function() {
    return { __html: marked(this.state.value, {sanitize: true}) };
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    );
  }
});

ReactDOM.render(<MarkdownEditor />, mountNode);
```

Instead of inserting React attribute in html tags, React will build  `React.createClass ` , using `render: function() { return()}` to display the content inside return() in the html page. React.createClass is just like object in Javascript with `key value pairs` format.
In the above example, render function return elements:  

 ```js
 <div className="MarkdownEditor">
    <h3>Input</h3>
    <textarea
      onChange={this.handleChange}
      ref="textarea"
      defaultValue={this.state.value} />
    <h3>Output</h3>
    <div
      className="content"
      dangerouslySetInnerHTML={this.rawMarkup()}
    />
  </div>
  ```

will be dynamically displayed in the page. In `textarea` tag, if there is anything change in inputing content, `oncChange` will call `handleChange` function inside the MarkdownEditor object and then reset the value. Eventually the input content or markdown will display in the div#content.  


### Comparison

From this example, we could find out that in order to achieve same function, AngularJS uses less codes comparing to React. But React have more flexibility than AngularJS, React create class which could include more function to operate and generate data, like we could event input data as markdown.
