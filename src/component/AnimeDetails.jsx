import React from "react";

function AnimeDetails({ anime }) {
    const handleBackToHomepage = () => {
        window.location.href = "/";
    };

    return (
        <div className="anime-details">
            <hr />
            <h2 className="h22" onClick={handleBackToHomepage} style={{ cursor: 'pointer' , paddingRight:'7rem'}}>
                Back To Home
            </h2>
            <img style={{borderRadius:"20px"}} src={anime.images.jpg.image_url} alt={anime.title} width={300} height={300} />
            <h2 >Title: {anime.title}</h2>
            <p >Source: {anime.source}</p>
            <p>Type: {anime.type}</p>
            <p>Rating   : {anime.rating}</p>
        </div>
    );
}

export default AnimeDetails;
