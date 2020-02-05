import React from 'react';
import { Link } from "react-router-dom";


const Home = () => (
    <div className="block--home">
        <Link to={"/game-dev"}>
            <h3>Game</h3>
        </Link>
    </div>
);



export default Home

