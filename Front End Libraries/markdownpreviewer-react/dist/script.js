marked.setOptions({
  breaks: true,
  gfm: true });


const editorDefault =
`
# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](https://upload.wikimedia.org/wikipedia/commons/e/ee/Sample_abc.jpg "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: editorDefault };


    this.handleEditor = this.handleEditor.bind(this);
  }

  handleEditor(event) {
    this.setState({
      editorText: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container-fluid" }, /*#__PURE__*/
      React.createElement("h1", { class: "title text-center" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { class: "wrapper row" }, /*#__PURE__*/
      React.createElement("div", { class: "block-wrapper col-md-6" }, /*#__PURE__*/
      React.createElement("div", { class: "block" }, /*#__PURE__*/
      React.createElement(Editor, { handleEditor: this.handleEditor, editorText: this.state.editorText }))), /*#__PURE__*/


      React.createElement("div", { class: "block-wrapper col-md-6" }, /*#__PURE__*/
      React.createElement("div", { class: "block" }, /*#__PURE__*/
      React.createElement(Preview, { editorText: this.state.editorText }))))));





  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("textarea", { id: "editor", onChange: this.props.handleEditor, value: this.props.editorText }));

  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.props.editorText) } }));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById("app"));