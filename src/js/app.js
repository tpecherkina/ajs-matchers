export default function sortArr(arr) {
    return arr.sort((a, b) => a.health.localeCompare(b.health));
  }

  