import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <FontAwesomeIcon icon="check-square" /> Home Page
            </Container>
        )
    }
}

export default HomePage
