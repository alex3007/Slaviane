let initialState = {
    trees: [
        {id: 1, path: "/oak", name: "Дуб"},
        {id: 2, path: "/birchtree", name: "Береза"},
        {id: 3, path: "/ash", name: "Ясень"},
        {id: 4, path: "/appletree", name: "Яблоня"},
        {id: 5, path: "/cherry", name: "Вишня"},
        {id: 6, path: "/rowan", name: "Рябина"},
        {id: 7, path: "/willow", name: "Ива"},
        {id: 8, path: "/nut", name: "Орех"},
        {id: 9, path: "/juniper", name: "Можже-вельник"},
        {id: 10, path: "/alder", name: "Ольха"},
        {id: 11, path: "/tree", name: "Ель"},
        {id: 12, path: "/aspen", name: "Осина"}],
    currentPath: ''

};

export const pathAC = (path) => ({type: 'NEW_PATH', newPath: path});


const sidebarReducer = (state = initialState, action) => {

    if (action.type === 'NEW_PATH') {
        return {
            ...state, currentPath: action.newPath
    }
    } else {
        return {...state}
    }
};


export default sidebarReducer;