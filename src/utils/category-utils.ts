export function normalizeCategories(
	input?: string[] | string | null,
): string[] {
	if (!input) return [];

	if (Array.isArray(input)) {
		return input.map((c) => c.trim()).filter((c) => c.length > 0);
	}

	if (typeof input === "string") {
		const trimmed = input.trim();
		return trimmed ? [trimmed] : [];
	}

	return [];
}

export function getPrimaryCategory(input?: string[] | string | null): string {
	const categories = normalizeCategories(input);
	return categories[0] || "";
}
