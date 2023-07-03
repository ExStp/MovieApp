export function scrollUp(containerRef) {
	if (!containerRef.current) return;
	containerRef.current.scrollIntoView({ behavior: "smooth" });
}
