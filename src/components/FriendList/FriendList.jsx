import React from "react";
import PropTypes from "prop-types";
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (<ul className={css.friend_list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
            return (<li key={id} className={css.item}>
                <span className={isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
    </li>)
        })}
    </ul>)
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};