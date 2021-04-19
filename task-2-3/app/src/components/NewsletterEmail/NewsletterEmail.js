import React, { useState } from 'react'
import NewsletterTermsOfService from '../NewsletterTermsOfService/NewsletterTermsOfService.js'
import { withRouter } from 'react-router-dom';
import axios from "axios";

class NewsletterEmail extends NewsletterTermsOfService {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      emailState: 0,
      startInput: 0,
      email: ''
    };
  }

  /*
    When all of the input test are passed send POST request to backend
   */
  sendRequest() {
    const email = this.state.email

    axios.post(`http://localhost/magebit-web-developer-test/task-2-3/backend/api/`, { email })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  /*
    Email input tests
   */
  checkEmail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    this.setState({email: email.target.value})

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

  /*
    When email passed all input tests check if checkbox is checked
   */
  checkCheckbox() {
    if (this.state.startInput === 1) {
      if (document.getElementById("checkbox").value === '1') {
        if (this.state.emailState === 1) {
          this.setState({errorMessage: ''});
          this.props.history.push('/subscribed');
          this.sendRequest();
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
      <div className="email-container">
        <div className="newsletter-email">
          <input type="email" placeholder="Type your email address here..." onChange={ this.checkEmail.bind(this) } onClick={ this.checkCheckbox.bind(this) }/>
          <span className="icon-ic_arrow"></span>
        </div>
        <span>{ this.state.errorMessage }</span>
      </div>
    );
  }
}

export default withRouter(NewsletterEmail);
