import { WKT } from "ol/format";

import { XYZ, TileWMS } from "ol/source";
import { Tile } from "ol/layer";

import { isEmpty } from "lodash";

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

export const getSource = (infos) => {
    switch (infos?.type) {
        case "XYZ":
            return new XYZ(infos)
        case "TileWMS":
            return new TileWMS(infos)
        default:
            return {}
    }
};

export const getLayersFroMConfig = (layers) => {
    if (!layers) return;
    return layers.map((infos, index) => {
        const source = getSource(infos);
        if (isEmpty(source)) return null;
        return new Tile({
            name: infos.title || infos.name,
            opacity: infos.opacity,
            visible: infos.visible || false,
            source: source,
            compo: infos.compo
        })
    }).filter(el => !isEmpty(el))
}