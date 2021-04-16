import React from 'react';
import NewsletterText from '../NewsletterText/NewsletterText.js'
import NewsletterEmail from '../NewsletterEmail/NewsletterEmail.js'
import NewsletterTermsOfService from '../NewsletterTermsOfService/NewsletterTermsOfService.js'
import NewsletterSocialIcons from '../NewsletterSocialIcons/NewsletterSocialIcons.js'

class Newsletter extends React.Component {
  render() {
    const h1 = 'Subscribe to newsletter'
    const p = 'Subscribe to our newsletter and get 10% discount on pineapple glasses'

    return (
      <div className="newsletter">
        <NewsletterText h1={ h1 } p={ p }/>
        <NewsletterEmail/>
        <NewsletterTermsOfService/>
        <NewsletterSocialIcons />
      </div>
    );
  }
}

export default Newsletter;
