import React, { Component } from 'react'
import {data} from './Caet/data'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            object:data
        }
    }
  render() {
    const onSearch=(e)=>{
        const {value}=e.target
        const res = data.filter(({name})=>name.toLowerCase().includes(value.toLowerCase()))
        this.setState({object:res})
        
    }
    const onsearchCount=(e)=>{
        const {value}=e.target
        const res = data.filter(({country})=>country.toLowerCase().includes(value.toLowerCase()))
        this.setState({object:res})
        
    }
    return (
      <div className='tuplam'>

<input onChange={onSearch} type="text" placeholder='Search...' />
<input onChange={onsearchCount} type="text" placeholder='count' />

{
    this.state.object.map(({id,name,surname,country})=>{
        return(
            <ul key={id}>
                <li>{id}</li>
                <li>{name}</li>
                <li>{surname}</li>
                <li>{country}</li>
            </ul>
        )
    })
}

      </div> 
    )
  }
}