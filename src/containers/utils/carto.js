import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import { get } from "ol/proj";
import { WKT } from "ol/format";

export const registerProj = () => {
    let projCode = 'EPSG:3035';
    proj4.defs(`${projCode}+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs`)
    register(proj4);
    let epsg3035 = get('EPSG:3035');
    epsg3035.setExtent([1896628.62, 1507846.05, 4656644.57, 6827128.02]);
}

export const clearSelSource = (src) => {
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

    clearSelSource(src);
    src.addFeature(feature);

}