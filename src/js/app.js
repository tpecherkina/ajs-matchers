export default function sortArr(arr) {
    return arr.sort((a,b) => {
        return b.health - a.health 
    }, 0);
    return arr
}