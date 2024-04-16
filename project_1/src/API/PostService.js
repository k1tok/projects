import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/` + id)
        return response
    }

    static async getCommentsById(id, limit = 10) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}/comments`, {
            params: {
                _limit: limit
            }
        })
        return response
    }
}