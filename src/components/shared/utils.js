export function isValidName(input) {
    const validPattern = RegExp(/^[a-zA-Z ]+$/i);
    return validPattern.test(input);
}

export function isValidDescription(input){
    const validPattern = RegExp(/^[a-zA-Z0-9%, ]+$/i);
    return validPattern.test(input);
}