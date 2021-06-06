import classes from "./EnlargeOnHover.module.css";

/**
 * React component for adding a scale hover effect.
 * The children of this component will have an enlarging animation
 * effect on hover.
 */
export default function EnlargeOnHover(props) {
    return <div className={classes['container']}>{props.children}</div>;
}
