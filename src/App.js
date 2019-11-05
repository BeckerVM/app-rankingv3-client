import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/test/test').then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            APP RANKING V3
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
