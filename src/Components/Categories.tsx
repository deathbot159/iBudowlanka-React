import React from "react";
import "../Styles/Categories.scss"

class Categories extends React.Component<any, any>{
    render(){
        return <>
            <div id={"categories"}>
                <CategoryBlock link={"#"} text={"Oferty\nPracy"} background={{color: "red"}}/>
                <CategoryBlock link={"#"} text={"Katalog\nFirm"} background={{color: "green"}}/>
                <CategoryBlock link={"#"} text={"Materiały\nBudowlane"} background={{color: "red"}}/>
                <CategoryBlock link={"#"} text={"Sprzęt\nBudowlany"} background={{color: "red"}}/>
            </div>
        </>
    }
}

const CategoryBlock = (props: {link: string, text: string, background?:{color?: "green"|"red", imagePath?:string}})=>{
    return(
        <>
            <a href={props.link} className={`category-block ${props.background?.color?props.background.color:""}`}>
                <span id={"text"}>{props.text.toUpperCase()}</span>
            </a>
        </>
    )
}

export {Categories, CategoryBlock};