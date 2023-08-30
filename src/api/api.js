import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0b9e5566-c4e7-4525-a65e-5cd0c57bd2e8"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => response.data)
    },
    
    followUnfollow (id, action) {
        return instance[action](`follow/${id}`).then(response => response.data)
     },

    headerLogin () {
        return instance.get(`auth/me`)
    },

    profileUsers (userId) {
        console.warn("Не працює старий метод, ми його перенесли труба йому profileAPI")
        return profileAPI.profileUsers(userId)
    }
   
}

export const profileAPI = {
    profileUsers (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
