import { Route, Switch, useHistory } from "react-router-dom";

import Circle from "./thumbnails/Circle";
import Triangle from "./thumbnails/Triangle";
import classes from "./ImagesContainer.module.css";
import Square from "./thumbnails/Square";
import StretchedRect from "./thumbnails/StretchedRect";
import ImageOverlay from "./overlay/ImageOverlay";

/**
 * React component that displays a collection of image
 * thumbnails.
 */
function ImagesContainer(props) {
    const images = [];
    const overlayRoutes = [];

    const history = useHistory();

    for (let imageData of props.imagesData) {
        const imgSrc = imageData[0];
        const thumbnailType = imageData[1];
        const overlayHeading = imageData[2];
        const routePath = imageData[3];

        if (thumbnailType.includes(":")) {
            images.push(
                <StretchedRect
                    aspectRatio={thumbnailType}
                    src={imgSrc}
                    width={320}
                    overlayHeading={overlayHeading}
                    routePath={routePath}
                    key={routePath}
                ></StretchedRect>
            );
        } else if (thumbnailType === "square") {
            images.push(
                <Square
                    src={imgSrc}
                    width={320}
                    imgWidth={320}
                    overlayHeading={overlayHeading}
                    routePath={routePath}
                    key={routePath}
                ></Square>
            );
        } else if (thumbnailType === "circle") {
            images.push(
                <Circle
                    src={imgSrc}
                    diameter={320}
                    overlayHeading={overlayHeading}
                    routePath={routePath}
                    key={routePath}
                ></Circle>
            );
        } else if (thumbnailType === "triangle") {
            images.push(
                <Triangle
                    src={imgSrc}
                    width={280}
                    overlayHeading={overlayHeading}
                    routePath={routePath}
                    key={routePath}
                ></Triangle>
            );
        }

        overlayRoutes.push(
            <Route path={routePath} exact={true} key={"route_" + routePath}>
                <ImageOverlay
                    overlayHeading={overlayHeading}
                    imgSrc={imgSrc}
                    onExit={() => {
                        // On exit of ImageOverlay
                        // Route back to '/' to close the overlay

                        history.push(window.location.pathname);
                    }}
                ></ImageOverlay>
            </Route>
        );
    }

    return (
        <div>
            <div className={classes["images-container"]}>{images}</div>
            <Switch>
                {overlayRoutes}
            </Switch>
        </div>
    );
}

export default ImagesContainer;
