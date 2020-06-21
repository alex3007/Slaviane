import React from 'react';
import cls from './FeedbackPage.module.css';
import Message from './Message/Message';

const FeedbackPage = (props) => {
    let newFeedbackElement = React.createRef();
    let feedbackElements = props.feedbacks
        .map(message => <Message id={message.id} message={message.message}/>)
    let onAddMessage = () => {
        props.onAddMessage()};
    let onFeedbackChange = () => {
        let text = newFeedbackElement.current.value;
        props.onFeedbackChange(text);
    };
    return (
        <div className={cls.feedback}>
            <div className={cls.messageBlock}>
                <h3 className={cls.title}>Оставить отзыв:</h3>
                <textarea onChange={onFeedbackChange}
                          className={cls.textArea}
                          ref={newFeedbackElement}
                          value={props.feedbacks.newMessageText}/>
                <div>
                    <button onClick={onAddMessage} className={cls.buttonAddFeedback}>Отправить</button>
                </div>
            </div>
            <div className={cls.messageTextBlock}>
                {feedbackElements}
            </div>
        </div>
    )
}
export default FeedbackPage;