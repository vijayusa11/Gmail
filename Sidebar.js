import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import './SidebarOption.css'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const his = useHistory();
    const dispatch = useDispatch();
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon className='sidebar__addIcon' fontSize='large' />} className='sidebar__compose'
            onClick={() => dispatch(openSendMessage())} >Compose</Button>
            <div onClick={() => his.push('/')}><SidebarOption  Icon={InboxIcon} title='Inbox' number={345} selected={true} /></div>
            <SidebarOption Icon={StarIcon} title='Starred' number={12}  />
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={4} />
            <SidebarOption Icon={LabelImportantIcon} title='Important' number={1} />
            <SidebarOption Icon={NearMeIcon} title='Sent' number={10} />
            <SidebarOption Icon={NoteIcon} title='Drafts' number={3} />
            <SidebarOption Icon={ExpandMoreIcon} title='More' number={4} />
            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton><PersonIcon /></IconButton>
                    <IconButton><DuoIcon /></IconButton>
                    <IconButton><PhoneIcon /></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
