import React , {createContext ,useState ,useEffect} from "react";
import { FetchDataFromApi } from "../utils/Api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setloading] = useState(false); 
    const [searchResults, setsearchResults] = useState([]); 
    const [selectCategories, setselectCategories] = useState("New"); 
    const [MobileMenu, setMobileMenu] = useState(false); 

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData = (query) => {
        setloading(true)
        FetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
            setsearchResults(contents)
            setloading(false)
        })
    }

    return (
        <Context.Provider value={{
            loading,
            setloading,
            searchResults,
            setsearchResults,
            selectCategories,
            setselectCategories,
            MobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    ) 
}