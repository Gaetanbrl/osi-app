import React, { useEffect, useState } from "react"
import { Card, Button, Form, Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { set, uniqueId } from "lodash"
import { getFirstVisibleLayer } from "../containers/utils/basemaps"

import ResponsiveModal from "./ResponsiveModal";

import { getLayerByName } from "../containers/utils/carto";

const customFontIconStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
}
export default function BaseMapsSelector({
    responsiveModal, changeModal, map, timeMap, layers = [], layersCompare = [], show, updateShow = () => { }
}) {
    const [selected, setSelected] = useState("")
    const [visible, setVisible] = useState(show)
    const [opacity, setOpacity] = useState(1)
    // refresh component if visible or map change
    useEffect(() => {
        updateShow(visible);
        if (!visible || !map) return
        const firstVisible = getFirstVisibleLayer(map.getLayers())
        setSelected(firstVisible ? firstVisible.get("name") : null)
        changeModal("basemap");
    }, [visible, map, timeMap])
    
    useEffect(() => {
        if (!show) {
            setVisible(show);
        }
    }, [show])

    const updateOpacity = (x) => {
        const opacity = parseFloat(x.target.value);
        [...layers, ...layersCompare].forEach((layer) => {
            layer.setOpacity(opacity / 100)
        })
        setOpacity(opacity);
    }

    // refresh component on layer selected change
    useEffect(() => {
        if (!selected) return
        let newOpacity = 0;
        const withLayer = [];
        [...layers, ...layersCompare].forEach((layer) => {
            layer.setVisible(false)
            if (layer.get("name") === selected) {
                layer.setVisible(true);
                if (layer.getProperties().with) {
                    withLayer.push(layer.get("with"));
                }
                newOpacity = layer.getOpacity();
            }
        })
        withLayer.forEach(layerToSee => {
            const lyr = getLayerByName(map, layerToSee);
            const lyrCompare = getLayerByName(timeMap, layerToSee);
            const lyrToChange = lyr || lyrCompare;
            if (lyrToChange) {
                lyr.setVisible(true);
                lyr.setOpacity(newOpacity);   
            }
        })

        setOpacity(newOpacity*100);
    }, [selected])

    const getCard = (lyrList) => {
        return (
            <>
                <Col className="opacity-container">
                    <Form.Label>Opacité</Form.Label>
                    <Form.Range value={ opacity } onChange={updateOpacity} />
                </Col>
                <Col className="basemapItems">
                    {lyrList.filter(lyr => lyr.getProperties().selectable).map((layer) => 

                        (<Card
                            key={uniqueId()}
                            onClick={() =>
                                setSelected(layer.getProperties().name)
                            }
                            className={
                                `${selected === layer.getProperties().name
                                    ? "active"
                                    : ""
                                } cardBL`
                            }
                        >
                            <Card.Img
                                variant="top"
                                src={`${process.env.PUBLIC_URL}/${layer.getProperties().preview}`}
                            />
                            <Card.Body>
                                <span className="text-center">
                                    {layer.getProperties().name}
                                </span>
                            </Card.Body>
                        </Card>)
                    )}
                </Col>
            </>
        )
    }

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
                <Container id="baseLayerPreviewer" className="d-none d-lg-block">
                    {getCard(layers)}
                </Container>
            )}
            <ResponsiveModal
                size="sm"
                change={() => changeModal("basemap")}
                title={"Fonds de plan disponibles"}
                className="d-lg-none"
                visible={responsiveModal.includes("basemap")}
                body={getCard(layers)}
            />
        </>
    )
}
