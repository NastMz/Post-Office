import React from "react";
import './SendMailBox.css';

interface Props {
    name: string,
    email: string,
}

export const SendMailBox: React.FC<Props> = ({name, email}) => {

return (
    <div className={`mail-box`}>
        <div className={'mail-box-header'}>
            <div className={'mail-box-title'}>
                Mensaje nuevo
            </div>
            <div className={'mail-box-btns'}>
                <i className={'fa fa-minus'}></i>
                <i className={'fa fa-x'}></i>
            </div>
        </div>
        <form className={`mail-form`}>
            <div className={'mail-box-body'}>
                <div className={`to-box`}>
                    <input type={'email'} placeholder={'Para'}/>
                </div>
                <div className={`subject-box`}>
                    <input type={'text'} placeholder={'Asunto'}/>
                </div>
                <div className={`message-box`}>
                    <textarea></textarea>
                </div>
                <div className={`btns-box`}>
                    <div className={'send-btn'}>
                        <span>Send</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
)
};