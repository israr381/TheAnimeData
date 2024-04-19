import React, { useState, useEffect } from "react";
import AnimeDetails from "./AnimeDetails";

function Anime({ searchQuery }) {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [selectedAnime, setSelectedAnime] = useState(null); 

    useEffect(() => {
        const fetchAnimeNames = async () => {
            try {
                const response = await fetch(
                    "https://api.jikan.moe/v4/anime?q="
                );
                const data = await response.json();
                setAnimeList(data.data);
                console.log(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching anime:", error);
                setLoading(false); 
            }
        };
        fetchAnimeNames();
    }, []);

    const filteredAnimeList = animeList.filter((anime) =>
        anime.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAnimeClick = (anime) => {
        setSelectedAnime(anime);
    };

    return (
        <>
            {loading ? (
                <div className="load">LOADING......</div>
            ) : selectedAnime ? (
                <AnimeDetails anime={selectedAnime} />
            ) : (
                <>
                    <hr className="hr" />
                    <div className="anime-container">
                        {filteredAnimeList.map((anime) => (
                          
                                <div
                                    key={anime.mal_id}
                                    className="anime-card"
                                    onClick={() => handleAnimeClick(anime)} 
                                >
                                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                                    <h3>{anime.title}</h3>
                                    <h3>{anime.source}</h3>
                                </div>
                          
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default Anime;
