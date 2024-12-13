const formatToKebabCase = (slugName: string) =>
    slugName
        .toLowerCase()                // Convert all characters to lowercase.
        .replace(/[^a-z0-9\s]/g, '')  // Remove special characters, keeping only letters, numbers, and spaces.
        .trim()                       // Trim whitespace from the beginning and end of the string.
        .replace(/\s+/g, '-');        // Replace spaces with hyphens.

export {
    formatToKebabCase
}