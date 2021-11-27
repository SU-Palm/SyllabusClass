import React from "react";

// We import all the components we need in our app
import RecordList from "../dashboard/RecordList";
import Search from "../../search";
import {useState} from 'react';

const SearchBar = () => {
//link to search bar tutorial  https://www.emgoto.com/react-search-bar/
  const posts = RecordList;
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  //const filteredPosts = filterPosts(posts, query);

  return (
    <div>
      <div style={{paddingLeft: 540}}>
      <Search 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}/>
      </div>
    </div>
  );
};

export default SearchBar;