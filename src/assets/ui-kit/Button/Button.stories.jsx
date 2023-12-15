import Button from './Button';
import '../../../index.scss';

export default {
	title: 'Button',
	tags: ['autodocs'],
	component: Button,
};

export const LargeOrange = {
	args: {
		children: 'Найти кофейню',
		color: 'orange',
		size: 'large',
	},
};

export const SearchButton = {
	args: {
		children: 'Найти',
		color: 'dark-gray',
		size: 'medium',
		bordered: true,
	},
};

export const CancelBordered = {
	args: {
		children: 'Отмена',
		color: 'transparent',
		size: 'medium',
		bordered: true,
	},
};

export const Tag = {
	args: {
		children: 'тег',
		color: 'gray',
		size: 'tag',
	},
};
