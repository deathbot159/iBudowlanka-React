import React from "react";
import "../Styles/SearchBar.scss"

class SingleSearchBar extends React.Component<any, any>{

    private handleCollapse(){
        let toggle = window.document.querySelectorAll(".searchBar-item.collapse-toggle")[0];
        toggle.hasAttribute("active")? toggle.removeAttribute("active"): toggle.setAttribute("active", "");
        toggle.innerHTML = toggle.hasAttribute("active")? "O": "C";
        let selector = window.document.querySelectorAll(".searchBar-item");
        toggle.hasAttribute("active")?
            selector.forEach((v, i)=>{
                if(i===0)
                    v.setAttribute("active", "");
                else if(i!==selector.length-1)
                    v.setAttribute("hidden", "");
            }):
            selector.forEach((v, i)=>{
                if(i===0)
                    v.removeAttribute("active");
                else if(i!==selector.length-1)
                    v.removeAttribute("hidden");
            });
    }

    render(){
        return <>
            <div className={"searchBar"}>
                <span className={"searchBar-item name"}>Wyszukiwarka</span>
                <SearchBarInput icon="🔎" defaultText="Wpisz, czego szukasz..." />
                <SearchBarInput
                    icon="📌"
                    defaultText="Wybierz miejscowość..."
                    addSelector={{
                        name: "radius",
                        options: ["+ 0km", "+ 1km", "+ 2km", "etc."]
                    }}
                />
                <a href={"#"} className={"searchBar-item link"}>
                    Wyszukiwanie zaawansowane
                </a>
                <button className={"searchBar-item button"}>
                    Wyszukaj ogłoszenie 🔍
                </button>
                <span className={"searchBar-item collapse-toggle"} onClick={this.handleCollapse}>C</span>
            </div>
        </>
    }
}

const SearchBarInput = (props: {icon: string, defaultText: string, addSelector?:{name: string, options: Array<string>}}) => {
    return (
        <>
      <span
          className={"searchBar-item input-component"}
          // @ts-ignore
          isselector={props.addSelector ? "true" : "false"}
      >
        <p id="icon">{props.icon}</p>
        <input type="text" placeholder={props.defaultText} />
          {props.addSelector ? (
              <select name={props.addSelector.name}>
                  {props.addSelector.options.map((x) => (
                      <option>{x}</option>
                  ))}
              </select>
          ) : (
              ""
          )}
      </span>
        </>
    );
};

export {SingleSearchBar, SearchBarInput};