interface connection {
    name:string
    id:string
    designation:string
    role:string
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
}
