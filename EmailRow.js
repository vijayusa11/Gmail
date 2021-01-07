import React from 'react'
import './EmailRow.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import selectMail from './features/mailSlice'

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time
        })
        );
        history.push('/mail');
    };
    return (
        <div className='emailRow'>
            <div className='emailRow__options'>
                <IconButton><CheckBoxOutlineBlankIcon /></IconButton>
                <IconButton><StarBorderIcon /></IconButton>
                <IconButton><LabelImportantIcon /></IconButton>
            </div>
            <div className='emailRow__title'>
                <h3>{title}</h3>
            </div>
            <div className='emailRow__message'>
                <h4>{subject} - 
                    <span className='emailRow__description'> {description}</span>
                </h4>
            </div>
            <div className='emailRow__time'>
                {time}
            </div>
        </div>
    )
}

export default EmailRow
