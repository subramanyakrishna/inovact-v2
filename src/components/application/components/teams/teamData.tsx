interface connection {
    name:string
    id:string
    designation:string
    role:string
}
interface Projects {
    title:string
    status:boolean
}
interface Ideas {
    title:string
}
export interface teamData{
    id: number
    teamname: string
    title: string
    description: string
    tags?: Array<string>
    avatar: string
    members?: Array<connection>
    documents: Array<string>
    requests: Array<connection>
    projects :Array <Projects>
    ideas :Array <Ideas>
}
