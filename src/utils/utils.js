export function changeElementVal(name, value) {
    window.document.documentElement.setAttribute(name, value)
}

export function addElementCls(cls) {
    window.document.documentElement.classList.add(cls)
}

export function removeElementCls(cls) {
    window.document.documentElement.classList.remove(cls)
}