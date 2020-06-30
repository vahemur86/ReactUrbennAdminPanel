export const authSchemeFactory = () => {
    return (email, password) => {
        console.log('asdasd',email, password)
        return {
            email,
            password
        }
    }
};