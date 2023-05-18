/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  require("path").join(
		require.resolve("@skeletonlabs/skeleton"),
		"../**/*.{html,js,svelte,ts}"
	  ),
	],
	theme: {
	  extend: {
		background: {
		  gradient: "linear-gradient(265.24deg, #00AEEF -7.26%, #81CBEC 136.76%)",
		},
		colors: {
		  blue: {
			200: "#00AEEF",
		  },
		  gray: {
			100: "#EDF1F7",
			50: "#DEE5E9",
		  },
		  black: {
			  100: "#6C6C85",
			  500: "#2B2B2B"
		  },
		  red: {
			  100: "#FB5858",
			  200: "#fb58581a"
		  },
		  green: {
			  100: "#0fba811a",
			  200: "#0FBA81"
		  }
		},
		width: {
		  128: "32rem",
		},
		height: {
		  115: "28.5rem",
		},
	  },
	},
	plugins: [
	  require("@tailwindcss/forms"),
	  ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")(),
	],
  };
  