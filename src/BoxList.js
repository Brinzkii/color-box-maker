import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'react-uuid';

const BoxList = () => {
	const [boxes, setBoxes] = useState([]);
	const addBox = (box) => {
		let newBox = {
			...box,
			id: uuid(),
		};
		setBoxes((boxes) => [...boxes, newBox]);
	};
	const removeBox = (id) => {
		const idx = boxes.findIndex((box) => box.id === id);
		const boxesCopy = [...boxes];
		boxesCopy.splice(idx, 1);
		setBoxes([...boxesCopy]);
	};

	return (
		<>
			<NewBoxForm addBox={addBox} />

			{boxes.map((box) => (
				<Box
					removeBox={removeBox}
					width={box.width}
					height={box.height}
					bgColor={box.color}
					id={box.id}
					key={box.id}
				/>
			))}
		</>
	);
};

export default BoxList;
