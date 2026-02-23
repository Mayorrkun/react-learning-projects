import "../css/Entry.css";
import getTravelData from "../js/Entry.js";
import Arrow from "../assets/location.png";

function Entry(props){
    console.log(getTravelData);
    console.log("Props recieved:",props);
    const {data} = props;
    const image = "https://scrimba.com/links/travel-journal-japan-image-url";
    const entry = <article className="card">
        <img src={data.img} alt="" />
        <div>
            <span> <img src={Arrow} alt="" /> {data.location} <a href="">View on Google Maps</a></span>
            <h2>{data.attraction}</h2>
            <h6>{data['time-period']}</h6>
            <p>{data.about}</p>
        </div>
    </article>

    return entry;
}

export default Entry;


