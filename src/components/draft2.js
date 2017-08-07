




import React, { Component } from 'react';
import Indicateur from "./Indicateur";


export default class Compo extends Component {
  
  render() {

    const dbliste = this.props.dbfiche.map((obj, idx) => {
      if (obj.composante ===  this.props.comp) { 
        return (
          <tbody>
          <tr key={idx}>      
            <td>
              <Indicateur 
              id={obj.id}
              acronyme={obj.acronyme}
              theme={obj.theme} 
              composante={obj.composante}
              objet={obj.objet}
              description={obj.description}
              />
            </td>
          </tr>
          </tbody>
        )}})

    return (

      {dbliste}
      )
    }
  }








import React, { Component } from 'react';
import Indicateur from "./Indicateur";


export default class Compo extends Component {
  
  render() {

    const dbliste = this.props.dbfiche

    dbliste.map((obj, idx) => {
        return (
          <tr key={idx}>      

            <Indicateur 
            id={obj.id}
            acronyme={obj.acronyme}
            theme={obj.theme} 
            composante={obj.composante}
            objet={obj.objet}
            description={obj.description}
            />

          </tr>

    return (

        )
      })
    ) 
  }
}
