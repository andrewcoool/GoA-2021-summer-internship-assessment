import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Square.module.css";

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
                        className={props.imgClassName}
                    ></img>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
