import { addClass, removeClass, setId } from "./dom";

export function showModal(modal) {
    removeClass(modal, 'hidden');
}

export function hideModal(modal) {
    addClass(modal, 'hidden');
}

export function setFormFor(form, projectId) {
    setId(form, projectId);
}

export function extractModalData(modal) {
    const data = {};
    let inputs = modal.querySelectorAll('input');
    inputs.forEach((input) => {
        data[input.name] = input.value
    })
    
    return data
}