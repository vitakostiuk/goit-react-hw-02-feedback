import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={s.Notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
