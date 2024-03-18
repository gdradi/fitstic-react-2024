import { UserDto } from "./UserDto";


const HOSTNAME = "https://reqres.in";

export async function fetchUsers() {
    const response = await fetch(HOSTNAME + "/api/users?delay=2");
    const users: UserDto[] = (await response.json()).data;
    return users;
}

export async function fetchSettings() {
    const response = await fetch(HOSTNAME + "/api/settings");
    // todo
    return {};
}