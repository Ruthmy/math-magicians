import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../bd/MenuData';
import '../styles/Menu.css';

export default function Menu() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#1b1b1b' : '#6b6b6b',
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
