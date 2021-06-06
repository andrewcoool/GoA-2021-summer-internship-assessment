
import { Link } from 'react-router-dom';

import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Circle.module.css";
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
                        className={props.imgClassName}
                    ></img>
                </div>
            </EnlargeOnHover>
        </Link>
    );
}
