import * as types from "./constants"
export const signup_post_api_v1_signup_read = () => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ
})
export const signup_post_api_v1_signup_readSucceeded = response => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ_SUCCEEDED,
  response
})
export const signup_post_api_v1_signup_readFailed = error => ({
  type: types.SIGNUP_POST_API_V1_SIGNUP_READ_FAILED,
  error
})
