export const forgetPassword = (email, password) => {
    fetch('http://localhost:3001/users/forgetPassword', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
}