const Card=(text)=>{
    return(
        <div className="ProjectCard">
            <h1>{text.name}</h1>
            <img src={text.img} alt="error"></img>
            <p>{text.label}</p>
        </div>
    )
};

export default Card;