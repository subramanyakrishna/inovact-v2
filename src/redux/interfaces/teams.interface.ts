import { SkillI } from 'interfaces'

export interface Iroles {
    roleId: string
    skills: SkillI[]
}

export interface ICreateTeam {
    name: string
    tags: string[]
    looking_for_members: boolean
    looking_for_mentor: boolean
    roles: Iroles[]
}
