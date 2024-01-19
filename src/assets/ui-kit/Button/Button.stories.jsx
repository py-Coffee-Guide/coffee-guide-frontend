import Button from './Button';
import '../../../index.scss';

export default {
	title: 'Button',
	tags: ['autodocs'],
	component: Button,
};

export const DefaultButton = {
	args: {
		text: 'Button',
		type: 'button',
		preset: 'tag',
		additions: 'default',
	},
};

export const DefaultButtonDisabled = {
	args: {
		text: 'Disabled',
		type: 'button',
		preset: 'tag',
		additions: 'disabled',
	},
};

export const DefaultButtonActive = {
	args: {
		text: 'Active',
		type: 'button',
		preset: 'tag',
		additions: 'active',
	},
};

export const SearchButton = {
	args: {
		text: 'Найти',
		type: 'submit',
		preset: 'search',
		additions: 'default',
	},
};

export const SearchButtonActive = {
	args: {
		text: 'Найти',
		type: 'submit',
		preset: 'search',
		additions: 'active',
	},
};

export const SaveButton = {
	args: {
		type: 'button',
		preset: 'action',
		additions: 'default',
	},
};

export const SaveButtonActive = {
	args: {
		type: 'button',
		preset: 'action',
		additions: 'active',
	},
};

export const CloseButton = {
	args: {
		type: 'button',
		preset: 'action',
		additions: 'close',
	},
};
