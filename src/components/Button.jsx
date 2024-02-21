const Button = (props) => {
    return(
        <div>
            <button onClick={props.onClick}>
                {props.title}
            </button>
        </div>
    )
}

export default Button;