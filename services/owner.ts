import callAPI from "../config/api/index"

const ROOT_API = import.meta.env.VITE_API
const API_VERSION = 'api/v1'

export async function postMenu(data: FormData) {
    const URL = `masterProduct`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'POST',
        data,
    })
  }
