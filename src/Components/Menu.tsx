import React from "react";

import logo from "../Assets/logo.png"

import "../Styles/Menu.scss"

export default class Menu extends React.Component<any, any>{

    private handleCollapse(){
        let button = window.document.getElementById("collapse-button")!;
        let collapsedContainer = window.document.querySelectorAll("#menu-collapse>#container")[0]!;
        button.innerText = button.hasAttribute("active")? "O": "C";
        button.hasAttribute("active")? button.removeAttribute("active"): button.setAttribute("active", "");
        button.hasAttribute("active")?
            collapsedContainer.setAttribute("active", "") :
            collapsedContainer.removeAttribute("active");
    }

    render() {
        return <>
            <div className={"menu"}>
                <div id={"flex-1st-item"}>{" "}</div>
                <div id={"logo"}>
                    <img src={logo} alt={"logo"}/>
                </div>
                <div id={"menu-items"}>
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>Strona główna</a>
                    <a href={"#"}>Ulubione <span id={"favourites-counter"}>(0)</span></a>
                    <a href={"#"}>Miasta</a>
                    <a href={"#"}>Kontakt</a>
                </div>
                <div id={"user-cp"}>
                    <div id={"container"}>
                        <button id={"log-in"}>Zaloguj się</button>
                        <button id={"register"}>Załóż konto</button>
                    </div>
                </div>
                <div id={"menu-collapse"}>
                    <span id={"collapse-button"} onClick={this.handleCollapse}>O</span>
                    <div id={"container"}>
                        <span className={"collapsed-menu-item"}>
                            <a href={"#"}>Strona główna</a>
                        </span>
                        <span className={"collapsed-menu-item"}><a href={"#"}>Ulubione <span id={"favourites-counter"}>(0)</span></a></span>
                        <span className={"collapsed-menu-item"}><a href={"#"}>Miasta</a></span>
                        <span className={"collapsed-menu-item"}><a href={"#"}>Kontakt</a></span>
                        <div id={"user-cp"} className={"collapsed-menu-item"}>
                            <button id={"log-in"}>Zaloguj się</button>
                            <button id={"register"}>Załóż konto</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}