import "../css/Entry.css";
import Arrow from "../assets/location.png";
function Entry(){

    const image = "https://scrimba.com/links/travel-journal-japan-image-url";
    const entry = <div className="card">
        <img src={image} alt="" />
        <div>
            <span> <img src={Arrow} alt="" /> JAPAN <a href="">View on Google Maps</a></span>
            <h1>Mount Fuji</h1>
            <h6>12 Jan, 2023 - 24 Jan,2023</h6>
            <p>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters(12,380 feet). 
                Mount Fuji is the single most popular tourist site in japan, for both the japanese and foreign tourists. 
            </p>
        </div>
    </div>

    return entry
}

export default Entry;