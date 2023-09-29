import i11 from "../assets/11.jpg";

export const ProjectList = (project) => {
    const ProjectID = project.toLowerCase();
    switch (ProjectID) {
        case 'i11':
            return i11 ;
        default:
            break;
    }
}