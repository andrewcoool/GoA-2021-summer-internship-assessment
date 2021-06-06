import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./StretchedRect.module.css";

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
                        className={props.imgClassName}
                    ></img>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
