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

export async function postSize(data: object) {
    const URL = `size`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'POST',
        data,
    })
  }

export async function getSize() {
    const URL = `size`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'GET',
    })
  }

  export async function editSize(uuid:string) {
    const URL = `size/${uuid}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'GET',
    })
  }

  export async function updateSize(uuid:string, data: object) {
    const URL = `size/${uuid}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'PUT',
        data
    })
  }

  export async function deleteSize(uuid:string, user_id:string) {
    const URL = `size/${uuid}/user/${user_id}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'DELETE',
    })
  }

export async function postProductPrice(data: object) {
    const URL = `productPrice`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'POST',
        data,
    })
  }

export async function getProductPrice() {
    const URL = `productPrice`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'GET',
    })
  }

  export async function editProductPrice(uuid:string) {
    const URL = `productPrice/masterProduct/${uuid}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'GET',
    })
  }

  export async function updateProductPrice(uuid:string, data: object) {
    const URL = `productPrice/${uuid}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'PUT',
        data
    })
  }

  export async function deleteProductPrice(uuid:string, user_id:string) {
    const URL = `productPrice/${uuid}/user/${user_id}`
    return callAPI({
        url: `${ROOT_API}/${API_VERSION}/${URL}`,
        method: 'DELETE',
    })
  }
