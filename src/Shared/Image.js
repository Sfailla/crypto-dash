import React from 'react';

const Image = ({ alt, src, className }) => {
	return <img src={src} alt={alt} className={className} />;
};

export default Image;
