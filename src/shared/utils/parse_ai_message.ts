export type ParsedBlock = {
    emoji?: string;
    title?: string;
    description?: string;
    link?: string;
    text?: string;
};

export const parseAIMessage = (text: string): ParsedBlock[] => {
    if (!text) return [];

    const blocks: ParsedBlock[] = [];

    // Regex para emojis Unicode (emoji puede ser más de un byte)
    const perfumeRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s*([^\n]+)\n([\s\S]+?)(?=(\n\p{Emoji_Presentation}|\n\p{Emoji}\uFE0F|$))/gu;
    let lastIndex = 0;
    let match;

    while ((match = perfumeRegex.exec(text)) !== null) {
        const start = match.index;

        // Texto antes del primer perfume
        if (start > lastIndex) {
            const preText = text.slice(lastIndex, start).trim();
            if (preText) blocks.push({ text: preText });
        }

        const emoji = match[1];
        const title = match[2].trim();
        const rest = match[3].trim();

        // Extraer link (la última línea que empieza con http)
        const lines = rest.split("\n").map(l => l.trim()).filter(l => l !== "");
        const linkLine = lines.find(l => l.startsWith("http"));
        const descriptionLines = lines.filter(l => l !== linkLine);
        const description = descriptionLines.join(" ");

        blocks.push({
            emoji,
            title,
            description,
            link: linkLine
        });

        lastIndex = perfumeRegex.lastIndex;
    }

    // Texto después del último perfume
    const remainingText = text.slice(lastIndex).trim();
    if (remainingText) {
        // Separar la última línea si viene pegada a la descripción del último perfume
        const parts = remainingText.split("\n").map(l => l.trim()).filter(l => l !== "");
        for (const line of parts) {
            blocks.push({ text: line });
        }
    }

    return blocks;
};