import classes from "./EnlargeOnHover.module.css";

export default function EnlargeOnHover(props) {
    return <div className={classes['container']}>{props.children}</div>;
}
