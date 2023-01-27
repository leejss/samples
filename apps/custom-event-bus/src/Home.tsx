import { ModalMitt } from './events/bus'
import { Button, Container } from '@nextui-org/react'

const Home = () => {
    return (
        <Container>
            <h1>Home Page</h1>
            <div className='flex gap-2'>
                <Button
                    color='success'
                    onClick={() => {
                        ModalMitt.emit('openModal', 'success')
                    }}>
                    Success
                </Button>
                <Button
                    color='error'
                    onClick={() => {
                        ModalMitt.emit('openModal', 'error')
                    }}>
                    Error
                </Button>
            </div>
        </Container>
    )
}

export default Home
