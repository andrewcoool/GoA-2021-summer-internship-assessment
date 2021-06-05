import EnlargeOnHover from "../animations/EnlargeOnHover";
import ClickableThumbnail from "./ClickableThumbnail";
import classes from "./Square.module.css";

export default function Square(props) {
    return (
        <ClickableThumbnail
            imgSrc={props.src}
            overlayHeading={props.overlayHeading}
        >
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
        </ClickableThumbnail>
    );
}
