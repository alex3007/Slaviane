import React from 'react';

const Message = (props) => {

    let userId = props.id;
    let messageText = props.message;
    return (
        <div>
            <p>Отзыв {userId}: {messageText}</p>
        </div>
    )
}
export default Message;