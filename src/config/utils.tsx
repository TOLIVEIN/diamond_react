import { simplified, traditional } from "./property";

export const exchangeTC = (text: string) => {
    const exchangedText = Array.from(text)
        .map((t) => {
            const index = simplified.indexOf(t);
            if (index === -1) {
                return t;
            } else return traditional[index];
        })
        .join("");
    // console.log(`exchangedText: ${exchangedText}`);
    return exchangedText;
};

export const exchangeSC = (text: string) => {
    const exchangedText = Array.from(text)
        .map((t) => {
            const index = traditional.indexOf(t);
            if (index === -1) {
                return t;
            } else return simplified[index];
        })
        .join("");
    // console.log(`exchangedText: ${exchangedText}`);
    return exchangedText;
};
