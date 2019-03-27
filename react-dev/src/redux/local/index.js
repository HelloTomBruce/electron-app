export const setLocalItem = (label, value) => {
    return localStorage.setItem(label, value)
}

export const getLocalItem = (label) => {
    return localStorage.getItem(label) || "[]"
}