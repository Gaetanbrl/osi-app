import { Tile } from "ol/layer"
import { isEmpty } from "lodash";
import { getSource } from "./carto";

export const getFirstVisibleLayer = (layers) => {
    return layers.getArray().filter((l) => l.getProperties().visible)[0]
}

export const getBaseLayers = (layers) => {
    if (!layers) return;
    return layers.map((infos, index) => {
        const source = getSource(infos);
        if (isEmpty(source)) return null;
        return new Tile({
            name: infos.title || infos.name,
            opacity: infos.opacity,
            visible: index < 1,
            source: source,
            isBaseLayer: true,
            preview: infos.preview
        })
    }).filter(el => !isEmpty(el))
}
