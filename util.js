import threed from "./assets/pie3dpreview.json";
import donutJson from "./assets/donutpreview.json";
import twoPieJson from "./assets/twopiepreview.json";
import lineJson from "./assets/linepreview.json";
import bubbleJson from "./assets/packedbubblepreview.json";
import heatJson from "./assets/heatpreview.json";
import barJson from "./assets/barpreview.json";
import areaJson from "./assets/areapreview.json";
import colJson from "./assets/colpreview.json";
import col3dJson from "./assets/col3dpreview.json";
import tileMap from "./assets/honeycombpreview.json";
import funnel from "./assets/funnelpreview.json";
import org from "./assets/orgpreview.json";
import timeline from "./assets/timelinepreview.json";


export const getJsonData = (type) => {
    switch (type) {
        case 'PIE' :
            return threed;
        case 'DONUT' :
            return donutJson;
        case 'MULTI_PIE':
            return twoPieJson;
        case 'LINE':
            return lineJson;
        case 'PACKED_BUBBLE':
            return bubbleJson;
        case 'HEAT_MAP':
            return heatJson;
        case 'BAR':
            return barJson;
        case 'AREA':
            return areaJson;
        case 'COLUMN':
            return colJson;
        case 'HONEYCOMB':
            return tileMap;
        case 'FUNNEL':
            return funnel;
        case 'ORGANIZATION':
            return org;
        case 'TIMELINE':
            return timeline;
        case '3D-COLUMN':
            return col3dJson
    }
    return {};
}