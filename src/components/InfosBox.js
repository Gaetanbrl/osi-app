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
        onLoad = () => {}
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
    };

    // effect on visible change
    useEffect(() => {
        if (!isEmpty(infos) && !isEqual(infos, view)) {
            setView(infos);
            setShow(!isEmpty(infos));


            const dirtyRender = Mustache.render(template, infos);
            const cleanRender = sanitizeHtml(dirtyRender, {
                // to custom sanitize-html config, see https://www.npmjs.com/package/sanitize-html
                allowedTags: false,
                allowedAttributes: false
            });
            setContent(cleanRender);
        }
    }, [infos]);

    // effect on init
    useEffect(() => {
        if (!template) {
            // load template
            fetch(tpl)
                .then(r => r.text())
            .then(t => setTemplate(t))
        }
    }, [])

    // will call GFI on url change
    useEffect(() => {
		if (url) {
			onLoad(url);
		}
	}, [url]);
    return (
        <div className="offcanvas-parent flex-fill" id="offCanvas-parent">
            <div id="infosCanvas" style={{ position: "absolute" }} data-bs-backdrop="false" className={`offcanvas offcanvas-bottom ${show ? 'show' : ''} bg-primary text-white p-3`}>
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasBottomLabel">Informations</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="infosCanvas" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="offcanvas-body small">
                    {!isEmpty(infos) && !useTemplateOnly && 
                        <div class="infos-body row">
                            <span className="col-3 row" dangerouslySetInnerHTML={{ __html: content }}></span>
                            <span className="col-6">
                                <p>Valeurs de la maille sélectionnée :</p>
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
