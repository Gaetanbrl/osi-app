
import React, { Component } from 'react';
import { Button, Panel, PanelGroup, ResponsiveEmbed } from 'react-bootstrap';

export default class Rapport extends Component {
  
  render() {
    const pdf =(
      <small className="text-muted"><b>Citation :</b> Marcel O., <i>Prototypage d'une interface WEB-SIG pour l'Observatoire Intégré des Risques Côtiers</i>, Master 2 Carthagéo : Université Panthéon-Sorbonne / Université Paris-Diderot / ENSG (Brest, 2017), 64p.
      <Button 
        bsSize="xsmall"
        bsStyle="danger"  
        className="glyphicon glyphicon-save-file pull-right"
        href="http://localhost:3001/md/osi.pdf">
        PDF</Button>
      </small>
      );

    const panelGroupInstance = (
      <PanelGroup defaultActiveKey="0" accordion>
        <Panel 
        header="Documentation sur le prototypage (cliquer pour ouvrir)" 
        footer={ pdf }
        bsStyle="info" 
        eventKey="1">
          <div style={{width: '100%', height: '100%'}}>
            <ResponsiveEmbed a16by9>
              <embed 
              type="html" 
              src="http://localhost:3001/md/osi.html" />
            </ResponsiveEmbed>
          </div>

        </Panel>
      </PanelGroup>
    );

    return(
      <div>
        
        { panelGroupInstance }
      </div>
    )
  }
}

