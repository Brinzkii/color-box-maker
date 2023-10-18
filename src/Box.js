import React from 'react';

const Box = ({ removeBox, width, height, bgColor, id }) => {
	const boxStyle = {
		width,
		height,
		backgroundColor: bgColor,
	};
	const handleClick = (evt) => {
		removeBox(evt.target.className);
	};
	return (
		<>
			<button className={id} onClick={handleClick}>
				X
			</button>
			<div title="box" style={boxStyle}></div>
		</>
	);
};

export default Box;
