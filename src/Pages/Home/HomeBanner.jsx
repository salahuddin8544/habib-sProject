import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsChevronDoubleRight, BsFillPlayCircleFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className='home-background-overlay'>
              <div className='' style={{backgroundColor:'rgb(52, 71, 77,0.8)'}}>
              <Container className='py-4'>
              <Row>
                  <Col lg={7}>
                    <h4 className='custom-waring-color text-bold'>BirleyJakeman</h4>
                      <h1 className='text-white'>Land Acquisition <span className='custom-waring-color'>&</span> Property Development<span className='custom-waring-color'>.</span></h1>
                      <span class="custom-br my-4"></span>
                      <p className='text-white text-bold'>Birley Jakeman is a highly respected property development and investment company with projects spread across the UK. We specialise in acquiring land and working in close collaboration with architects, commissioners, care providers and social landlords to maximise the potential of the land.</p>
                      <button className='border-none'>Get In Touch Today</button>         
                  </Col>
                  <Col lg={5}>
                    <div className='p-4 mt-4' style={{borderLeft:'1px solid #A3C43D'}}>
                        <div>
                           <Link className='text-white font-weight-bold '>About Us <BsChevronDoubleRight style={{color:'#A3C43D'}} /></Link>
                           <span class="custom-br my-4"></span>
                        </div>
                        <div>
                           <Link className='text-white font-weight-bold '>Land & Property To Sell? <BsChevronDoubleRight style={{color:'#A3C43D'}} /></Link>
                           <span class="custom-br my-4"></span>
                        </div>
                        <div>
                           <Link className='text-white font-weight-bold '>Get In Touch <BsChevronDoubleRight style={{color:'#A3C43D'}} /></Link>
                           <span class="custom-br my-4"></span>
                        </div>
                    </div>
                  </Col>
              </Row>
              </Container>
          </div>
      </div>
  )
}

export default HomeBanner