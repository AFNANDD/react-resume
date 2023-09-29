const Card=(text)=>{
    return(
        <div className="ProjectCard">
            <img className="ProjectImg" src={text.img} alt="error"></img>
            <h1 className="ProjectName" >{text.name}</h1>
            <label className="ProjectLabel" >{text.label}</label>
        </div>
    )
};

export default Card;