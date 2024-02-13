import { React} from 'react' ;


import { Clicker } from "./Clicker" ;
import { SearchBar } from "./SearchBar" ;

export function App(){
   return (
    <div>
        <SearchBar/>
        <Clicker/>
    </div>
   )
}