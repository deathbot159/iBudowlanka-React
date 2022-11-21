import React from "react";
import "../Styles/SearchBar.scss"

class SingleSearchBar extends React.Component<any, any>{
    render(){
        return <>
            <div className={"searchBar"}>
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