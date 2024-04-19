import React, { useState } from "react";
import Anime from "../Anime";

import "./style.css";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <header className="div">
                <h1>
                    The<span style={{ color: "red" }}>Anime</span>Data
                </h1>
                <input
                    type="search"
                    placeholder="Search Anime"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </header>
            <Anime searchQuery={searchQuery} />
        </>
    );
};

export default Header;
