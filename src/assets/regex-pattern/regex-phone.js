const phoneNumberPattern = /^(03[2-9]|07[06-9]|08[1-689]|09\d)\d{7}$/;
export default function isValidPhoneNumber(phoneNumber) {
    return phoneNumberPattern.test(phoneNumber);
}
