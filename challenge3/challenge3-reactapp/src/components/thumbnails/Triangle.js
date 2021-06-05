import EnlargeOnHover from "../animations/EnlargeOnHover";
import ClickableThumbnail from "./ClickableThumbnail";
import classes from "./Triangle.module.css";

export default function Triangle(props) {
    return (
        <ClickableThumbnail
            imgSrc={props.src}
            overlayHeading={props.overlayHeading}
        >
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
        </ClickableThumbnail>
    );
}
