import React from 'react'
import ToggleTheme from '../toggle-theme/ToggleTheme'

export function AsideHeader() {
  return (
    <>
      <header>
        <ul>
          <li>
            <ToggleTheme/>
          </li>
          <li>
            <a>Notifications <span className="alerts">3</span></a>
          </li>
          <li>
            <a>Places</a>
          </li>
        </ul>
        <div className="user-avatar">
        </div>
      </header>
    </>
  )
}
