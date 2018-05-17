import React from 'react';

const Services = {
  type: [
    {
      service:'Mani',
      level: [
        {
          name: 'Basic',
          price: '$12'
        }, 
        { 
          name: 'Mini Luxe',
          price: '$15'
        }, 
        {
          name:'Luxe',
          price: '$20'
        }, 
        {
          name: 'Royal',
          price: '$25'
        }, 
        {
          name: 'Gel Manicure',
          price: '$30'
        }
      ]
    },
    {
      service:'Pedi',
      level: [
        {
          name: 'Basic',
          price: '$20'
        }, 
        { 
          name: 'Mini Luxe',
          price: '$27'
        }, 
        {
          name:'Luxe',
          price: '$35'
        }, 
        {
          name: 'Royal',
          price: '$40'
        }
      ]
    },
    {
      service:'Combos',
      level: [
        {
          name: 'Basic',
          price: '$30'
        }, 
        { 
          name: 'Mini Luxe',
          price: '$40'
        }, 
        {
          name:'Luxe',
          price: '$50'
        }, 
        {
          name: 'Royal',
          price: '$60'
        }
      ]
    }
  ]
}

export default Services