import React, { useEffect, useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import { isEmpty, uniqueId } from "lodash"

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
    if (navigation === "globale") {
      return setName("");
    }

    if (navigation === "epci" && !isEmpty(epci) && epci?.nom !== name) {
      return setName(epci?.nom);
    }

    if (navigation === "commune" && !isEmpty(commune) && commune?.nom !== name) {
      return setName(commune?.nom);
    }
    if (isEmpty(epci) && isEmpty(commune)) {
      setName("Choisir un territoire");
    }
  }, [epci?.nom, commune?.nom, navigation])

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
        {/* Insertt temporal switch HERE */}
      </div>
    </div>
  )
}

export default TitreBox
