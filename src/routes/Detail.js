import {useState , useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const [movie,setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    const getMovie = async ()=>{
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);

    };
    useEffect(()=> {
        getMovie();
    },[]);
    return (<div>{loading ? <h1>loading...</h1> : 
        <div>
            <h1>{movie.title}</h1>
            <img src = "https://yts.mx/assets/images/movies/wash_my_soul_in_the_rivers_flow_2021/medium-cover.jpg" alt = {movie.title}/>

            <p>{movie.description_full}</p>
        </div>
    
    }</div>);
}

export default Detail;