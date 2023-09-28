const Card=(text)=>{
    return (
        <div className="SkillCard">
            <h1>{text.name}</h1>
            <img src={text.src} alt="error"></img>
            <p>{text.level}</p>
        </div>
    )
}

export default Card;