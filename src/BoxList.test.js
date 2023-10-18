import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
	render(<BoxList />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
	const { getByLabelText, queryByTitle, queryByText } = render(<BoxList />);
	expect(queryByTitle('box')).not.toBeInTheDocument();

	const heightInput = getByLabelText('Height');
	const widthInput = getByLabelText('Width');
	const colorInput = getByLabelText('Color');
	const submitBtn = queryByText('Create Box');

	fireEvent.change(heightInput, { target: { value: '100px' } });
	fireEvent.change(widthInput, { target: { value: '100px' } });
	fireEvent.change(colorInput, { target: { value: 'red' } });
	fireEvent.click(submitBtn);

	expect(queryByTitle('box')).toBeInTheDocument();
});

it('can remove a box', () => {
	const { getByLabelText, queryByTitle, queryByText } = render(<BoxList />);

	const heightInput = getByLabelText('Height');
	const widthInput = getByLabelText('Width');
	const colorInput = getByLabelText('Color');
	const submitBtn = queryByText('Create Box');

	fireEvent.change(heightInput, { target: { value: '100px' } });
	fireEvent.change(widthInput, { target: { value: '100px' } });
	fireEvent.change(colorInput, { target: { value: 'red' } });
	fireEvent.click(submitBtn);

	const removeBtn = queryByText('X');

	fireEvent.click(removeBtn);

	expect(queryByTitle('box')).not.toBeInTheDocument();
});
