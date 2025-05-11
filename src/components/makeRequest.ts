export async function makeHttpRequest(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET') {
    try {
        const response = await fetch(url, {
            method,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was an error sending the request:", error);
        throw error;
    }
}
