import { useState } from "react";
import ImageOverlay from "../overlay/ImageOverlay";

export default function ClickableThumbnail(props) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    function openOverlayHandler() {
        setIsOverlayOpen(true);
    }

    function exitOverlayHandler() {
        setIsOverlayOpen(false);
    }

    return (
        <div>
            {isOverlayOpen ? (
                <ImageOverlay
                    imgSrc={props.imgSrc}
                    overlayHeading={props.overlayHeading}
                    onExit={exitOverlayHandler}
                ></ImageOverlay>
            ) : (
                ""
            )}
            <div onClick={openOverlayHandler}>{props.children}</div>
        </div>
    );
}
