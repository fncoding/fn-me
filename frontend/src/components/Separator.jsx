import React from 'react';

const Separator = ({ className = '', style = {} }) => (
  <div
    role="separator"
    aria-hidden="true"
    className={`reveal w-full h-0.5 my-6 rounded-full bg-gradient-to-r from-[#071033] via-[#064e3b] to-white ${className}`}
    style={{ ...style }}
  />
);

export default Separator;