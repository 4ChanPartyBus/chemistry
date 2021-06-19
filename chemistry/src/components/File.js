import React from "react";
import flImg from '../media/download.png';

function File(props) {
    return (
        <a href={"files/" + props.path} download>
            <div class="file">
                <img class="flImg" src={flImg}></img>
                <p class="fileName">{props.path}</p>
            </div>
        </a>
    )
}
export default File;