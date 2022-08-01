import { Tile } from "ol/layer"
import { XYZ, TileWMS } from "ol/source"
import { isEmpty } from "lodash";

const getSource = (infos) => {
    switch (infos?.type) {
        case "XYZ":
            return new XYZ(infos)
        case "TileWMS":
            return new TileWMS(infos)
        default:
            return {}
    }
};

export const getFirstVisibleLayer = (layers) => {
    return layers.getArray().filter((l) => l.getProperties().visible)[0]
}

export const getBaseLayers = (layers) => {
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
