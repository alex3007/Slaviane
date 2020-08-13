let initialState = {
    trees: [
        {id: 1, path: "/oak", name: "Дуб"},
        {id: 2, path: "/birchtree", name: "Береза"},
        {id: 3, path: "/ash", name: "Ясень"},
        {id: 4, path: "/willow", name: "Ива"},
        {id: 5, path: "/alder", name: "Ольха"},
        {id: 4, path: "/tree", name: "Ель"}],
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