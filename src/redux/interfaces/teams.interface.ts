import { SkillI } from 'interfaces'

export interface Iroles {
    roleId: string
    skills: SkillI[]
}

export interface ICreateTeam {
    name: string
    tags: string[]
    team_tags: number[]
    team_members: number[]
    looking_for_members: boolean
    looking_for_mentor: boolean
    roles: Iroles[]
    avatar: string
}
