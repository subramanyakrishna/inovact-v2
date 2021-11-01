const users = [
    {
        id: 0,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'mentor',
        organization: 'Google',
        skills: [0, 3, 4],
    },
    {
        id: 1,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'mentor',
        organization: 'Facebook',
        skills: [0, 3, 4],
    },
    {
        id: 2,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'student',
        organization: 'Microsoft',
        skills: [0, 3, 4],
    },
    {
        id: 3,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'student',
        organization: 'Microsoft',
        skills: [3, 4],
    },
    {
        id: 4,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'student',
        organization: 'Microsoft',
        skills: [3, 4, 5],
    },
    {
        id: 5,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'student',
        organization: 'Inovact',
        skills: [7],
    },
    {
        id: 6,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'enterprenuer',
        organization: 'Inovact',
        skills: [14, 15],
    },
    {
        id: 7,
        name: 'User' + Math.random().toString().substring(2, 4),
        avatar: 'https://bit.ly/3EKg3dQ',
        designation: 'ReactJs Developer',
        connected_at: '2021-10-12T15:52:58.312629+00:00',
        role: 'enterprenuer',
        organization: 'walmart',
        skills: [0, 3, 4],
    },
]

let skillsTemp = []
let numberOfSkills = 0
while (numberOfSkills <= 15) {
    skillsTemp.push({
        id: numberOfSkills,
        name: 'Skill' + Math.random().toString().substring(2, 4),
    })
    numberOfSkills++
}
const skillsLocal = skillsTemp

export { users, skillsLocal }
