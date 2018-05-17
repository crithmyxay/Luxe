import React from 'react';
import Services from './Services'

const Prices = props => {
  const servicePrice = () => {
    let servType = []
    let servName = []
    let servCost = []
    Services.type.map((serv)=> {
      servType.push(<th>{serv.service}</th>)
      serv.level.map((stuff)=> {
        servName.push(stuff.name)
        servCost.push(stuff.price)
      })
    })
    console.log(servType)
    console.log(servName)
    console.log(servCost)
  }
  servicePrice();
  return (  
    <table className="table table-hover table-sm" id='table'>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Mani</th>
          <th scope="col">Pedi</th>
          <th scope="col">Combos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Basic</th>
          <td>$12</td>
          <td>$20</td>
          <td>$30</td>
        </tr>
        <tr>
          <th scope="row">Mini Luxe</th>
          <td>$15</td>
          <td>$27</td>
          <td>$40</td>
        </tr>
        <tr>
          <th scope="row">Luxe</th>
          <td>$20</td>
          <td>$35</td>
          <td>$50</td>
        </tr>
        <tr>
          <th scope="row">Royal</th>
          <td>$25</td>
          <td>$40</td>
          <td>$60</td>
        </tr>
        <tr>
          <th scope="row">Gel Mani</th>
          <td>$30</td>
          <td>Polish <strong>Only</strong> $20</td>
          <td>+$15 with any combo/acrylics</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Prices
