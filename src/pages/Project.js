import Card from "../components/Project-Card/Card";

const Project= () => {

    const img = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    ]

    return (
        <div className="ProjectPage">
            <div className="Project-Container">
                <Card name="HTML" label="Intermediate" img={img[0]} />
            </div>
        </div>
    )
}

export default Project;