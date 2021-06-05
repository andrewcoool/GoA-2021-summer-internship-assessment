import Circle from "./thumbnails/Circle";
import Triangle from "./thumbnails/Triangle";
import classes from "./ImagesContainer.module.css";
import Square from "./thumbnails/Square";
import StretchedRect from "./thumbnails/StretchedRect";

function ImagesContainer(props) {
    let images = [];
    let i = 0;

    for (let imageData of props.imagesData) {
        const imgSrc = imageData[0];
        const thumbnailType = imageData[1];
        const overlayHeading = imageData[2];
        const imgClassName = imageData[3];

        if (thumbnailType.includes(":")) {
            images.push(
                <StretchedRect
                    aspectRatio={thumbnailType}
                    src={imgSrc}
                    width={320}
                    overlayHeading={overlayHeading}
                    imgClassName={imgClassName}
                    key={i}
                ></StretchedRect>
            );
        }else if (thumbnailType === 'square'){
            images.push(
                <Square
                    src={imgSrc}
                    width={320}
                    overlayHeading={overlayHeading}
                    imgClassName={imgClassName}
                    key={i}
                ></Square>
            )

        } else if (thumbnailType === "circle") {
            images.push(
                <Circle
                    src={imgSrc}
                    diameter={320}
                    overlayHeading={overlayHeading}
                    imgClassName={imgClassName}
                    key={i}
                ></Circle>
            );
        } else if (thumbnailType === "triangle") {
            images.push(
                <Triangle
                    src={imgSrc}
                    width={280}
                    overlayHeading={overlayHeading}
                    imgClassName={imgClassName}
                    key={i}
                ></Triangle>
            );
        }

        i++;
    }

    return <div className={classes['images-container']}>{images}</div>
}

export default ImagesContainer;
