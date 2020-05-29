/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import icon from './icon';

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
	title: __( 'Money Campaign Horizontal Progress Bar', 'pronamic-pay-crowdfunding' ),
	description: __( 'Displays money campaign information with horizontal progress bar.', 'pronamic-pay-crowdfunding' ),
	category,
	icon,
	example: {},
	attributes,
	edit,
	save,
	transforms
};