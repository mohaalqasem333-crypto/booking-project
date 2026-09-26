import React from 'react'
import facebookLogo from "../../../../assets/icons/facebookLogo.png";
import googleLogo from "../../../../assets/icons/googleLogo.png";
import appleBlackLogo from "../../../../assets/icons/Applelogo.png";
import "./SocialLoginButtons.css";
function SocialLoginButtons() {
  return (
   <div className="social-accounts">
                <button type="button" className="social-account">
                  <img
                    className="social-logo"
                    src={facebookLogo}
                    alt="Continue with Facebook"
                  />
                </button>
                <button type="button" className="social-account">
                  <img
                    className="social-logo"
                    src={appleBlackLogo}
                    alt="Continue with Apple"
                  />
                </button>

                <button type="button" className="social-account">
                  <img
                    className="social-logo"
                    src={googleLogo}
                    alt="Continue with Google"
                  />
                </button>
              </div>
  )
}

export default SocialLoginButtons