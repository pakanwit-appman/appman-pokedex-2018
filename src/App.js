import React, { Component } from 'react'
import * as R from 'ramda'
import './App.css'
import {
  Header,
  Footer,
  Content,
  Modal
} from './components'
import { getPokedexData, searchPokedexData } from './service'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  state = {
    isOpen: false,
    search: '',
    pokedex: [],
    myPokedex: [],
  }

  handleOpenListPokedex = () => {
    this.setState({ isOpen: true })
  }

  handleAddPokedex = (value) => {
    const { myPokedex, pokedex } = this.state
    // console.log('value', value, myPokedex, pokedex, myPokedex.concat(value))
    const filterPokedexSelected = R.filter(v => v.id !== value.id)(pokedex)
    this.setState({
      myPokedex: myPokedex.concat(value),
      pokedex: filterPokedexSelected
    })
  }
  handleOnClose = (e) => {
    if (e.target.className === 'modal') {
      this.setState({ isOpen: false })
    }
  }

  handleSearchPokedex = async (e) => {
    const value = e.target.value
    // this.setState({ search: value })
    const pokedesData = await searchPokedexData(value)
    this.setState({ pokedex: R.pathOr([], ['data', 'cards'], pokedesData) })
  }
  handleRemove = (value) => {
    const { myPokedex, pokedex } = this.state
    const filterPokedexSelected = R.filter(v => v.id !== value.id)(myPokedex)
    this.setState({
      myPokedex: filterPokedexSelected,
    })
  }
  async componentDidMount() {
    const pokedesData = await getPokedexData()
    this.setState({ pokedex: R.pathOr([], ['data', 'cards'], pokedesData) })

  }

  render() {
    const { isOpen, pokedex, myPokedex } = this.state
    return (
      <div className="App">
        <Header />
        <Content myPokedex={myPokedex} onRemove={this.handleRemove} isShowRemove={true} />
        <Footer
          onClick={this.handleOpenListPokedex}
        />
        {
          isOpen && <Modal
            closeModal={this.handleOnClose}
            data={pokedex}
            onSearch={this.handleSearchPokedex}
            onAdd={this.handleAddPokedex} />
        }
      </div>
    )
  }
}

export default App
