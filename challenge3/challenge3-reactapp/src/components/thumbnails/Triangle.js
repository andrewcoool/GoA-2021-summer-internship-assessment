import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Triangle.module.css";

/**
 * React component for a Triangle thumbnail, which when clicked
 * routes to a new page and opens an ImageOverlay.
 */
export default function Triangle(props) {
    return (
        <Link to={props.routePath}>
            <EnlargeOnHover>
                <div
                    className={classes.border}
                    style={{
                        width: props.width,
                        height: props.width,
                    }}
                >
                    <div
                        className={classes.triangle}
                        style={{
                            width: props.width,
                            height: props.width,
                        }}
                    >
                        <img
                            src={props.src}
                            width={props.imgWidth}
                            alt="Asset Missing"
                        ></img>
                    </div>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
