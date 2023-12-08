export const checkValidation = ({name = "", email, password}) => {

    let isNameValid = null;
    if (name) isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (name && !isNameValid) return 'Name is invalid';
    if (!isEmailValid) return "Email is invalid";
    if (!isPasswordValid) return "Password is invalid";

    return null;
}