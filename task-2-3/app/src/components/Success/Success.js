import React from 'react'
import NewsletterText from '../NewsletterText/NewsletterText.js'
import NewsletterSocialIcons from '../NewsletterSocialIcons/NewsletterSocialIcons.js'

class Success extends React.Component {

  render() {
    const h1 = 'Thanks for subscribing!'
    const p = 'You have succesfully subscribed to our email listing. Check your email for discount the code'

    return (
      <div className="newsletter">
        <span className="icon-ic_success">
          <span class="path1"></span>
          <span class="path2"></span>
          <span class="path3"></span>
          <span class="path4"></span>
          <span class="path5"></span>
          <span class="path6"></span>
          <span class="path7"></span>
        </span>
        <NewsletterText h1={ h1 } p={ p }/>
        <NewsletterSocialIcons />
      </div>
    );
  }
}

export default Success;
