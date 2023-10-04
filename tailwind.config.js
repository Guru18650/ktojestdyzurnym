import { join } from 'path'

import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			boxShadow: {
				'4xl': '0 0px 100px 0px rgba(0, 0, 0, 0.4)',
			  }
		},
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				
				preset: [
					{
						name: 'modern',
						enhancements: true,
					},
				],
			},
		}),
	],
};
