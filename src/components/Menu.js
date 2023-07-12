import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../bd/MenuData';

export default function Menu() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
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
