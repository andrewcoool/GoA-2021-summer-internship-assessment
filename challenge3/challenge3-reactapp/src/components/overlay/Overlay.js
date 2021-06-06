import classes from './Overlay.module.css'

/**
 * React component for an empty full-screen overlay.
 */
export default function Overlay(props){
    return (
        <div>
            <div className={classes.background}></div>
            <div className={classes.box}>
                <button className={classes.exit} onClick={props.onExit}
                    style={{
                        backgroundImage: `url('${process.env.PUBLIC_URL}/images/exit.png')`
                    }}
                ></button>
                {props.children}
            </div>
        </div>
    );
}