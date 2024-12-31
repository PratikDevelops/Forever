import React from 'react';
import '../Styles/NewsLetterBox.css';

function NewsLetterBox() {
    function onhandleSubmit(e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
    }

    return (
        <div className="newsletter-box">
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-description">
                Get the latest updates and offers directly in your inbox.
            </p>
            <form className="newsletter-form" onSubmit={onhandleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                />
                <button type="submit" className="newsletter-button">
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default NewsLetterBox;
