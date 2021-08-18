import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Planetary Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-14.jpg'
              text='Explore the harsh deserts on Mars'
              label='Exploring'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Travel through the waters of Uranus on a SpaceBoat™'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Look through the telescopes on neptune and maybe find Planet X'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Race the SpaceRover across Pluto'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Relax and get a nice tan on Mercury'
              label='Relaxing'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards