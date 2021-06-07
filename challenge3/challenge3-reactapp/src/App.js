import { HashRouter } from "react-router-dom";
import "./App.css";
import ImagesContainer from "./components/ImagesContainer";

/**
 * Temporary dummy data for filling an instance of an ImagesContainer component.
 * This dummy data reflects the format of the thumbnails shown in the Figma design.
 *
 * The purpose of this data format is to make the app more expandable, such that
 * data can be retrieved from an API and/or be easily edited.
 *
 * Format of each element:
 * [
 *    0 - The image source for the thumbnail
 *    1 - The type of thumbnail to use ('circle', 'square', 'triangle',
 *        '4:3' for stretched rect with 4:3 aspect ratio, '5:4' for stretched rect with 5:4 aspect ratio...)
 *    2 - The heading text to be displayed in the overlay when the thumbnail is clicked.
 *    3 - The path routed to when the thumbnail is clicked. 
 * ]
 */
const DATA = [
    [
        `${process.env.PUBLIC_URL}/images/surface-ZlJmOUFRBfQ-unsplash-compressed.jpg`,
        "circle",
        "Collaboration",
        "/collaboration",
    ],
    [
        `${process.env.PUBLIC_URL}/images/sergey-pesterev-llGiAyYthDw-unsplash-compressed.jpg`,
        "4:3",
        "Mountain",
        "/mountain",
    ],
    [
        `${process.env.PUBLIC_URL}/images/lee-chinyama-6lGiNbAublo-unsplash-compressed.jpg`,
        "square",
        "Graduation",
        "/graduation",
    ],
    [
        `${process.env.PUBLIC_URL}/images/simone-hutsch-8LwKILB2ceI-unsplash-compressed.jpg`,
        "triangle",
        "Red Building",
        "/red-building",
    ],
];

function App() {
    return (
        // I used a HashRouter instead of a BrowserRouter to allow the built react app
        // to work offline (i.e. without a server and using file://).
        // BrowserRouter uses the HTML5 History API, which does not work offline.
        <HashRouter>
            <div className="App">
                <h1>Hello World</h1>
                <h3>
                    Wow! Check out all the cool CSS and Javascript things I can
                    do!
                </h3>
                <ImagesContainer imagesData={DATA}></ImagesContainer>
            </div>
        </HashRouter>
    );
}

export default App;
