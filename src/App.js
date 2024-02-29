import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { AppContext } from "./context/contextApi";
import Feed from "./components/Feed";
import Headers from "./components/Headers";
// import LeftNav from "./components/LeftNav";
// import LeftNavMenu from "./components/LeftNavMenu";
import SearchResult from "./components/SearchResult";
// import SearchResultVideoCard from "./components/SearchResultVideoCard";
// import SuggestionVideoCard from "./components/SuggestionVideoCard";
// import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <AppContext>  
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Headers/>
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/searchresult/:searchQuery" element={<SearchResult/>}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App;
