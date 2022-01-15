import React from 'react'

export default function ReactIcon({type, classExtend}) {
    let iconPath;
    switch (type){
        case "heart":
            iconPath = require("../../../../assets/img/heart.png")
            break
        case "haha":
            iconPath = require("../../../../assets/img/haha.png")
            break
        case "wow":
            iconPath = require("../../../../assets/img/wow.png")
            break
        case "sad":
            iconPath = require("../../../../assets/img/sad.png")
            break
        case "angry":
            iconPath = require("../../../../assets/img/angry.png")
            break            
        default:
            iconPath = require("../../../../assets/img/like.png")

    }
    return <img src={iconPath} alt="" className={`mr-1 rounded-full transition-all ${classExtend}`}/>
}
