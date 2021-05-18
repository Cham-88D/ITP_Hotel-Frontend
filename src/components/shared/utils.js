export function isValidName(input) {
    const validPattern = RegExp(/^[a-zA-Z]+$/i);
    return validPattern.test(input);
}