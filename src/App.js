import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
  }
}

export default App;


// first create a `Comment` component from scratch

/* 
Create a Comment component in the file, Comment.js within src/ and don't forget to:
- import React, { Component } from 'react' at the top of our file
- Use the class X extends Component {} syntax
- export the class so it can be used in other files
- import the class in BlogPost
- It should expect a single prop (the text of a comment), which can be used in  the component via: `this.props.commentText`. This prop is passed in src/BlogPost.js
- It should have a single <div> in its render() method
- The <div> should have a className="comment" attribute
  Note: The BlogPost component needs minor alteration to properly pass the contents of its commentsArray to each of the Comment components that it is rendering
- Don't forget - we can unpack variable values directly with JSX by wrapping  them in {}, i.e. {this.props.commentText}
*/

// Second, add a few things to the `ColorBox` component.

/* 
- Should expect a single prop (an opacity value), which can be used in the component via: this.props.opacity. This prop is first passed in src/App.js
- If the opacity value is greater than or equal to 0.2:
the ColorBox component should render another ColorBox inside itself (recursive components!)
- an opacity prop should be passed to the child
the passed opacity prop should be reduced by 0.1
- If the opacity value is less than 0.2:
do not render another ColorBox (or else we would have infinite ColorBoxes rendering!)
- instead, the render method should return null
*/