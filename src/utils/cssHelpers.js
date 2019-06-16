export const globalRadius = "8px";

export const breakpoints = {
	small: "(max-width: 39.9375em)",
	medium: "(min-width: 40em)",
	mediumOnly: "(min-width: 40em) and (max-width: 63.9375em)",
	large: "(min-width: 64em)",
	largeOnly: "(min-width: 64em) and (max-width: 74.937)",
	ieOnly: "all and (-ms-high-contrast: none), (-ms-high-contrast: active)",
	edge: "(-ms-accelerator:true)"
};

export const BASELINE_GRID_UNIT = 12;

export const baseline = number => {
	return `${BASELINE_GRID_UNIT * number}px`;
};
