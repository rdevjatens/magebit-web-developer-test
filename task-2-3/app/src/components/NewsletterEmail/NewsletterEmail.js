import React, { useState } from 'react'
import NewsletterTermsOfService from '../NewsletterTermsOfService/NewsletterTermsOfService.js'
import { withRouter } from 'react-router-dom';

class NewsletterEmail extends NewsletterTermsOfService {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      emailState: 0,
      startInput: 0
    };
  }

  checkEmail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (email.target.value === '') {
      this.setState({errorMessage: 'Cant leave blank'})
      this.setState({emailState: 0})
    } else {
      this.setState({emailState: 0})

      if (!pattern.test(email.target.value)) {
        this.setState({errorMessage: 'Incorrect email'})
        this.setState({emailState: 0})
      } else {
        this.setState({errorMessage: ''})
        this.setState({emailState: 1})
      }
    }
  }

  checkCheckbox() {
    if (this.state.startInput === 1) {
      if (document.getElementById("checkbox").value === '1') {
        if (this.state.emailState === 1) {
          this.setState({errorMessage: ''});
          this.props.history.push('/subscribed');
        } else {
          this.setState({errorMessage: 'Fill out the email'})
        }
      } else {
        this.setState({errorMessage: 'Check the checkbox'})
      }
    }

    this.setState({startInput: 1})
  }

  render() {
    return (
      <div class="email-container">
        <div class="newsletter-email">
          <input type="email" placeholder="Type your email address here..." onChange={ this.checkEmail.bind(this) } onClick={ this.checkCheckbox.bind(this) }/>
          <span class="icon-ic_arrow"></span>
        </div>
        <span>{ this.state.errorMessage }</span>
      </div>
    );
  }
}

export default withRouter(NewsletterEmail);
