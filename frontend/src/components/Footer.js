import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col className='py-3'>
            &copy; <a href='https://www.nicolasvallee.dev'>Nicolas Vallée</a>
          </Col>
          <Col className='py-3 text-right'>
            <div
              className='d-flex justify-content-end'
              style={{ fontSize: '1.125rem' }}
            >
              <a
                href='https://www.linkedin.com/in/nvallee/'
                className='d-block ml-3'
              >
                <i class='fab fa-linkedin-in'></i>
              </a>
              <a
                href='https://github.com/nva12/mern-proshop'
                className='d-block ml-3'
              >
                <i class='fab fa-github'></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
