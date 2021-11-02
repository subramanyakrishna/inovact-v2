import axios from 'axios'

const baseUrl = 'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev'

class TeamsService {
    public async getTeams(userId: string): Promise<any> {
        return await axios.get(`${baseUrl}/team`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('user'),
            },
        })
    }

    public async getTeam(teamId: string): Promise<any> {
        return await axios.get(`${baseUrl}/api/teams/${teamId}`)
    }

    public async createTeam(team: any): Promise<any> {
        return await axios.post(`${baseUrl}/team`, team, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('user'),
            },
        })
    }
    public async updateTeamAvatar(teamUpdateImg:any) :Promise<any> {
        console.log("before api call for avatar teams: ",teamUpdateImg);
        return await axios.put(`${baseUrl}/team`, teamUpdateImg, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('user'),
            },
        }) 
    }
    public async inviteMember(bodyData: any): Promise<any> {
        return await axios.post(`${baseUrl}/api/teams/invite`,bodyData,{
            headers: {
                Authorization: localStorage.getItem('user'),
            },
        })
    }

    public async updateTeam(team: any): Promise<any> {
        return await axios.put(`${baseUrl}/api/teams/${team._id}`, team)
    }

    public async deleteTeam(teamId: string): Promise<any> {
        return await axios.delete(`${baseUrl}/api/teams/${teamId}`)
    }
}

export default new TeamsService()
