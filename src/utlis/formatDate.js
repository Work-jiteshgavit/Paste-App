export function formatDate() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.toLocaleString('default', { month: 'long' }); 
    let year = newDate.getFullYear();
    
    return `${month} ${date}, ${year}`; 
}
