import { isEmpty, isEqual } from "lodash";
import React, { useEffect, useState } from "react";

import config from "../config.json";
import Feature from '../containers/Feature';


const useTemplateOnly = config.templates?.useTemplateOnly;

/**
 * 
 * @param {boolean} isVisible to show or hidde offCanvas
 * @param {any} infos from GetFeatureInfos requested on cell click
 * @param {string} tpl URL to load template from public folder
 * @returns 
 */
const InfosBox = (
    {
        infos = {},
        tpl = config.templates?.infos,
        url = "",
        urlCompare = "",
        onLoad = () => { },
        onClose = () => { }
    }
) => {

    let Mustache = require('mustache');
    let sanitizeHtml = require('sanitize-html');
    const [show, setShow] = useState(false);
    const [view, setView] = useState({});
    const [content, setContent] = useState("");
    const [template, setTemplate] = useState("");

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    // effect on visible change
    useEffect(() => {
        if (!isEmpty(infos) && !isEqual(infos, view)) {
            setView(infos);
            setShow(!isEmpty(infos));
            // TODO : VU en cotech le 27/09/2022 - l'année sera dispo dans un champ text pour ne pas avoir à le manipuler dans le JS
            const tplInfos = {...infos.properties, date_data: new Date(infos.properties.date_data).toLocaleDateString()}
            const dirtyRender = Mustache.render(template, tplInfos);
            const cleanRender = sanitizeHtml(dirtyRender, {
                // to custom sanitize-html config, see https://www.npmjs.com/package/sanitize-html
                allowedTags: false,
                allowedAttributes: false
            });
            setContent(cleanRender);
        }
    }, [infos?.id]);

    // effect on init
    useEffect(() => {
        if (!template) {
            // load template
            fetch(tpl)
                .then(r => r.text())
            .then(t => setTemplate(t))
        }
    }, [])

    useEffect(() => {
		if (url) {
			onLoad(url, urlCompare);
		}
    }, [url]);
    if (!url) return null;
    return (
        <div className="offcanvas-parent flex-fill" id="offCanvas-parent">
            <div id="infosCanvas" style={{ position: "absolute" }} data-bs-backdrop="false" className={`offcanvas offcanvas-bottom ${show ? 'show' : ''} bg-primary text-white p-1`}>
                <div className="offcanvas-header" style={{justifyContent: "right"}}>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="infosCanvas" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="offcanvas-body small">
                    {!isEmpty(infos) && !useTemplateOnly && 
                        <div className="infos-body row">
                            <span className="col-4">
                                <h3 className="offcanvas-title" id="offcanvasBottomLabel">Informations</h3>
                                <div className="row" dangerouslySetInnerHTML={{ __html: content }}></div>
                            </span>
                            <span className="col-5">
                                <Feature />
                            </span> 
                        </div>
                    }
                    {!isEmpty(infos) && useTemplateOnly && 
                        <span className="row" dangerouslySetInnerHTML={{ __html: content }}></span>
                    }
                    { isEmpty(infos) && 
                        <p>Aucune information à afficher.</p>
                    }
                </div>    
            </div>
        </div>
    )
}

export default InfosBox;
