const passwordPattern = /^[^\W_]{8,}$/;
export default function isValidPassword(password) {
    return passwordPattern.test(password);
}
