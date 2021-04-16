import React, { useState } from 'react'

class NewsletterTermsOfService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: 0
    };
  }

  checkboxState(component) {
    if (this.state.checkboxState === 0) {
      this.setState({checkboxState: 1})
    } else {
      this.setState({checkboxState: 0})
    }
  }

  render() {
    return (
      <div class="newsletter-terms-of-service">
        <input type="checkbox" id="checkbox" value={ this.state.checkboxState } onClick={ this.checkboxState.bind(this) }/>
        I agree to <a href='#'><span class="underline">terms of service</span></a>
      </div>
    );
  }
}

export default NewsletterTermsOfService;
