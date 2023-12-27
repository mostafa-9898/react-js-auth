import api from "../config/api"

const checkUser = async (loginData) => {
    const resp = await api.get('/users')
    const data = await resp.data
    try {
        const user = data?.find(user => user.username === loginData.username && user.password === loginData.password)

        if (user) {
            return user
        }

    } catch (error) {
        console.log(error);
        return
    }
}

export { checkUser }