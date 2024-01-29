import Button from './Button';

export default {
	title: 'Button',
	tags: ['autodocs'],
	component: Button,
};

export const DefaultButton = {
	args: {
		text: 'добавить кофейню',
		type: 'button',
	},
};

export const SearchButton = {
	args: {
		text: 'найти',
		type: 'button',
		size: 'small',
	},
};
