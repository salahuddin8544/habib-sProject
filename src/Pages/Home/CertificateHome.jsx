import React from 'react'
import { BsCurrencyDollar, BsHandThumbsUp, BsPersonFill } from 'react-icons/bs'
import SingleCertificateHome from './SingleCertificateHome'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'
import { Col } from 'react-bootstrap'
import laptop from  '../../assets/home-image/laptop.webp'
const CertificateHome = () => {

  return (
    <div className='mx-auto py-4 certificate'>
        <Container>
            <Row>
                <Col>
                    <img className='img img-fluid h-75' src={laptop} alt="" />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </div>
  )
}

export default CertificateHome