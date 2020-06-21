import Items from './Items';
import {connect} from "react-redux";
import {newSoulPathAC} from "../../Redux/items-reducer";
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {

        let currentSoul;
        let path = state.sidebar.currentPath;
        let soulPath = state.items.currentSoulPath;

         switch (path) {
            case '/oak':
                currentSoul = state.items.oak;
                break;
            case '/ash':
                currentSoul = state.items.ash;
                break;
            case '/alder':
                currentSoul = state.items.alder;
                break;
             case '/appletree':
                 currentSoul = state.items.appletree;
                 break;
             case '/aspen':
                 currentSoul = state.items.aspen;
                 break;
             case '/cherry':
                 currentSoul = state.items.cherry;
                 break;
             case '/birchtree':
                 currentSoul = state.items.birchtree;
                 break;
             case '/juniper':
                 currentSoul = state.items.juniper;
                 break;
             case '/nut':
                 currentSoul = state.items.nut;
                 break;
             case '/rowan':
                 currentSoul = state.items.rowan;
                 break;
             case '/tree':
                 currentSoul = state.items.tree;
                 break;
             case '/willow':
                 currentSoul = state.items.willow;
                 break;
             default: currentSoul = state.items.oak ;
        }
        return {
            soul: currentSoul,
            soulPath: soulPath,
            path: path
        }
    };


let mapDispatchToProps = (dispatch) => {

    return {
        newSoulPath: (path) => {

            dispatch(newSoulPathAC(path));
        }
    }
};

let WithRouterItems = withRouter(Items)

const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterItems);

export default ItemsContainer;
