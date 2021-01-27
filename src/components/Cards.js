import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/reactjs.png'
              text='React Responsive Website- portfolio'
              path='/Des1'
            />
            <CardItem
              src='assets/deeplearning.jpg'
              text='Mecanum Wheel Bot - Object detection and depth Estimation'
              path='/Des2'
            />
            <CardItem
              src='assets/machinelearning.jpg'
              text='Stock Price Prediction - Machine Learning'
              path='/Des3'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='assets/matlab.png'
              text='Distributed traffic light System'
              path='/Des4'
            />
            <CardItem
              src='assets/neuralnetwork.png'
              text='Image Captioning'
              path='/Des5'
            />
            <CardItem
              src='assets/labview.png'
              text='Realtime data monitoring of Solar Cell'
              path='/Des6'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;