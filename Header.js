import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import {useDispatch} from 'react-redux'

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton><MenuIcon /></IconButton>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='papa' />
            </div>
            <div className='header__middle'>
                <SearchIcon />
                <input placeholder='Search mail' type='text'/>
                <ArrowDropDownIcon className='header__inputCare' />
            </div>
            <div className='header__right'>
                <IconButton><HelpOutlineIcon /></IconButton>
                <IconButton><SettingsIcon /></IconButton>
                <IconButton><AppsIcon /></IconButton>
                <Avatar className='header__avatar' onClick={signOut} src={user?.photoURL} />
            </div>
            
        </div>
    )
}

export default Header
