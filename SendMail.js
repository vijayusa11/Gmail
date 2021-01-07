import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux'
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (formData) => {
        // alert(JSON.stringify(formData));
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage())
    }
    const dispatch = useDispatch();
    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close' onClick={() => dispatch(closeSendMessage())}/>
            </div>    
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name='to' placeholder='To' type='email' ref={register({required: true, maxLength: 80})} />
                        {errors.to && <p className='sendMail__error'>To is required</p>}
                    <input name='subject' placeholder='Subject' type='text' ref={register({required: true, maxLength: 80})}/>
                        {errors.subject && <p className='sendMail__error'>Subject is required</p>}
                    <input name='message' placeholder='Message' type='text' className='sendMail__message' ref={register({required: true, maxLength: 80})}/>
                        {errors.message && <p className='sendMail__error'>Message is required</p>}
                    <div className='sendMail__options'>
                        <Button type='submit' className='sendMail__send'>Send</Button>
                    </div>
                </form>
            
        </div>
    )
}

export default SendMail
