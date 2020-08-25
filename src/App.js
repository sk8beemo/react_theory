import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2010'}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})
  }

  // changeTitleHandler = (newTitle) => {   
  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // }

  // hanldeInput = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    // let cars = null

    // if (this.state.showCars) {
    //   cars = this.state.cars.map((car, index) => {
    //     return (
    //       <Car
    //         key={index}
    //         name={car.name}
    //         year={car.year}
    //         onChangeTitle={() => this.changeTitleHandler(car.name)}
    //       />
    //     )
    //   })
    // }

    return (
      <div style={divStyle} className="App">
        <h1>{this.state.pageTitle}</h1> 

        {/* <input type="text" onChange={this.hanldeInput}></input> */}

        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        { this.state.showCars 
            ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onDelete = {this.deleteHandler.bind(this, index)}
                  onChangeName={event => this.onChangeName(event.target.value, index)}
                />
              )
            })
            : null
        }

        {/* { this.state.showCars 
            ? this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() => this.changeTitleHandler(car.name)}
                />
              )
            })
            : null
        } */}

        {/* {cars} */}

        {/* <Car 
          name={cars[0].name} 
          year={cars[0].year} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        /> */}
      </div>
    );
  }
}

export default App;
