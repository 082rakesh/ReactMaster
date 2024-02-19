const Filter = (props) => {
    // onClickHandler = () => {
    //     console.log('print handler')
    // }
    return(
        <div>
            <button onClick={props.onClick}>
                Filter Cards
            </button>
        </div>
    )
}

export default Filter;