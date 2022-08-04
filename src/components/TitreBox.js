import React, { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import Toogle from "react-bootstrap-toggle"

const TitreBox = ({ isSidebar, setRef, territoire, onShowEPCIClick }) => {
  const c = territoire.comm
  const e = territoire.epci
	const [navigation, setNavigation] = useState("")
	const clickNavBtn = (isEpci, mode) => {
		setNavigation(mode)
		switch(mode){
			case "commune":
				return onShowEPCIClick(false)
			case "epci": 
			  return onShowEPCIClick(true)
			default:
			  return setNavigation("")
		  }
	}
	const navigations = [{
		label: "commune",
		click: () => clickNavBtn(false, "commune")
	}, {
		label: "epci",
		click: () => clickNavBtn(true, "epci")
	}]

  if (isSidebar) {
    let t
    if (!c) {
      t = "Choisir un territoire"
    } else if (territoire && territoire.showEPCI === true && e && e.nom) {
      t = e.nom
    } else if (c && c.nom) {
      t = c.nom
    }
	
    return (
      <div id="sidebar-title">
        <div>{t}</div>
        {setRef && (
          <div>
            {/* <Toggle
              onClick={() => onShowEPCIClick(!territoire.showEPCI)}
              on="ON"
              off="OFF"
              size="xs"
              onstyle="default"
              offstyle="danger"
              active={territoire.showEPCI}
            /> */}
            <ButtonGroup className="nav-btn-group" aria-label="">
              {navigations.map((mode) => (
				  <Button
					  variant="primary"
					  className={navigation === mode.label ? "active" : ""}
					  onClick={mode.click}>
					  {mode.label.toLowerCase()}
				  </Button>
              ))}
            </ButtonGroup>
          </div>
        )}
      </div>
    )
  }

  return <div id="comm-title">{c && c.nom}</div>
}

export default TitreBox
