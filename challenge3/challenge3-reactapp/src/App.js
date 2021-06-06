import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ImagesContainer from "./components/ImagesContainer";

/**
 * Temporary dummy data for filling an instance of an ImagesContainer component.
 * This dummy data reflects the format of the page shown in the Figma design.
 *
 * The purpose of this data format is to make the app more expandable, such that
 * data can be retrieved from an API and/or be easily edited.
 *
 * Format of each element:
 * [
 *    0 - Path to an image for the thumbnail
 *    1 - The type of thumbnail to use ('circle', 'square', 'triangle',
 *        '4:3' for stretched rect, '5:4' for stretched rect)
 *    2 - The heading text to be displayed in the overlay when the thumbnail is clicked.
 *    3 - The path routed to when the thumbnail is clicked. 
 * ]
 */
const DATA = [
    [
        "/images/surface-ZlJmOUFRBfQ-unsplash-compressed.jpg",
        "circle",
        "Collaboration",
        "/collaboration",
    ],
    [
        "/images/sergey-pesterev-llGiAyYthDw-unsplash-compressed.jpg",
        "4:3",
        "Mountain",
        "/mountain",
    ],
    [
        "/images/lee-chinyama-6lGiNbAublo-unsplash-compressed.jpg",
        "square",
        "Graduation",
        "/graduation",
    ],
    [
        "/images/simone-hutsch-8LwKILB2ceI-unsplash-compressed.jpg",
        "triangle",
        "Red Building",
        "/red-building",
    ],
];

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>Hello World</h1>
                <h3>
                    Wow! Check out all the cool CSS and Javascript things I can
                    do!
                </h3>
                <ImagesContainer imagesData={DATA}></ImagesContainer>
            </div>
        </BrowserRouter>
    );
}

export default App;
