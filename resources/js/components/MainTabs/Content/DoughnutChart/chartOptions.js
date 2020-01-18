export default {
	// Sweep to allow arcs to cover.
	circumference: 1 * Math.PI,
	// Starting angle to draw arcs from.
	rotation: 1 * Math.PI,
	/**
	 *  Boolean - whether to maintain the starting aspect ratio or not when responsive,
	 *  if set to false, will take up entire container
	 */
	maintainAspectRatio: false,
	responsiveAnimationDuration: 300,
	tooltips: {
		custom(tooltip) {
			if (!tooltip) return;
			// disable displaying the color box;
			tooltip.displayColors = false;
		},
		callbacks: {
			label(tooltipItem, chart) {
				const i = tooltipItem.index;

				return `${chart.datasets[0].data[i]} доля ${chart.labels[i]} в общем расходе`;
			},
		},
	},

	legend: {
		display: false,
	},
};