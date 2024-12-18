const formatToKebabCase = (slugName: string) =>
    slugName
        .replace(/đ/g, 'd')               // Replace đ to d
        .replace(/Đ/g, 'D')               // Replace Đ to Đ
        .normalize("NFD")                 // Remove accents from characters       
        .replace(/[\u0300-\u036f]/g, '')  // 
        .toLowerCase()                    // Convert all characters to lowercase.
        .replace(/[^a-z0-9\s]/g, '')      // Remove special characters, keeping only letters, numbers, and spaces.
        .trim()                           // Trim whitespace from the beginning and end of the string.
        .replace(/\s+/g, '-');            // Replace spaces with hyphens.

const generateSlugByNameAndId = (name: string, id: number) => (
    formatToKebabCase(name) + `-${id}`
)

export {
    formatToKebabCase,
    generateSlugByNameAndId
}
