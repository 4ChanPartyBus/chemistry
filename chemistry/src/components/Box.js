import React from "react";
import Line from './Line.js';
import File from './File.js';
function Box(props) {
    var flsIt;
    if (props.files) {
        let fls = props.files;
        flsIt = fls.map((f) =>
            <File path={f}></File>
        );
    }
    return (
        <div>
            <h2 class="text">{props.title}</h2>
            {/* <Line></Line> */}
            {/* <p class="text">{props.description}</p> */}
            <div class="files">
                {flsIt}
            </div>
        </div>
    )
}
export default Box;