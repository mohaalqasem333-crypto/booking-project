import React from 'react'
import './SearchWidget.css'
function SearchWidget() {
  return (
  <form
            className="search-widget"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="widget-field" htmlFor="destination">
              <span className="field-icon" aria-hidden="true">
                &#128205;
              </span>
              <span className="field-content">
                <span className="field-label">Destination</span>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="Where are you going?"
                />
              </span>
            </label>
            <label className="widget-field" htmlFor="check-in">
              <span className="field-icon" aria-hidden="true">
                &#128197;
              </span>
              <span className="field-content">
                <span className="field-label">Check in</span>
                <input id="check-in" name="check-in" type="date" />
              </span>
            </label>
            <label className="widget-field" htmlFor="check-out">
              <span className="field-icon" aria-hidden="true">
                &#128197;
              </span>
              <span className="field-content">
                <span className="field-label">Check out</span>
                <input id="check-out" name="check-out" type="date" />
              </span>
            </label>
            <label className="widget-field" htmlFor="guests">
              <span className="field-icon" aria-hidden="true">
                &#128101;
              </span>
              <span className="field-content">
                <span className="field-label">Guests and rooms</span>
                <select id="guests" name="guests" defaultValue="2-adults">
                  <option value="1-adult">1 adult</option>
                  <option value="2-adults">2 adults</option>
                  <option value="family">2 adults, 2 children</option>
                </select>
              </span>
            </label>
            <button className="widget-search-btn" type="submit">
              Search
            </button>
          </form>
  )
}

export default SearchWidget