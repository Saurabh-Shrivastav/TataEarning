// Helper function to decode JWT token and check if it's expired
// export const isTokenExpired = (token) => {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     const expiry = payload.exp * 1000; // Convert to milliseconds
//     return Date.now() > expiry; // Check if current time is greater than token expiry time
// };






// Helper function to decode JWT token and check if it's expired
export const isTokenExpired = (token) => {
    // Check if the token is valid
    if (!token || typeof token !== 'string' || token.split('.').length !== 3) {
        console.error("Invalid token format");
        return true; // Assume expired if token is invalid
    }

    try {
        // Decode the token payload
        const payload = JSON.parse(atob(token.split('.')[1]));

        // Check if the expiry field exists in the payload
        if (!payload.exp) {
            console.error("No expiry field in token payload");
            return true; // Assume expired if no expiry is found
        }

        const expiry = payload.exp * 1000; // Convert to milliseconds
        return Date.now() > expiry; // Check if current time is greater than token expiry time
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // Assume expired if there's an error
    }
};

