import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_HOST } from "../utils";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const [assets, setAssets] = useState([]);
  const [pages, setPages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPages = async () => {
      const response = await axios.get(`${API_HOST}page`);
      setPages(response.data);
    };
    fetchPages();
  }, []);

  return (
    <div className="App">
      <div
        id="navbar"
        className="sidenav d-flex flex-column overflow-scroll position-fixed"
      >
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h3 logo">Code Dexterous</span>
          </div>
        </nav>
        <div></div>
        <div></div>
      </div>
      <div
        className="main-content position-relative w-85 start-15"
        id="main-content"
      >
        <div></div>
        <div id="editor"></div>
      </div>
    </div>
  );
};

export default Editor;
