import React, {useEffect, useState} from "react";
import { Offcanvas } from "react-bootstrap";

import config from "../config.json";

/**
 * 
 * @param {boolean} isVisible to show or hidde offCanvas
 * @param {any} infos from GetFeatureInfos requested on cell click
 * @param {string} tpl URL to load template from public folder
 * @returns 
 */
const InfosBox = (
    {
        isVisible = false,
        infos = {},
        tpl = config.templates?.infos
    }
) => {
    var Mustache = require('mustache');
    const [show, setShow] = useState(false);
    const [template, setTemplate] = useState("");
    const handleClose = () => {
        setShow(false);
    };

    // effect on visible change
    useEffect(() => {
        if (isVisible) {
            setShow(true);
        }
    }, [isVisible]);

    // effect on init
    useEffect(() => {
        if (!template) {
            // load template
            fetch(tpl)
                .then(r => r.text())
            .then(t => setTemplate(t))
        }
    }, [])

    const createContent = () => {
        return { __html: Mustache.render(template, infos)};
    };

    return (
        <div className="offcanvas-parent flex-fill" id="offCanvas-parent">
            <h1>Test Off Canvas</h1>
            <div id="infosCanvas" style={{ position: "absolute" }} data-bs-backdrop="false" className={`offcanvas offcanvas-bottom ${show ? 'show' : ''} bg-primary text-white p-3`}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="infosCanvas" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="offcanvas-body small" dangerouslySetInnerHTML={createContent()}>
                </div>
            </div>
        </div>
    )
}

export default InfosBox;
