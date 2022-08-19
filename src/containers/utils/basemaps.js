import { Tile } from "ol/layer"
import { isEmpty } from "lodash";
import { getSource } from "./carto";
import config from "../../config";

const zoomSizes = config.zoomSizes;

export const getFirstVisibleLayer = (layers) => {
    return layers.getArray().filter((l) => l.getProperties().visible)[0]
}

export const getBaseLayers = (layers) => {
    if (!layers) return;
    let withLayers = [];
    return layers.map((infos, index) => {

        const source = getSource(infos);
        if (isEmpty(source)) return null;
        if (index < 1 && infos.with) {
            withLayers.push(infos.with);
        }
        return new Tile({
            name: infos.title || infos.name,
            opacity: infos.opacity,
            visible: index < 1 || withLayers.includes(infos.name),
            source: source,
            isBaseLayer: true,
            preview: infos.preview,
            minResolution: zoomSizes[infos.minResolution],
            maxResolution: zoomSizes[infos.maxResolution],
            with: infos.with,
            selectable: infos.selectable
        })
    }).filter(el => !isEmpty(el))
}
