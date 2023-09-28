import Card from "../components/Skill-Card/Card";

const Skill=()=>{

    const img = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    ]

    return(
        <div className="SkillPage">
            <div className="Skill-Container">
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
                <Card name="HTML" level="Intermediate" src={img[0]} />
            </div>
        </div>
    )
}

export default Skill;