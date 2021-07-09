export const addList = () => {

    return { type: 'ADD'}
};
export const removeList = (id) => {
    return { type: 'REMOVE', payload: id}
};
export const editList = () => {
    return { type: 'EDIT'}
};
export const doneList = (id) => {
    return { type: 'DONE', payload: id}
};
export const filterLists = (filtertext) => {
    return { type: 'FILTER', payload: filtertext}
};