import classes from './Overlay.module.css'

export default function Overlay(props){
    return (
        <div>
            <div className={classes.background}></div>
            <div className={classes.box}>
                <button className={classes.exit} onClick={props.onExit}
                    style={{
                        backgroundImage: "url('/images/exit.png')"
                    }}
                ></button>
                {props.children}
            </div>
        </div>
    );
}