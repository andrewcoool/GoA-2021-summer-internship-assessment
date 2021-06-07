import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Square.module.css";

/**
 * React component for a Square thumbnail, which when clicked
 * routes to a new page and opens an ImageOverlay.
 */
export default function Square(props) {
    return (
        <Link to={props.routePath}>
            <EnlargeOnHover>
                <div
                    className={classes.square}
                    style={{
                        width: props.width,
                        height: props.width,
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
