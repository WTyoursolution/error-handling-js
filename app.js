"use strict";
async function divideNumbers(a,b) {
    try {
        if(b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const answer = a/b;
        return answer;
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Execution is complete");
    }

}
 divideNumbers(4,0);

async function fetchData() {
    const url = "https://httpstat.us/500";
try {
    const response = await fetch(url);
    console.log(response);
    if(response.status !== 200) {
        throw new Error("failed to fetch");
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log(error);
} finally {
    console.log("Fetch attempt finished.")
}
}
fetchData();