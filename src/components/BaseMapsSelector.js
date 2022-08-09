import React, { useEffect, useState } from "react"
import { Card, Button, Form, Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { set, uniqueId } from "lodash"
import { getFirstVisibleLayer } from "../containers/utils/basemaps"

const customFontIconStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
}
export default function BaseMapsSelector({ map, layers, show, updateShow = () => {} }) {
    const [selected, setSelected] = useState("")
    const [visible, setVisible] = useState(show)
    // refresh component if visible or map change
    useEffect(() => {
        updateShow(visible);
        if (!visible || !map) return
        const firstVisible = getFirstVisibleLayer(map.getLayers())
        setSelected(firstVisible ? firstVisible.get("name") : null)
    }, [visible, map])
    
    useEffect(() => {
        if (!show) {
            setVisible(show);
        }
    }, [show])

    const updateOpacity = (x) => {
        const opacity = parseFloat(x.target.value)
        layers.forEach((layer) => {
            layer.setOpacity(opacity / 100)
        })
    }

    // refresh component on layer selected change
    useEffect(() => {
        if (!selected) return
        layers.forEach((layer) => {
            layer.setVisible(false)
            if (layer.get("name") === selected) {
                layer.setVisible(true)
            }
            console.log(
                process.env.PUBLIC_URL +
                "/" +
                layer.getProperties().preview);
        })
    }, [selected])

    return (
        <>
            <Button
                id="baseMapsSelector"
                variant="primary"
                onClick={() => setVisible(!visible)}
            >
                <FontAwesomeIcon
                    icon={faLayerGroup}
                    style={customFontIconStyle}
                />
            </Button>
            {visible && (
                <Container id="baseLayerPreviewer">
                    <Col className="opacity-container">
                        <Form.Label>Opacité</Form.Label>
                        <Form.Range onChange={updateOpacity} />
                    </Col>
                    <Col className="basemapItems">
                        {layers.map((layer) => (
                            <Card
                                key={uniqueId()}
                                onClick={() =>
                                    setSelected(layer.getProperties().name)
                                }
                                className={
                                    selected === layer.getProperties().name
                                        ? "active"
                                        : ""
                                }
                            >
                                <Card.Img
                                    variant="top"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/" +
                                        layer.getProperties().preview
                                    }
                                />
                                <Card.Body>
                                    <span className="text-center">
                                        {layer.getProperties().name}
                                    </span>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Container>
            )}
        </>
    )
}
