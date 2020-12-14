import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Banner = () => {
  return (
    <Card className='mb-4 fluid'>
      <Card.Body className='d-flex flex-row flex-wrap justify-content-center pb-0'>
        <span>
          <img
            src='/images/logos/react.svg'
            alt='React Logo'
            className='mx-2 my-1'
            style={{ height: '70px' }}
          />
          <img
            src='/images/logos/redux.svg'
            alt='Redux Logo'
            className='mx-2 my-1'
            style={{ height: '55px' }}
          />
          <img
            src='/images/logos/bootstrap.svg'
            alt='Bootstrap Logo'
            className='mx-2 my-1'
            style={{ height: '50px' }}
          />
        </span>
        <span className='text-center'>
          <img
            src='/images/logos/nodejs.svg'
            alt='NodeJS Logo'
            className='mx-2 my-1'
            style={{ height: '60px' }}
          />
          <img
            src='/images/logos/expressjs.svg'
            alt='Express Logo'
            className='mx-2 my-1'
            style={{ height: '4rem' }}
          />
        </span>
        <span>
          <img
            src='/images/logos/mongoDB.png'
            alt='MongoDB Logo'
            className='mx-2 my-1'
            style={{ height: '55px' }}
          />
        </span>
        <span>
          <img
            src='/images/logos/paypal.jpg'
            alt='PayPal Logo'
            className='mx-2 my-1'
            style={{ height: '50px' }}
          />
        </span>
      </Card.Body>
      <Card.Body className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <Card.Title className='my-2 ml-3 text-center'>
          <h4 className='mb-0'>
            Demo e-commerce app built from scratch on the MERN stack
          </h4>
        </Card.Title>
        <a
          href='https://github.com/nva12/mern-proshop'
          title='View Source Code on GitHub'
          className='my-2 ml-1'
        >
          <Button variant='light' size='sm'>
            <i className='fab fa-github' style={{ fontSize: '2rem' }}></i>
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Banner;
