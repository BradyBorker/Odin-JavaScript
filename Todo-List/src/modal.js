export function showModal(modal) {
    modal.classList.remove('hidden');
}

export function hideModal(modal) {
    modal.classList.add('hidden');
}

export function extractModalData(modal) {
    const data = {};
    let inputs = modal.querySelectorAll('input');
    inputs.forEach((input) => {
        data[input.name] = input.value
    })
    
    return data
}