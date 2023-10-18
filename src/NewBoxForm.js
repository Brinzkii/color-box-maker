import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		width: '',
		height: '',
		color: '',
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBox(formData);
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="width">Width</label>
			<input
				id="width"
				type="text"
				name="width"
				value={formData.width}
				onChange={handleChange}
				placeholder="250px"
			/>

			<label htmlFor="height">Height</label>
			<input
				id="height"
				type="text"
				name="height"
				value={formData.height}
				onChange={handleChange}
				placeholder="250px"
			/>

			<label htmlFor="color">Color</label>
			<input id="color" type="text" name="color" value={formData.color} onChange={handleChange} />

			<button>Create Box</button>
		</form>
	);
};

export default NewBoxForm;
