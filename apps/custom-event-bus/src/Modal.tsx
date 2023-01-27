import { Modal as NextModal } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { ModalEvents, ModalMitt } from './events/bus'

const Modal = () => {
    const [modalType, setModalType] = useState<ModalEvents['openModal']>()

    const closeModal = () => {
        ModalMitt.emit('openModal', undefined)
    }

    useEffect(() => {
        const openModal = (type: ModalEvents['openModal']) => {
            setModalType(type)
        }
        ModalMitt.on('openModal', openModal)

        return () => {
            ModalMitt.off('openModal')
        }
    }, [])

    if (!modalType) return null
    return (
        <NextModal
            open={modalType !== undefined}
            closeButton
            onClose={closeModal}>
            <NextModal.Header>
                {modalType === 'error' && <h1>ERROR!</h1>}
                {modalType === 'success' && <h1>SUCCESS!</h1>}
            </NextModal.Header>
        </NextModal>
    )
}

export default Modal
