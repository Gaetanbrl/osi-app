import React, { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
export default function Indic({ currentIndic, setCompo, ...props }) {
  const [activeKey, setActiveKey] = useState("")

  // detect on component refresh
  useEffect(() => {
    console.log(setCompo);
    console.log(currentIndic);
    if (setCompo === currentIndic) {
      setActiveKey(null)
    }
  }, [currentIndic, setCompo])

  const accordionHeaderToggle = (i) => {
    const target = activeKey === i.id ? null : i.id
    setActiveKey(target)
    props.onClick(target ? i.id : setCompo)
  }

  return (
    <div className="submenu">
      <Accordion>
        {props.niveau2.map((i2) => (
          <Accordion.Item eventKey={i2.id}>
            <Accordion.Header onClick={() => accordionHeaderToggle(i2)}>
              {i2.description}
            </Accordion.Header>
            <Accordion.Body>
              <div className="sub-list">
                {props.niveau1
                  .filter((i1) => i1.thematique === i2.acronyme)
                  .map((i1) => (
                    <div
                      className={`submenu-link ${
                        currentIndic === i1.id ? "active" : ""
                      }`}
                      onClick={() => {
                        props.ableList.includes(i1.id)
                        props.onClick(i1.id)
                      }}
                      disabled={!props.ableList.includes(i1.id)}
                    >
                      <span>{i1.nom}</span>
                    </div>
                  ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
