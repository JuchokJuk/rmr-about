import { toggleEmailingModal } from "@store/modals/modalsAction"
import { useDispatch, useSelector } from "react-redux"
import MailingList from "@components/MailingList"
import CrossSvg from "@assets/Common/cross.svg"
import CrossSmallSvg from "@assets/Common/crossSmall.svg"
import CrossTinySvg from "@assets/Common/crossTiny.svg"
import ReactModal from "react-modal"
import "./EmailingModal.less"
import { formTypesApi } from "@api/constants"

const EmailingModal = () => {
    const showModal = useSelector((state) => state.modals.emailing.isOpen)
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(toggleEmailingModal(!showModal))
    }
    const type = formTypesApi.mailingListHeader
    return (
        <ReactModal
            isOpen={showModal}
            className="contact_modal"
            closeTimeoutMS={300}
            overlayClassName="contact_modal--overlay"
        >
            <div className="emailing-modal">
                <div className="emailing-modal__close" onClick={closeModal}>
                    <CrossSvg className="cross cross--big" />
                    <CrossSmallSvg className="cross cross--medium" />
                    <CrossTinySvg className="cross cross--small" />
                </div>
                <div className="emailing-modal__content">
                    <MailingList
                        type={type}
                        labelGA="NewsletterSubscribeHeader"
                    />
                </div>
            </div>
        </ReactModal>
    )
}

export default EmailingModal
