import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Search from "./search";
import {useState} from 'react';


const App = () => {
//link to search bar tutorial  https://www.emgoto.com/react-search-bar/
  const posts = RecordList;
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  //const filteredPosts = filterPosts(posts, query);
  

  return (
    <div>
      <Navbar />
      <Route exact path="/">
      <div style={{paddingLeft: 540}}>
      <Search 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}/>
         
          
      </div>
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;