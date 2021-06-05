import EnlargeOnHover from "../animations/EnlargeOnHover";
import classes from "./Circle.module.css";
import ClickableThumbnail from "./ClickableThumbnail";

export default function Circle(props) {
    return (
        <ClickableThumbnail
            imgSrc={props.src}
            overlayHeading={props.overlayHeading}
        >
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
        </ClickableThumbnail>
    );
}
