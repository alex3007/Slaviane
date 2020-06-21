import React from 'react';
import {addMessageActionCreator,updateNewMessageActionCreator} from "../../Store/FeedbackReduser";
import FeedbackPage from './FeedbackPage';

const FeedbackPageContainer = (props) => {
    let onAddMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let onFeedbackChange = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    };
    return ( <FeedbackPage onAddMessage={onAddMessage}
                           onFeedbackChange={onFeedbackChange}
                           feedbacks={props.state.feedbacks} /> )
}
export default FeedbackPageContainer;