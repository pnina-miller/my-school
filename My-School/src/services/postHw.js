export const postHwToServer = (data) => {
    
    return fetch('http://localhost:3001/postHw', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...data
        })
    });
}

export const postHwAnswerToServer=async({lessonId, studentId, file})=>{
    return await fetch('http://localhost:3001/lesson/postHwAnswer',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lessonId, studentId, file
         })      
    })
}