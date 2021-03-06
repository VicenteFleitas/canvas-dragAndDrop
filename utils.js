export function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const colors = [ 
	"#160b27", "#3e4768", "#8e98b9", "#dee6fe",
	"#f3c41c", "#f98617", "#d42c4f", "#5f0267",
	"#4a10e8", "#2197f0", "#52daf7", "#bb4d11",
	"#ed7fb8", "#30fca6", "#17ba7d", "#056244"
]