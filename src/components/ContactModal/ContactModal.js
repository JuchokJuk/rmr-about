import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { showContactModal, toggleScrollLock } from '@store/modals/modalsAction'

import ReactModal from 'react-modal';
import ContactForm from './ContactForm/ContactForm';

const ContactModal = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        if (typeof (window) !== 'undefined') {
            ReactModal.setAppElement('body')
        }
    }, [])

    let showModal = useSelector((state) => state.modals.contact).isOpen

    const contactClickHandler = () => {
        dispatch(showContactModal(!showModal))
        dispatch(toggleScrollLock(false))
    }

    return (     
        <ReactModal isOpen={showModal}
            className="contact_modal"
            closeTimeoutMS={300}
            overlayClassName="contact_modal--overlay">
                
            <ContactForm toggleFunc={contactClickHandler} />
        </ReactModal> 
    )
}



export default ContactModal