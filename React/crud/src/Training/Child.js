function Child(props){
    console.log(props,'props')
    return(
        <>
        <p>{props.send}</p>
        <p > {props.val}</p>
        <p>{props?.val2?.id}</p>
        </>
    )
}

export default Child;