import React from 'react';
import cls from './ContactPage.module.css';

const ContactPage =(props) => {

    return(
        <div className={cls.contactsBlock}>
            <h4>Контакты</h4>
            <hr/>
            <ul className={cls.contacts}>
                <li><b>Телефон:</b> +375(xx)xxx-xx-xx </li>
                <li><b>Почта:</b> xxxxx@pizza.by </li>
                <li><b>Адрес:</b> г. Минск, Хмельницкого, 9 </li>
            </ul>
        </div>
    )
}

export default ContactPage;