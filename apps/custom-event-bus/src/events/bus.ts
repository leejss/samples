import mitt from 'mitt'

export type ModalEvents = {
    openModal: 'success' | 'error' | undefined
}

export const ModalMitt = mitt<ModalEvents>()
