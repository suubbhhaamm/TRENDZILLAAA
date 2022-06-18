import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div className="headerBackColor">
        <footer>
          <Container >
            <Row>
              <Col className="text-center py-3" style={{color: "white"}}>Copyright &copy; Trendzilla</Col>
              
            </Row>
            <Row>
              <Col className="text-center py-3" style={{color: "white",bottom: "25px"}}>Help and Support - trendzilla@support.co.in</Col>
              
            </Row>
          </Container>
        </footer>
    </div>
  )
}

export default Footer