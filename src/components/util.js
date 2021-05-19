export function isValidUsername (input) {
    const validPattern = RegExp(/^[a-zA-Z0-9]+$/i);
    if (validPattern.test(input)){
        return true;
    }else return false
}