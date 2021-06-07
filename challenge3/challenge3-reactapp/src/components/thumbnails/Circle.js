
import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Circle.module.css";

/**
 * React component for a Circle thumbnail, which when clicked
 * routes to a new page and opens an ImageOverlay.
 */
export default function Circle(props) {
    return (
        <Link to={props.routePath}>
            <EnlargeOnHover>
                <div
                    className={classes.circle}
                    style={{
                        width: props.diameter,
                        height: props.diameter,
                    }}
                >
                    <img
                        src={props.src}
                        alt="Asset Missing"
                        width={props.imgWidth}
                    ></img>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
