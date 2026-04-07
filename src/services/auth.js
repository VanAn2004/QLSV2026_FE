import { get, post } from './api.js'

export async function login(username, password) {
  return await post('/auth/login', { username, password })
}

export async function register(data) {
  return await post('/auth/register', data)
}

export async function logout() {
  return await post('/auth/logout', {})
}


