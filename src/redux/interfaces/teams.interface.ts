import { SkillI } from 'interfaces'

export interface Iroles {
    id: number
    skills: SkillI[]
}
interface Imembers {
    email: string
    role: string
}

export interface ICreateTeam {
    name: string
    tags: string[]
    looking_for_members: boolean
    looking_for_mentor: boolean
    roles: Iroles[]
    avatar: string
    members: Imembers[]
}
