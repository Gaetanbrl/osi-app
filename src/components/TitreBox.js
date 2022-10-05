import React from "react"
const TitreBox = ({
  enableTimeCompare,
  onTimeCompareChange,
  timeActivated
}) => {

  const handleTimeSwitch = (v) => {
    onTimeCompareChange(v.target.checked);
  }
  
  if (!enableTimeCompare) return null;
  return (
    <div id="sidebar-title" className="d-none d-md-block">
      <div>
          <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleTimeSwitch} checked={timeActivated} />
            <label className="form-check-label" for="flexSwitchCheckDefault">Comparaison temporelle</label>
          </div>
      </div>
    </div>
  )
}

export default TitreBox
