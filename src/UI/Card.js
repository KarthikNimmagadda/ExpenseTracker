import './Card.css';

const Card = (props) => {
    debugger;
    const classes= 'card ' + props.className;
    return <div class={classes}>{props.children}</div>;
}

export default Card;