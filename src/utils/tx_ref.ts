import generator from "generate-password-ts";

 export function generateRef(){
    const reference = generator.generate({
        length:18,
        uppercase: false,
        lowercase: true,
        numbers: true,
        excludeSimilarCharacters: false,
        symbols: false,
        strict: true
    });
    return "tx-"+reference;
}