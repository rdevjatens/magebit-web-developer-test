import React from 'react'

class NewsletterText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="newsletter-text">
        <h1>{ this.props.h1 }</h1>
        <p>{ this.props.p }</p>
      </div>
    );
  }
}

export default NewsletterText;
