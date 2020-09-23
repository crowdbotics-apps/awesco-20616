import axios from "axios"
const awescoAPI = axios.create({
  baseURL: "https://awesco-20616-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_bookingtransaction_list() {
  return awescoAPI.get(`/api/v1/bookingtransaction/`)
}
function api_v1_bookingtransaction_create(requestBody) {
  return awescoAPI.post(`/api/v1/bookingtransaction/`, requestBody)
}
function api_v1_bookingtransaction_read() {
  return awescoAPI.get(`/api/v1/bookingtransaction/{id}/`)
}
function api_v1_bookingtransaction_update(requestBody) {
  return awescoAPI.put(`/api/v1/bookingtransaction/{id}/`, requestBody)
}
function api_v1_bookingtransaction_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/bookingtransaction/{id}/`, requestBody)
}
function api_v1_bookingtransaction_delete() {
  return awescoAPI.delete(`/api/v1/bookingtransaction/{id}/`)
}
function api_v1_customtext_list() {
  return awescoAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return awescoAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return awescoAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_document_list() {
  return awescoAPI.get(`/api/v1/document/`)
}
function api_v1_document_create(requestBody) {
  return awescoAPI.post(`/api/v1/document/`, requestBody)
}
function api_v1_document_read() {
  return awescoAPI.get(`/api/v1/document/{id}/`)
}
function api_v1_document_update(requestBody) {
  return awescoAPI.put(`/api/v1/document/{id}/`, requestBody)
}
function api_v1_document_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/document/{id}/`, requestBody)
}
function api_v1_document_delete() {
  return awescoAPI.delete(`/api/v1/document/{id}/`)
}
function api_v1_driverprofile_list() {
  return awescoAPI.get(`/api/v1/driverprofile/`)
}
function api_v1_driverprofile_create(requestBody) {
  return awescoAPI.post(`/api/v1/driverprofile/`, requestBody)
}
function api_v1_driverprofile_read() {
  return awescoAPI.get(`/api/v1/driverprofile/{id}/`)
}
function api_v1_driverprofile_update(requestBody) {
  return awescoAPI.put(`/api/v1/driverprofile/{id}/`, requestBody)
}
function api_v1_driverprofile_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/driverprofile/{id}/`, requestBody)
}
function api_v1_driverprofile_delete() {
  return awescoAPI.delete(`/api/v1/driverprofile/{id}/`)
}
function api_v1_driverwallet_list() {
  return awescoAPI.get(`/api/v1/driverwallet/`)
}
function api_v1_driverwallet_create(requestBody) {
  return awescoAPI.post(`/api/v1/driverwallet/`, requestBody)
}
function api_v1_driverwallet_read() {
  return awescoAPI.get(`/api/v1/driverwallet/{id}/`)
}
function api_v1_driverwallet_update(requestBody) {
  return awescoAPI.put(`/api/v1/driverwallet/{id}/`, requestBody)
}
function api_v1_driverwallet_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/driverwallet/{id}/`, requestBody)
}
function api_v1_driverwallet_delete() {
  return awescoAPI.delete(`/api/v1/driverwallet/{id}/`)
}
function api_v1_homepage_list() {
  return awescoAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return awescoAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return awescoAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_invitecode_list() {
  return awescoAPI.get(`/api/v1/invitecode/`)
}
function api_v1_invitecode_create(requestBody) {
  return awescoAPI.post(`/api/v1/invitecode/`, requestBody)
}
function api_v1_invitecode_read() {
  return awescoAPI.get(`/api/v1/invitecode/{id}/`)
}
function api_v1_invitecode_update(requestBody) {
  return awescoAPI.put(`/api/v1/invitecode/{id}/`, requestBody)
}
function api_v1_invitecode_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/invitecode/{id}/`, requestBody)
}
function api_v1_invitecode_delete() {
  return awescoAPI.delete(`/api/v1/invitecode/{id}/`)
}
function api_v1_login_create() {
  return awescoAPI.post(`/api/v1/login/`)
}
function api_v1_maplocation_list() {
  return awescoAPI.get(`/api/v1/maplocation/`)
}
function api_v1_maplocation_create(requestBody) {
  return awescoAPI.post(`/api/v1/maplocation/`, requestBody)
}
function api_v1_maplocation_read() {
  return awescoAPI.get(`/api/v1/maplocation/{id}/`)
}
function api_v1_maplocation_update(requestBody) {
  return awescoAPI.put(`/api/v1/maplocation/{id}/`, requestBody)
}
function api_v1_maplocation_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/maplocation/{id}/`, requestBody)
}
function api_v1_maplocation_delete() {
  return awescoAPI.delete(`/api/v1/maplocation/{id}/`)
}
function api_v1_message_list() {
  return awescoAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(requestBody) {
  return awescoAPI.post(`/api/v1/message/`, requestBody)
}
function api_v1_message_read() {
  return awescoAPI.get(`/api/v1/message/{id}/`)
}
function api_v1_message_update(requestBody) {
  return awescoAPI.put(`/api/v1/message/{id}/`, requestBody)
}
function api_v1_message_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/message/{id}/`, requestBody)
}
function api_v1_message_delete() {
  return awescoAPI.delete(`/api/v1/message/{id}/`)
}
function api_v1_notification_list() {
  return awescoAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(requestBody) {
  return awescoAPI.post(`/api/v1/notification/`, requestBody)
}
function api_v1_notification_read() {
  return awescoAPI.get(`/api/v1/notification/{id}/`)
}
function api_v1_notification_update(requestBody) {
  return awescoAPI.put(`/api/v1/notification/{id}/`, requestBody)
}
function api_v1_notification_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/notification/{id}/`, requestBody)
}
function api_v1_notification_delete() {
  return awescoAPI.delete(`/api/v1/notification/{id}/`)
}
function api_v1_paymentmethod_list() {
  return awescoAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(requestBody) {
  return awescoAPI.post(`/api/v1/paymentmethod/`, requestBody)
}
function api_v1_paymentmethod_read() {
  return awescoAPI.get(`/api/v1/paymentmethod/{id}/`)
}
function api_v1_paymentmethod_update(requestBody) {
  return awescoAPI.put(`/api/v1/paymentmethod/{id}/`, requestBody)
}
function api_v1_paymentmethod_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/paymentmethod/{id}/`, requestBody)
}
function api_v1_paymentmethod_delete() {
  return awescoAPI.delete(`/api/v1/paymentmethod/{id}/`)
}
function api_v1_profilelocation_list() {
  return awescoAPI.get(`/api/v1/profilelocation/`)
}
function api_v1_profilelocation_create(requestBody) {
  return awescoAPI.post(`/api/v1/profilelocation/`, requestBody)
}
function api_v1_profilelocation_read() {
  return awescoAPI.get(`/api/v1/profilelocation/{id}/`)
}
function api_v1_profilelocation_update(requestBody) {
  return awescoAPI.put(`/api/v1/profilelocation/{id}/`, requestBody)
}
function api_v1_profilelocation_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/profilelocation/{id}/`, requestBody)
}
function api_v1_profilelocation_delete() {
  return awescoAPI.delete(`/api/v1/profilelocation/{id}/`)
}
function api_v1_rating_list() {
  return awescoAPI.get(`/api/v1/rating/`)
}
function api_v1_rating_create(requestBody) {
  return awescoAPI.post(`/api/v1/rating/`, requestBody)
}
function api_v1_rating_read() {
  return awescoAPI.get(`/api/v1/rating/{id}/`)
}
function api_v1_rating_update(requestBody) {
  return awescoAPI.put(`/api/v1/rating/{id}/`, requestBody)
}
function api_v1_rating_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/rating/{id}/`, requestBody)
}
function api_v1_rating_delete() {
  return awescoAPI.delete(`/api/v1/rating/{id}/`)
}
function api_v1_signup_create(requestBody) {
  return awescoAPI.post(`/api/v1/signup/`, requestBody)
}
function api_v1_userprofile_list() {
  return awescoAPI.get(`/api/v1/userprofile/`)
}
function api_v1_userprofile_create(requestBody) {
  return awescoAPI.post(`/api/v1/userprofile/`, requestBody)
}
function api_v1_userprofile_read() {
  return awescoAPI.get(`/api/v1/userprofile/{id}/`)
}
function api_v1_userprofile_update(requestBody) {
  return awescoAPI.put(`/api/v1/userprofile/{id}/`, requestBody)
}
function api_v1_userprofile_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/userprofile/{id}/`, requestBody)
}
function api_v1_userprofile_delete() {
  return awescoAPI.delete(`/api/v1/userprofile/{id}/`)
}
function api_v1_userwallet_list() {
  return awescoAPI.get(`/api/v1/userwallet/`)
}
function api_v1_userwallet_create(requestBody) {
  return awescoAPI.post(`/api/v1/userwallet/`, requestBody)
}
function api_v1_userwallet_read() {
  return awescoAPI.get(`/api/v1/userwallet/{id}/`)
}
function api_v1_userwallet_update(requestBody) {
  return awescoAPI.put(`/api/v1/userwallet/{id}/`, requestBody)
}
function api_v1_userwallet_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/userwallet/{id}/`, requestBody)
}
function api_v1_userwallet_delete() {
  return awescoAPI.delete(`/api/v1/userwallet/{id}/`)
}
function api_v1_vehicle_list() {
  return awescoAPI.get(`/api/v1/vehicle/`)
}
function api_v1_vehicle_create(requestBody) {
  return awescoAPI.post(`/api/v1/vehicle/`, requestBody)
}
function api_v1_vehicle_read() {
  return awescoAPI.get(`/api/v1/vehicle/{id}/`)
}
function api_v1_vehicle_update(requestBody) {
  return awescoAPI.put(`/api/v1/vehicle/{id}/`, requestBody)
}
function api_v1_vehicle_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/vehicle/{id}/`, requestBody)
}
function api_v1_vehicle_delete() {
  return awescoAPI.delete(`/api/v1/vehicle/{id}/`)
}
function api_v1_vehiclelocation_list() {
  return awescoAPI.get(`/api/v1/vehiclelocation/`)
}
function api_v1_vehiclelocation_create(requestBody) {
  return awescoAPI.post(`/api/v1/vehiclelocation/`, requestBody)
}
function api_v1_vehiclelocation_read() {
  return awescoAPI.get(`/api/v1/vehiclelocation/{id}/`)
}
function api_v1_vehiclelocation_update(requestBody) {
  return awescoAPI.put(`/api/v1/vehiclelocation/{id}/`, requestBody)
}
function api_v1_vehiclelocation_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/vehiclelocation/{id}/`, requestBody)
}
function api_v1_vehiclelocation_delete() {
  return awescoAPI.delete(`/api/v1/vehiclelocation/{id}/`)
}
function api_v1_vehicletype_list() {
  return awescoAPI.get(`/api/v1/vehicletype/`)
}
function api_v1_vehicletype_create(requestBody) {
  return awescoAPI.post(`/api/v1/vehicletype/`, requestBody)
}
function api_v1_vehicletype_read() {
  return awescoAPI.get(`/api/v1/vehicletype/{id}/`)
}
function api_v1_vehicletype_update(requestBody) {
  return awescoAPI.put(`/api/v1/vehicletype/{id}/`, requestBody)
}
function api_v1_vehicletype_partial_update(requestBody) {
  return awescoAPI.patch(`/api/v1/vehicletype/{id}/`, requestBody)
}
function api_v1_vehicletype_delete() {
  return awescoAPI.delete(`/api/v1/vehicletype/{id}/`)
}
function rest_auth_login_create(requestBody) {
  return awescoAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return awescoAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return awescoAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return awescoAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return awescoAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return awescoAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return awescoAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return awescoAPI.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return awescoAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return awescoAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return awescoAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_bookingtransaction_list,
  api_v1_bookingtransaction_create,
  api_v1_bookingtransaction_read,
  api_v1_bookingtransaction_update,
  api_v1_bookingtransaction_partial_update,
  api_v1_bookingtransaction_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_document_list,
  api_v1_document_create,
  api_v1_document_read,
  api_v1_document_update,
  api_v1_document_partial_update,
  api_v1_document_delete,
  api_v1_driverprofile_list,
  api_v1_driverprofile_create,
  api_v1_driverprofile_read,
  api_v1_driverprofile_update,
  api_v1_driverprofile_partial_update,
  api_v1_driverprofile_delete,
  api_v1_driverwallet_list,
  api_v1_driverwallet_create,
  api_v1_driverwallet_read,
  api_v1_driverwallet_update,
  api_v1_driverwallet_partial_update,
  api_v1_driverwallet_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_invitecode_list,
  api_v1_invitecode_create,
  api_v1_invitecode_read,
  api_v1_invitecode_update,
  api_v1_invitecode_partial_update,
  api_v1_invitecode_delete,
  api_v1_login_create,
  api_v1_maplocation_list,
  api_v1_maplocation_create,
  api_v1_maplocation_read,
  api_v1_maplocation_update,
  api_v1_maplocation_partial_update,
  api_v1_maplocation_delete,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_read,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_profilelocation_list,
  api_v1_profilelocation_create,
  api_v1_profilelocation_read,
  api_v1_profilelocation_update,
  api_v1_profilelocation_partial_update,
  api_v1_profilelocation_delete,
  api_v1_rating_list,
  api_v1_rating_create,
  api_v1_rating_read,
  api_v1_rating_update,
  api_v1_rating_partial_update,
  api_v1_rating_delete,
  api_v1_signup_create,
  api_v1_userprofile_list,
  api_v1_userprofile_create,
  api_v1_userprofile_read,
  api_v1_userprofile_update,
  api_v1_userprofile_partial_update,
  api_v1_userprofile_delete,
  api_v1_userwallet_list,
  api_v1_userwallet_create,
  api_v1_userwallet_read,
  api_v1_userwallet_update,
  api_v1_userwallet_partial_update,
  api_v1_userwallet_delete,
  api_v1_vehicle_list,
  api_v1_vehicle_create,
  api_v1_vehicle_read,
  api_v1_vehicle_update,
  api_v1_vehicle_partial_update,
  api_v1_vehicle_delete,
  api_v1_vehiclelocation_list,
  api_v1_vehiclelocation_create,
  api_v1_vehiclelocation_read,
  api_v1_vehiclelocation_update,
  api_v1_vehiclelocation_partial_update,
  api_v1_vehiclelocation_delete,
  api_v1_vehicletype_list,
  api_v1_vehicletype_create,
  api_v1_vehicletype_read,
  api_v1_vehicletype_update,
  api_v1_vehicletype_partial_update,
  api_v1_vehicletype_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
