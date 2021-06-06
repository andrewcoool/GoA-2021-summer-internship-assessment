import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ImagesContainer from "./components/ImagesContainer";

const DATA = [
    [
        "/images/surface-ZlJmOUFRBfQ-unsplash.jpg",
        "circle",
        "Collaboration",
        "/collaboration",
    ],
    [
        "/images/sergey-pesterev-llGiAyYthDw-unsplash.jpg",
        "4:3",
        "Mountain",
        "/mountain",
    ],
    [
        "/images/lee-chinyama-6lGiNbAublo-unsplash.jpg",
        "square",
        "Graduation",
        "/graduation",
    ],
    [
        "/images/simone-hutsch-8LwKILB2ceI-unsplash.jpg",
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
