import pieJson from "./assets/piepreview.json";
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


export const getJsonData =(type) => {
    console.log("pallavi type ",type)
    let jsonData = [];
    if(type === 'PIE') {
        jsonData = threed
    }if(type === 'DONUT') {
        jsonData = donutJson
    } if(type === 'MULTI_PIE') {
        jsonData = twoPieJson
    } if(type === 'LINE') {
        jsonData = lineJson
    } if(type === 'PACKED_BUBBLE') {
        jsonData = bubbleJson
    } if(type === 'HEAT_MAP') {
        jsonData = heatJson
    } if(type === 'BAR') {
        jsonData = barJson
    } if(type === 'AREA') {
        jsonData = areaJson
    } if(type === 'COLUMN') {
        jsonData = colJson
    }
    if(type === 'HONEYCOMB') {
        jsonData = tileMap
    }
    if(type === 'FUNNEL') {
        jsonData = funnel
    }
    if(type === 'ORGANIZATION') {
        jsonData = org
    }
    if(type === 'TIMELINE') {
        jsonData = timeline
    }  if(type === '3D-COLUMN') {
        jsonData = col3dJson
    }
    return jsonData;
}