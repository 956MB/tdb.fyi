/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
            screens: {
                '3xl': '1792px',
            },
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": {
							content: "none",
						},
						"blockquote p:first-of-type::after": {
							content: "none",
						},
					},
				},
			},
            boxShadow: {
                icon: '0 0 80px rgba(255, 255, 255, 0.20)',
            },
            borderRadius: {
                icon: '22px',
            },
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/line-clamp'),
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
};
