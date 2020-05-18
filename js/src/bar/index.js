/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { more as icon } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import edit from './edit';
import metadata from './block';
import save from './save';
import transforms from './transforms';

const { attributes, category, name } = metadata;

export { metadata, name };

// Settings.
export const settings = {
	title: __( 'Crowdfunding Bar' ),
	description: __( 'Add a block that displays crowdfunding information with progress bar.' ),
	category,
	icon,
	example: {},
	attributes,
	edit,
	save,
	transforms
};