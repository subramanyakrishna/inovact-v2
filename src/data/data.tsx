interface User {
    name: string
    role: 'student' | 'mentor' | 'enterprenur'
    designation: string
    university: string
    degree: string
    yearofgraduation: string
    interests: string[]
    image: string
    bio: string
}
interface Projects {
    creatorID: string
    createdAt: Date
    title: string
    description: string
    tags: string[]
    image?: string
    like: number
    comments: Comments[]
    members: Array<string>
}
interface Ideas {
    creatorID: string
    createdAt: Date
    title: string
    description: string
    tags: string[]
    image?: string
    like: number
    comments: Comments[]
    members: Array<string>
}

interface Comments {
    comment: string
}
interface Connection {
    name: string
    image: string
    designation: string
    duration: string
}

interface Teams {
    name: string
    image: string
    members: number
}

interface UserTeams {
    id: number
    name: string
    image: string
    description: string
    progress: number
    members: Connection[]
}

export const connection: Connection[] = [
    {
        name: 'Jane Doe',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        designation: 'Designation',
        duration: '10 min',
    },
    {
        name: 'Jane Doe',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        designation: 'Designation',
        duration: '10 min',
    },
    {
        name: 'Jane Doe',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        designation: 'Designation',
        duration: '10 min',
    },
    {
        name: 'Jane Doe',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        designation: 'Designation',
        duration: '10 min',
    },
]
export const userTeams: UserTeams[] = [
    {
        id: 1,
        name: 'Team Name',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ',
        progress: 75,
        members: connection,
    },
    {
        id: 2,
        name: 'Team Name 2',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
        progress: 56,
        members: connection,
    },
    {
        id: 3,
        name: 'TeamName',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        progress: 75,
        members: connection,
    },
    {
        id: 4,
        name: 'TeamName',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        progress: 75,
        members: connection,
    },
]

const myteams: Teams[] = [
    {
        name: 'Web Development-Frontend',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        members: 23,
    },
    {
        name: 'Data Mining',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        members: 5,
    },
    {
        name: 'Design Thinkers UI/UX',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        members: 49,
    },
]
