import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./StretchedRect.module.css";

/**
 * React component for a stretched rectangle thumbnail.
 * The image contained in the thumbnail is stretched to the 
 * aspect ratio specified in props.aspectRatio.
 * 
 * When clicked, route to a new page and open an ImageOverlay.
 */
export default function StretchedRect(props) {
    const aspectRatio = props.aspectRatio.split(":");
    const widthRatio = parseInt(aspectRatio[0]);
    const heightRatio = parseInt(aspectRatio[1]);

    const height = props.width * (heightRatio / widthRatio);

    return (
        <Link to={props.routePath}>
            <EnlargeOnHover>
                <div
                    className={classes.rect}
                    style={{
                        width: props.width,
                        height: height,
                    }}
                >
                    <img
                        src={props.src}
                        alt="Asset Missing"
                        width={props.width}
                        height={height}
                    ></img>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
