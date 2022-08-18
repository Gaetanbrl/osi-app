import { WKT } from "ol/format";

import { XYZ, TileWMS, Vector as VectorSource, ImageWMS } from "ol/source";
import { GeoJSON } from "ol/format";

import { Tile, Vector, Image } from "ol/layer";

import { isEmpty, find } from "lodash";

import { WMSCapabilities } from 'ol/format';

import { osiStyles } from "../../osiStyles";

import config from "../../config";

const zoomSizes = config.zoomSizes;

export const clearSource = (src) => {
    if (src.getFeatures().length) {
        src.clear();
    }
}

export const addFeatureFromInfos = (infos, src) => {
    let car = infos["id_car"];

    let E = Number(car.slice(5,12));
    let N = Number(car.slice(13, 20));
    // create geom as WKT
    let wkt = `POLYGON((${E} ${N+200}, ${E+200} ${N+200}, ${E+200} ${N}, ${E} ${N}, ${E} ${N+200}))`
    let format = new WKT({
        defaultDataProjection: "EPSG:3035"
    })

    // create feature from WKT and 
    const feature = format.readFeature(wkt, {
        dataProjection: "EPSG:3035",
        featureProjection: "EPSG:3857"
    });

    clearSource(src);
    src.addFeature(feature);
}

export const getLayerByName = (map, name) => {
    if (!map) return;
    return map.getLayers().getArray().filter(x => x.getProperties().name === name)[0];
}

export const getSource = (infos) => {
    switch (infos?.type) {
        case "XYZ":
            return new XYZ(infos)
        case "TileWMS":
            return new TileWMS(infos)
        case "Vector":
            return infos.url ? new VectorSource({
                url: infos.isLocal ? process.env.PUBLIC_URL + infos.url : infos.url,
                format: new GeoJSON()
            }) : new VectorSource({})
        case "ImageWMS":
            return new ImageWMS(infos)
        default:
            return {}
    }
};

export const getLayersFromConfig = (layers) => {
    if (!layers || !layers.length) return;
    return layers.map((infos) => {
        const source = getSource(infos);
        if (isEmpty(source)) return null;
        if (infos.type === "Vector") {
            return new Vector({
                source: source,
                name: infos.title || infos.name,
                style: osiStyles[infos.style],
                minResolution: zoomSizes[infos.minResolution],
                maxResolution: zoomSizes[infos.maxResolution],
                zIndex: infos.zIndex,
                visible: infos.visible,
                navigation: infos.navigation,
                compo: infos.compo,
                clickable: infos.clickable,
            })
        }
        if (infos.type === "ImageWMS") {
            return new Image({
                name: infos.title || infos.name,
                source: source,
                opacity: infos.opacity,
                minResolution: zoomSizes[infos.minResolution],
                maxResolution: zoomSizes[infos.maxResolution],
                zIndex: infos.zIndex,
                navigation: infos.navigation,
                compo: infos.compo,
                clickable: infos.clickable,
                visible: infos.visible
            })
        }
        return new Tile({
            name: infos.title || infos.name,
            opacity: infos.opacity,
            visible: infos.visible || false,
            minResolution: zoomSizes[infos.minResolution] || infos.minResolution,
            maxResolution: zoomSizes[infos.maxResolution] || infos.maxResolution,
            source: source,
            compo: infos.compo,
            clickable: infos.clickable,
            navigation: infos.navigation
        })
    }).filter(el => !isEmpty(el))
}

export const getAllRealVisibleLayers = (map) => {
    const mapRes = map.getView().getResolution();
    return map.getLayers().getArray().filter(l =>
        l.getVisible()
        && l.getMinResolution() < mapRes
        && l.getMaxResolution() > mapRes
    );
}

export const getCapabilitiesDimension = (url) => {
    const parser = new WMSCapabilities();

    return fetch(url)
    .then((response) => {
        if (response.status >= 400) {
            console.error('Bad response from server');
        }
        return response.text();
    })
    .then(text => {
        const capabilities = parser.read(text);
        const timeParameter = find(capabilities.Capability.Layer.Layer[0].Dimension, ["name", "time"])?.values;
        
        if (timeParameter.length) {
            const listYear = timeParameter.split(',').map(d => d.substring(0, 4));
            return {
                yearsListAvailable: listYear,
                selectedYear: parseInt(listYear[listYear.length - 1], 10),
            }
        }
        // if not time dimension
        return;
    });
}

export const getOverlayText = (nom, code, nbIndic, sitePilote) => {
    let overlayText = '<h6><strong>' + nom + '</strong>'
    if (code) {
        overlayText += ' (' + code + ')';
    }
    if (nbIndic) {
        overlayText += '<br /><i>' + nbIndic +' indicateurs</i>';
    }
    if (sitePilote === true || sitePilote === 'true') {
        overlayText += '<br /><i>Territoire pilote des projets OSIRISC et OSIRISC+</i>';
    }
    overlayText += '</h6>'

    return overlayText;
}