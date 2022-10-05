import React, { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import { uniqueId } from "lodash"
export default function Indic({
  currentIndic, setCompo, onClick=() => {}, niveau2, niveau1, ableList, territoire
}) {
  const [activeKey, setActiveKey] = useState("")


  const accordionHeaderToggle = (i) => {
    const target = activeKey === i.id ? null : i.id;
    setActiveKey(target)
    onClick(target ? i.id : setCompo)
  }

  useEffect(() => {
    currentIndic === setCompo ? setActiveKey(null) : null;
  }, [currentIndic])

  return (
    <div className="submenu">
      <Accordion activeKey={activeKey}>
        {niveau2.map((i2) => (
          <Accordion.Item  eventKey={i2.id} key={i2.id}>
            <Accordion.Header onClick={() => accordionHeaderToggle(i2)}>
              {i2.description}
            </Accordion.Header>
            <Accordion.Body>
              <div className="sub-list">
                {niveau1
                  .filter((i1) => i1.thematique === i2.acronyme)
                  .map((i1, idx) => (
                    <div
                      key={uniqueId() + "-" + idx}
                      className={`submenu-link ${
                        currentIndic === i1.id ? "active" : ""
                      }`}
                      onClick={() => {
                        ableList.includes(i1.id)
                        onClick(i1.id)
                      }}
                      disabled={territoire.com ? !ableList.includes(i1.id) : false}
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
