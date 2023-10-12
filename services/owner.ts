import callAPI from "../config/api/index"

const ROOT_API = import.meta.env.VITE_API
const API_VERSION = 'api/v1'

const IMG = import.meta.env.VITE_API;
export {IMG}

export async function postMenu(data: FormData) {
    const URL = `masterProduct`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'POST',
        data,
    })
  }

export async function getMenu(userId:string) {
    const URL = `masterProduct/user/${userId}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'GET',
    })
  }

  export async function editMenu(uuid:string, userId:string) {
    const URL = `masterProduct/${uuid}/user/${userId}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'GET',
    })
  }

  export async function updateMenu(uuid:string, userId:string, data: FormData) {
    const URL = `masterProduct/${uuid}/user/${userId}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'PUT',
        data
    })
  }

  export async function deleteMenu(uuid:string, userId:string) {
    const URL = `masterProduct/${uuid}/user/${userId}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'DELETE',
    })
  }
