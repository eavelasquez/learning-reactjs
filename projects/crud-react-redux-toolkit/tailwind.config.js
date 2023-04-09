/** @type {import('tailwindcss').Config} */

export const content = [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",

	// Path to the tremor module
	"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
	extend: {},
};

export const plugins = [];
