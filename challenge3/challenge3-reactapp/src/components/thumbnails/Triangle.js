import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Triangle.module.css";

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
                            alt="Asset Missing"
                            className={props.imgClassName}
                        ></img>
                    </div>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
