import Overlay from "./Overlay";
import classes from "./ImageOverlay.module.css";

/**
 * React component for a full-screen overlay containing
 * a header and image.
 */
export default function ImageOverlay(props) {
    return (
        <Overlay onExit={props.onExit}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.title}>{props.overlayHeading}</div>
                    <div className={classes["img-container"]}>
                        <img src={props.imgSrc} alt="Asset Missing" />
                    </div>
                </div>
            </div>
        </Overlay>
    );
}
