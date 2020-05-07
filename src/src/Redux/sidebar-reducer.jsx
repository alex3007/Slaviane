let initialState = {
    trees: [
        {id: 1, path: "/oak", name: "дуб"},
        {id: 2, path: "/birchtree", name: "береза"},
        {id: 3, path: "/ash", name: "ясень"},
        {id: 4, path: "/appletree", name: "яблоня"},
        {id: 5, path: "/cherry", name: "вишня"},
        {id: 6, path: "/rowan", name: "рябина"},
        {id: 7, path: "/willow", name: "ива"},
        {id: 8, path: "/nut", name: "орех"},
        {id: 9, path: "/juniper", name: "можже-вельник"},
        {id: 10, path: "/alder", name: "ольха"},
        {id: 11, path: "/tree", name: "ель"},
        {id: 12, path: "/aspen", name: "осина"}],
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