import React, { useEffect, useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import { uniqueId } from "lodash"

const TitreBox = ({ isSidebar, setRef, territoire, onShowEPCIClick, onChangeNavigationClick }) => {
  const commune = territoire.comm
  const epci = territoire.epci
  const [navigation, setNavigation] = useState("globale")
  const [name, setName] = useState("Choisir un territoire")
  
	const clickNavBtn = (mode) => {
    setNavigation(mode)
    onChangeNavigationClick(mode)
		switch(mode){
			case "commune":
				return onShowEPCIClick(false)
			case "epci": 
        return onShowEPCIClick(true)
			default:
			  return
		  }
  }
  // avoid inifinity loop
  useEffect(() => {
    let newName = name;
    if (!commune || !epci) {
      newName = "Chosir un territoire";
    } else if (navigation === "epci" && epci?.nom) {
      newName = epci.nom
    } else if (commune && commune?.nom) {
      newName = commune.nom
    }
    if (name !== newName) {
      setName(newName);
    }
  }, [epci?.nom, commune?.nom])

	const navigations = [{
    label: "commune",
    activate: false,
		click: () => clickNavBtn("commune")
	}, {
    label: "epci",
    activate: false,
		click: () => clickNavBtn("epci")
	}, {
    label: "globale",
    activate: true,
		click: () => clickNavBtn("globale")
	}]

  return (
    <div id="sidebar-title">
      <div>{name}</div>
      <div>
        <ButtonGroup className="nav-btn-group" aria-label="">
          {navigations.map((mode) => (
            <Button
              key={uniqueId() + "-" + mode}
              variant="primary"
              className={navigation === mode.label ? "active" : ""}
              onClick={mode.click}>
              {mode.label.toLowerCase()}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  )
}

export default TitreBox
