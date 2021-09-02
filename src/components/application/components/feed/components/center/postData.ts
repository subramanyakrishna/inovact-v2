export interface postData {
    id: string
    type: number
    avatar: string
    author: string
    time: number
    title?: string
    description: string
    tags?: Array<string>
    images?: Array<string>
    numLikes: number
    numComments: number
    completion?: number
}
