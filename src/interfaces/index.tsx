interface IUserRequest {
    name: string,
    email: string,
    password: string
}

interface IUserUpdate {
    name?: string,
    email?: string,
    password?: string
}