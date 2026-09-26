import React from 'react'
import "./UserAcount.css";
function UserAcount({ user, handleLogout }) {
  return (
     <div className="Box-Icons-Your-Account">
            <i className="fa-solid fa-dollar-sign"></i>
            <i className="fa-solid fa-heart"></i>

            <details className="user-account">
              <summary className="user-account-trigger">
                <div className="profile-image">
                  {user.firstName.charAt(0).toUpperCase()}
                </div>
                <div className="account-name">
                  <p className="user-name">Your Account</p>
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              </summary>

              <div className="profile-menu">
                <div className="profile-menu-header">
                  <div className="profile-menu-avatar">
                    {user.firstName.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.email}</span>
                </div>
                <div className="profile-menu-items">
                  <div className="profile-menu-item active">
                    <i className="fa-regular fa-user"></i>
                    <span>My Account</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="profile-menu-item">
                    <i className="fa-regular fa-credit-card"></i>
                    <span>Payments</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="profile-menu-item">
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="profile-menu-item">
                    <i className="fa-regular fa-handshake"></i>
                    <span>Support</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <div
                    className="profile-menu-item sign-out"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Sign Out</span>
                  </div>
                </div>
              </div>
            </details>
          </div>
  )
}

export default UserAcount