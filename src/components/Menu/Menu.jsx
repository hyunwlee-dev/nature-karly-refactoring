import React, { useState } from 'react';

import classes from './Menu.module.css';

import { IconComponent } from '@/components';

export function Menu(props) {
  const menuList = props.menuList;

  const [dropDown, setDropDown] = useState(false);

  function handleMouseOver() {
    setDropDown(true);
  }

  function handleMouseLeave(e) {
    if (
      !e.relatedTarget ||
      (e.target.className !== 'menuList' &&
        e.relatedTarget.className !== 'menuList')
    ) {
      setDropDown(false);
    }
  }

  return (
    <div
      className={classes.menuWrapper}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <button className={classes.menu}>카테고리</button>
      {dropDown && (
        <ul className={`${classes.menuList}`}>
          {menuList.map((item) => (
            <li key={item.id} className={classes.menuItem}>
              <IconComponent
                data-image={item.id}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundSize: '24px 24px',
                  backgroundPosition: '50% 50%',
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                }}
              ></IconComponent>
              <a href="#">{item.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
