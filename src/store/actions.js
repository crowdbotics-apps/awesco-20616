import * as types from "./constants"
export const api_v1_bookingtransaction_list = () => ({
  type: types.API_V1_BOOKINGTRANSACTION_LIST
})

export const api_v1_bookingtransaction_listSucceeded = response => ({
  type: types.API_V1_BOOKINGTRANSACTION_LIST_SUCCEEDED,
  response
})

export const api_v1_bookingtransaction_listFailed = error => ({
  type: types.API_V1_BOOKINGTRANSACTION_LIST_FAILED,
  error
})

export const api_v1_bookingtransaction_create = () => ({
  type: types.API_V1_BOOKINGTRANSACTION_CREATE
})

export const api_v1_bookingtransaction_createSucceeded = response => ({
  type: types.API_V1_BOOKINGTRANSACTION_CREATE_SUCCEEDED,
  response
})

export const api_v1_bookingtransaction_createFailed = error => ({
  type: types.API_V1_BOOKINGTRANSACTION_CREATE_FAILED,
  error
})

export const api_v1_bookingtransaction_read = () => ({
  type: types.API_V1_BOOKINGTRANSACTION_READ
})

export const api_v1_bookingtransaction_readSucceeded = response => ({
  type: types.API_V1_BOOKINGTRANSACTION_READ_SUCCEEDED,
  response
})

export const api_v1_bookingtransaction_readFailed = error => ({
  type: types.API_V1_BOOKINGTRANSACTION_READ_FAILED,
  error
})

export const api_v1_bookingtransaction_update = () => ({
  type: types.API_V1_BOOKINGTRANSACTION_UPDATE
})

export const api_v1_bookingtransaction_updateSucceeded = response => ({
  type: types.API_V1_BOOKINGTRANSACTION_UPDATE_SUCCEEDED,
  response
})

export const api_v1_bookingtransaction_updateFailed = error => ({
  type: types.API_V1_BOOKINGTRANSACTION_UPDATE_FAILED,
  error
})

export const api_v1_bookingtransaction_partial_update = () => ({
  type: types.API_V1_BOOKINGTRANSACTION_PARTIAL_UPDATE
})

export const api_v1_bookingtransaction_partial_updateSucceeded = response => ({
  type: types.API_V1_BOOKINGTRANSACTION_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_bookingtransaction_partial_updateFailed = error => ({
  type: types.API_V1_BOOKINGTRANSACTION_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_bookingtransaction_delete = () => ({
  type: types.API_V1_BOOKINGTRANSACTION_DELETE
})

export const api_v1_bookingtransaction_deleteSucceeded = response => ({
  type: types.API_V1_BOOKINGTRANSACTION_DELETE_SUCCEEDED,
  response
})

export const api_v1_bookingtransaction_deleteFailed = error => ({
  type: types.API_V1_BOOKINGTRANSACTION_DELETE_FAILED,
  error
})

export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})

export const api_v1_customtext_listSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response
})

export const api_v1_customtext_listFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})

export const api_v1_customtext_readSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response
})

export const api_v1_customtext_readFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error
})

export const api_v1_customtext_update = () => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE
})

export const api_v1_customtext_updateSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response
})

export const api_v1_customtext_updateFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error
})

export const api_v1_customtext_partial_update = () => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE
})

export const api_v1_customtext_partial_updateSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_customtext_partial_updateFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_document_list = () => ({ type: types.API_V1_DOCUMENT_LIST })
export const api_v1_document_listSucceeded = response => ({
  type: types.API_V1_DOCUMENT_LIST_SUCCEEDED,
  response
})

export const api_v1_document_listFailed = error => ({
  type: types.API_V1_DOCUMENT_LIST_FAILED,
  error
})

export const api_v1_document_create = () => ({
  type: types.API_V1_DOCUMENT_CREATE
})

export const api_v1_document_createSucceeded = response => ({
  type: types.API_V1_DOCUMENT_CREATE_SUCCEEDED,
  response
})

export const api_v1_document_createFailed = error => ({
  type: types.API_V1_DOCUMENT_CREATE_FAILED,
  error
})

export const api_v1_document_read = () => ({ type: types.API_V1_DOCUMENT_READ })
export const api_v1_document_readSucceeded = response => ({
  type: types.API_V1_DOCUMENT_READ_SUCCEEDED,
  response
})

export const api_v1_document_readFailed = error => ({
  type: types.API_V1_DOCUMENT_READ_FAILED,
  error
})

export const api_v1_document_update = () => ({
  type: types.API_V1_DOCUMENT_UPDATE
})

export const api_v1_document_updateSucceeded = response => ({
  type: types.API_V1_DOCUMENT_UPDATE_SUCCEEDED,
  response
})

export const api_v1_document_updateFailed = error => ({
  type: types.API_V1_DOCUMENT_UPDATE_FAILED,
  error
})

export const api_v1_document_partial_update = () => ({
  type: types.API_V1_DOCUMENT_PARTIAL_UPDATE
})

export const api_v1_document_partial_updateSucceeded = response => ({
  type: types.API_V1_DOCUMENT_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_document_partial_updateFailed = error => ({
  type: types.API_V1_DOCUMENT_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_document_delete = () => ({
  type: types.API_V1_DOCUMENT_DELETE
})

export const api_v1_document_deleteSucceeded = response => ({
  type: types.API_V1_DOCUMENT_DELETE_SUCCEEDED,
  response
})

export const api_v1_document_deleteFailed = error => ({
  type: types.API_V1_DOCUMENT_DELETE_FAILED,
  error
})

export const api_v1_driverprofile_list = () => ({
  type: types.API_V1_DRIVERPROFILE_LIST
})

export const api_v1_driverprofile_listSucceeded = response => ({
  type: types.API_V1_DRIVERPROFILE_LIST_SUCCEEDED,
  response
})

export const api_v1_driverprofile_listFailed = error => ({
  type: types.API_V1_DRIVERPROFILE_LIST_FAILED,
  error
})

export const api_v1_driverprofile_create = () => ({
  type: types.API_V1_DRIVERPROFILE_CREATE
})

export const api_v1_driverprofile_createSucceeded = response => ({
  type: types.API_V1_DRIVERPROFILE_CREATE_SUCCEEDED,
  response
})

export const api_v1_driverprofile_createFailed = error => ({
  type: types.API_V1_DRIVERPROFILE_CREATE_FAILED,
  error
})

export const api_v1_driverprofile_read = () => ({
  type: types.API_V1_DRIVERPROFILE_READ
})

export const api_v1_driverprofile_readSucceeded = response => ({
  type: types.API_V1_DRIVERPROFILE_READ_SUCCEEDED,
  response
})

export const api_v1_driverprofile_readFailed = error => ({
  type: types.API_V1_DRIVERPROFILE_READ_FAILED,
  error
})

export const api_v1_driverprofile_update = () => ({
  type: types.API_V1_DRIVERPROFILE_UPDATE
})

export const api_v1_driverprofile_updateSucceeded = response => ({
  type: types.API_V1_DRIVERPROFILE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_driverprofile_updateFailed = error => ({
  type: types.API_V1_DRIVERPROFILE_UPDATE_FAILED,
  error
})

export const api_v1_driverprofile_partial_update = () => ({
  type: types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE
})

export const api_v1_driverprofile_partial_updateSucceeded = response => ({
  type: types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_driverprofile_partial_updateFailed = error => ({
  type: types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_driverprofile_delete = () => ({
  type: types.API_V1_DRIVERPROFILE_DELETE
})

export const api_v1_driverprofile_deleteSucceeded = response => ({
  type: types.API_V1_DRIVERPROFILE_DELETE_SUCCEEDED,
  response
})

export const api_v1_driverprofile_deleteFailed = error => ({
  type: types.API_V1_DRIVERPROFILE_DELETE_FAILED,
  error
})

export const api_v1_driverwallet_list = () => ({
  type: types.API_V1_DRIVERWALLET_LIST
})

export const api_v1_driverwallet_listSucceeded = response => ({
  type: types.API_V1_DRIVERWALLET_LIST_SUCCEEDED,
  response
})

export const api_v1_driverwallet_listFailed = error => ({
  type: types.API_V1_DRIVERWALLET_LIST_FAILED,
  error
})

export const api_v1_driverwallet_create = () => ({
  type: types.API_V1_DRIVERWALLET_CREATE
})

export const api_v1_driverwallet_createSucceeded = response => ({
  type: types.API_V1_DRIVERWALLET_CREATE_SUCCEEDED,
  response
})

export const api_v1_driverwallet_createFailed = error => ({
  type: types.API_V1_DRIVERWALLET_CREATE_FAILED,
  error
})

export const api_v1_driverwallet_read = () => ({
  type: types.API_V1_DRIVERWALLET_READ
})

export const api_v1_driverwallet_readSucceeded = response => ({
  type: types.API_V1_DRIVERWALLET_READ_SUCCEEDED,
  response
})

export const api_v1_driverwallet_readFailed = error => ({
  type: types.API_V1_DRIVERWALLET_READ_FAILED,
  error
})

export const api_v1_driverwallet_update = () => ({
  type: types.API_V1_DRIVERWALLET_UPDATE
})

export const api_v1_driverwallet_updateSucceeded = response => ({
  type: types.API_V1_DRIVERWALLET_UPDATE_SUCCEEDED,
  response
})

export const api_v1_driverwallet_updateFailed = error => ({
  type: types.API_V1_DRIVERWALLET_UPDATE_FAILED,
  error
})

export const api_v1_driverwallet_partial_update = () => ({
  type: types.API_V1_DRIVERWALLET_PARTIAL_UPDATE
})

export const api_v1_driverwallet_partial_updateSucceeded = response => ({
  type: types.API_V1_DRIVERWALLET_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_driverwallet_partial_updateFailed = error => ({
  type: types.API_V1_DRIVERWALLET_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_driverwallet_delete = () => ({
  type: types.API_V1_DRIVERWALLET_DELETE
})

export const api_v1_driverwallet_deleteSucceeded = response => ({
  type: types.API_V1_DRIVERWALLET_DELETE_SUCCEEDED,
  response
})

export const api_v1_driverwallet_deleteFailed = error => ({
  type: types.API_V1_DRIVERWALLET_DELETE_FAILED,
  error
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response
})

export const api_v1_homepage_listFailed = error => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response
})

export const api_v1_homepage_readFailed = error => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error
})

export const api_v1_homepage_update = () => ({
  type: types.API_V1_HOMEPAGE_UPDATE
})

export const api_v1_homepage_updateSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_homepage_updateFailed = error => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error
})

export const api_v1_homepage_partial_update = () => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE
})

export const api_v1_homepage_partial_updateSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_homepage_partial_updateFailed = error => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_invitecode_list = () => ({
  type: types.API_V1_INVITECODE_LIST
})

export const api_v1_invitecode_listSucceeded = response => ({
  type: types.API_V1_INVITECODE_LIST_SUCCEEDED,
  response
})

export const api_v1_invitecode_listFailed = error => ({
  type: types.API_V1_INVITECODE_LIST_FAILED,
  error
})

export const api_v1_invitecode_create = () => ({
  type: types.API_V1_INVITECODE_CREATE
})

export const api_v1_invitecode_createSucceeded = response => ({
  type: types.API_V1_INVITECODE_CREATE_SUCCEEDED,
  response
})

export const api_v1_invitecode_createFailed = error => ({
  type: types.API_V1_INVITECODE_CREATE_FAILED,
  error
})

export const api_v1_invitecode_read = () => ({
  type: types.API_V1_INVITECODE_READ
})

export const api_v1_invitecode_readSucceeded = response => ({
  type: types.API_V1_INVITECODE_READ_SUCCEEDED,
  response
})

export const api_v1_invitecode_readFailed = error => ({
  type: types.API_V1_INVITECODE_READ_FAILED,
  error
})

export const api_v1_invitecode_update = () => ({
  type: types.API_V1_INVITECODE_UPDATE
})

export const api_v1_invitecode_updateSucceeded = response => ({
  type: types.API_V1_INVITECODE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_invitecode_updateFailed = error => ({
  type: types.API_V1_INVITECODE_UPDATE_FAILED,
  error
})

export const api_v1_invitecode_partial_update = () => ({
  type: types.API_V1_INVITECODE_PARTIAL_UPDATE
})

export const api_v1_invitecode_partial_updateSucceeded = response => ({
  type: types.API_V1_INVITECODE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_invitecode_partial_updateFailed = error => ({
  type: types.API_V1_INVITECODE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_invitecode_delete = () => ({
  type: types.API_V1_INVITECODE_DELETE
})

export const api_v1_invitecode_deleteSucceeded = response => ({
  type: types.API_V1_INVITECODE_DELETE_SUCCEEDED,
  response
})

export const api_v1_invitecode_deleteFailed = error => ({
  type: types.API_V1_INVITECODE_DELETE_FAILED,
  error
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = response => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response
})

export const api_v1_login_createFailed = error => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error
})

export const api_v1_maplocation_list = () => ({
  type: types.API_V1_MAPLOCATION_LIST
})

export const api_v1_maplocation_listSucceeded = response => ({
  type: types.API_V1_MAPLOCATION_LIST_SUCCEEDED,
  response
})

export const api_v1_maplocation_listFailed = error => ({
  type: types.API_V1_MAPLOCATION_LIST_FAILED,
  error
})

export const api_v1_maplocation_create = () => ({
  type: types.API_V1_MAPLOCATION_CREATE
})

export const api_v1_maplocation_createSucceeded = response => ({
  type: types.API_V1_MAPLOCATION_CREATE_SUCCEEDED,
  response
})

export const api_v1_maplocation_createFailed = error => ({
  type: types.API_V1_MAPLOCATION_CREATE_FAILED,
  error
})

export const api_v1_maplocation_read = () => ({
  type: types.API_V1_MAPLOCATION_READ
})

export const api_v1_maplocation_readSucceeded = response => ({
  type: types.API_V1_MAPLOCATION_READ_SUCCEEDED,
  response
})

export const api_v1_maplocation_readFailed = error => ({
  type: types.API_V1_MAPLOCATION_READ_FAILED,
  error
})

export const api_v1_maplocation_update = () => ({
  type: types.API_V1_MAPLOCATION_UPDATE
})

export const api_v1_maplocation_updateSucceeded = response => ({
  type: types.API_V1_MAPLOCATION_UPDATE_SUCCEEDED,
  response
})

export const api_v1_maplocation_updateFailed = error => ({
  type: types.API_V1_MAPLOCATION_UPDATE_FAILED,
  error
})

export const api_v1_maplocation_partial_update = () => ({
  type: types.API_V1_MAPLOCATION_PARTIAL_UPDATE
})

export const api_v1_maplocation_partial_updateSucceeded = response => ({
  type: types.API_V1_MAPLOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_maplocation_partial_updateFailed = error => ({
  type: types.API_V1_MAPLOCATION_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_maplocation_delete = () => ({
  type: types.API_V1_MAPLOCATION_DELETE
})

export const api_v1_maplocation_deleteSucceeded = response => ({
  type: types.API_V1_MAPLOCATION_DELETE_SUCCEEDED,
  response
})

export const api_v1_maplocation_deleteFailed = error => ({
  type: types.API_V1_MAPLOCATION_DELETE_FAILED,
  error
})

export const api_v1_message_list = () => ({ type: types.API_V1_MESSAGE_LIST })
export const api_v1_message_listSucceeded = response => ({
  type: types.API_V1_MESSAGE_LIST_SUCCEEDED,
  response
})

export const api_v1_message_listFailed = error => ({
  type: types.API_V1_MESSAGE_LIST_FAILED,
  error
})

export const api_v1_message_create = () => ({
  type: types.API_V1_MESSAGE_CREATE
})

export const api_v1_message_createSucceeded = response => ({
  type: types.API_V1_MESSAGE_CREATE_SUCCEEDED,
  response
})

export const api_v1_message_createFailed = error => ({
  type: types.API_V1_MESSAGE_CREATE_FAILED,
  error
})

export const api_v1_message_read = () => ({ type: types.API_V1_MESSAGE_READ })
export const api_v1_message_readSucceeded = response => ({
  type: types.API_V1_MESSAGE_READ_SUCCEEDED,
  response
})

export const api_v1_message_readFailed = error => ({
  type: types.API_V1_MESSAGE_READ_FAILED,
  error
})

export const api_v1_message_update = () => ({
  type: types.API_V1_MESSAGE_UPDATE
})

export const api_v1_message_updateSucceeded = response => ({
  type: types.API_V1_MESSAGE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_message_updateFailed = error => ({
  type: types.API_V1_MESSAGE_UPDATE_FAILED,
  error
})

export const api_v1_message_partial_update = () => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE
})

export const api_v1_message_partial_updateSucceeded = response => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_message_partial_updateFailed = error => ({
  type: types.API_V1_MESSAGE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_message_delete = () => ({
  type: types.API_V1_MESSAGE_DELETE
})

export const api_v1_message_deleteSucceeded = response => ({
  type: types.API_V1_MESSAGE_DELETE_SUCCEEDED,
  response
})

export const api_v1_message_deleteFailed = error => ({
  type: types.API_V1_MESSAGE_DELETE_FAILED,
  error
})

export const api_v1_notification_list = () => ({
  type: types.API_V1_NOTIFICATION_LIST
})

export const api_v1_notification_listSucceeded = response => ({
  type: types.API_V1_NOTIFICATION_LIST_SUCCEEDED,
  response
})

export const api_v1_notification_listFailed = error => ({
  type: types.API_V1_NOTIFICATION_LIST_FAILED,
  error
})

export const api_v1_notification_create = () => ({
  type: types.API_V1_NOTIFICATION_CREATE
})

export const api_v1_notification_createSucceeded = response => ({
  type: types.API_V1_NOTIFICATION_CREATE_SUCCEEDED,
  response
})

export const api_v1_notification_createFailed = error => ({
  type: types.API_V1_NOTIFICATION_CREATE_FAILED,
  error
})

export const api_v1_notification_read = () => ({
  type: types.API_V1_NOTIFICATION_READ
})

export const api_v1_notification_readSucceeded = response => ({
  type: types.API_V1_NOTIFICATION_READ_SUCCEEDED,
  response
})

export const api_v1_notification_readFailed = error => ({
  type: types.API_V1_NOTIFICATION_READ_FAILED,
  error
})

export const api_v1_notification_update = () => ({
  type: types.API_V1_NOTIFICATION_UPDATE
})

export const api_v1_notification_updateSucceeded = response => ({
  type: types.API_V1_NOTIFICATION_UPDATE_SUCCEEDED,
  response
})

export const api_v1_notification_updateFailed = error => ({
  type: types.API_V1_NOTIFICATION_UPDATE_FAILED,
  error
})

export const api_v1_notification_partial_update = () => ({
  type: types.API_V1_NOTIFICATION_PARTIAL_UPDATE
})

export const api_v1_notification_partial_updateSucceeded = response => ({
  type: types.API_V1_NOTIFICATION_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_notification_partial_updateFailed = error => ({
  type: types.API_V1_NOTIFICATION_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_notification_delete = () => ({
  type: types.API_V1_NOTIFICATION_DELETE
})

export const api_v1_notification_deleteSucceeded = response => ({
  type: types.API_V1_NOTIFICATION_DELETE_SUCCEEDED,
  response
})

export const api_v1_notification_deleteFailed = error => ({
  type: types.API_V1_NOTIFICATION_DELETE_FAILED,
  error
})

export const api_v1_paymentmethod_list = () => ({
  type: types.API_V1_PAYMENTMETHOD_LIST
})

export const api_v1_paymentmethod_listSucceeded = response => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED,
  response
})

export const api_v1_paymentmethod_listFailed = error => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_FAILED,
  error
})

export const api_v1_paymentmethod_create = () => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE
})

export const api_v1_paymentmethod_createSucceeded = response => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED,
  response
})

export const api_v1_paymentmethod_createFailed = error => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_FAILED,
  error
})

export const api_v1_paymentmethod_read = () => ({
  type: types.API_V1_PAYMENTMETHOD_READ
})

export const api_v1_paymentmethod_readSucceeded = response => ({
  type: types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED,
  response
})

export const api_v1_paymentmethod_readFailed = error => ({
  type: types.API_V1_PAYMENTMETHOD_READ_FAILED,
  error
})

export const api_v1_paymentmethod_update = () => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE
})

export const api_v1_paymentmethod_updateSucceeded = response => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED,
  response
})

export const api_v1_paymentmethod_updateFailed = error => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_FAILED,
  error
})

export const api_v1_paymentmethod_partial_update = () => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE
})

export const api_v1_paymentmethod_partial_updateSucceeded = response => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_paymentmethod_partial_updateFailed = error => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_paymentmethod_delete = () => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE
})

export const api_v1_paymentmethod_deleteSucceeded = response => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED,
  response
})

export const api_v1_paymentmethod_deleteFailed = error => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_FAILED,
  error
})

export const api_v1_profilelocation_list = () => ({
  type: types.API_V1_PROFILELOCATION_LIST
})

export const api_v1_profilelocation_listSucceeded = response => ({
  type: types.API_V1_PROFILELOCATION_LIST_SUCCEEDED,
  response
})

export const api_v1_profilelocation_listFailed = error => ({
  type: types.API_V1_PROFILELOCATION_LIST_FAILED,
  error
})

export const api_v1_profilelocation_create = () => ({
  type: types.API_V1_PROFILELOCATION_CREATE
})

export const api_v1_profilelocation_createSucceeded = response => ({
  type: types.API_V1_PROFILELOCATION_CREATE_SUCCEEDED,
  response
})

export const api_v1_profilelocation_createFailed = error => ({
  type: types.API_V1_PROFILELOCATION_CREATE_FAILED,
  error
})

export const api_v1_profilelocation_read = () => ({
  type: types.API_V1_PROFILELOCATION_READ
})

export const api_v1_profilelocation_readSucceeded = response => ({
  type: types.API_V1_PROFILELOCATION_READ_SUCCEEDED,
  response
})

export const api_v1_profilelocation_readFailed = error => ({
  type: types.API_V1_PROFILELOCATION_READ_FAILED,
  error
})

export const api_v1_profilelocation_update = () => ({
  type: types.API_V1_PROFILELOCATION_UPDATE
})

export const api_v1_profilelocation_updateSucceeded = response => ({
  type: types.API_V1_PROFILELOCATION_UPDATE_SUCCEEDED,
  response
})

export const api_v1_profilelocation_updateFailed = error => ({
  type: types.API_V1_PROFILELOCATION_UPDATE_FAILED,
  error
})

export const api_v1_profilelocation_partial_update = () => ({
  type: types.API_V1_PROFILELOCATION_PARTIAL_UPDATE
})

export const api_v1_profilelocation_partial_updateSucceeded = response => ({
  type: types.API_V1_PROFILELOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_profilelocation_partial_updateFailed = error => ({
  type: types.API_V1_PROFILELOCATION_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_profilelocation_delete = () => ({
  type: types.API_V1_PROFILELOCATION_DELETE
})

export const api_v1_profilelocation_deleteSucceeded = response => ({
  type: types.API_V1_PROFILELOCATION_DELETE_SUCCEEDED,
  response
})

export const api_v1_profilelocation_deleteFailed = error => ({
  type: types.API_V1_PROFILELOCATION_DELETE_FAILED,
  error
})

export const api_v1_rating_list = () => ({ type: types.API_V1_RATING_LIST })
export const api_v1_rating_listSucceeded = response => ({
  type: types.API_V1_RATING_LIST_SUCCEEDED,
  response
})

export const api_v1_rating_listFailed = error => ({
  type: types.API_V1_RATING_LIST_FAILED,
  error
})

export const api_v1_rating_create = () => ({ type: types.API_V1_RATING_CREATE })
export const api_v1_rating_createSucceeded = response => ({
  type: types.API_V1_RATING_CREATE_SUCCEEDED,
  response
})

export const api_v1_rating_createFailed = error => ({
  type: types.API_V1_RATING_CREATE_FAILED,
  error
})

export const api_v1_rating_read = () => ({ type: types.API_V1_RATING_READ })
export const api_v1_rating_readSucceeded = response => ({
  type: types.API_V1_RATING_READ_SUCCEEDED,
  response
})

export const api_v1_rating_readFailed = error => ({
  type: types.API_V1_RATING_READ_FAILED,
  error
})

export const api_v1_rating_update = () => ({ type: types.API_V1_RATING_UPDATE })
export const api_v1_rating_updateSucceeded = response => ({
  type: types.API_V1_RATING_UPDATE_SUCCEEDED,
  response
})

export const api_v1_rating_updateFailed = error => ({
  type: types.API_V1_RATING_UPDATE_FAILED,
  error
})

export const api_v1_rating_partial_update = () => ({
  type: types.API_V1_RATING_PARTIAL_UPDATE
})

export const api_v1_rating_partial_updateSucceeded = response => ({
  type: types.API_V1_RATING_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_rating_partial_updateFailed = error => ({
  type: types.API_V1_RATING_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_rating_delete = () => ({ type: types.API_V1_RATING_DELETE })
export const api_v1_rating_deleteSucceeded = response => ({
  type: types.API_V1_RATING_DELETE_SUCCEEDED,
  response
})

export const api_v1_rating_deleteFailed = error => ({
  type: types.API_V1_RATING_DELETE_FAILED,
  error
})

export const api_v1_signup_create = () => ({ type: types.API_V1_SIGNUP_CREATE })
export const api_v1_signup_createSucceeded = response => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response
})

export const api_v1_signup_createFailed = error => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error
})

export const api_v1_userprofile_list = () => ({
  type: types.API_V1_USERPROFILE_LIST
})

export const api_v1_userprofile_listSucceeded = response => ({
  type: types.API_V1_USERPROFILE_LIST_SUCCEEDED,
  response
})

export const api_v1_userprofile_listFailed = error => ({
  type: types.API_V1_USERPROFILE_LIST_FAILED,
  error
})

export const api_v1_userprofile_create = () => ({
  type: types.API_V1_USERPROFILE_CREATE
})

export const api_v1_userprofile_createSucceeded = response => ({
  type: types.API_V1_USERPROFILE_CREATE_SUCCEEDED,
  response
})

export const api_v1_userprofile_createFailed = error => ({
  type: types.API_V1_USERPROFILE_CREATE_FAILED,
  error
})

export const api_v1_userprofile_read = () => ({
  type: types.API_V1_USERPROFILE_READ
})

export const api_v1_userprofile_readSucceeded = response => ({
  type: types.API_V1_USERPROFILE_READ_SUCCEEDED,
  response
})

export const api_v1_userprofile_readFailed = error => ({
  type: types.API_V1_USERPROFILE_READ_FAILED,
  error
})

export const api_v1_userprofile_update = () => ({
  type: types.API_V1_USERPROFILE_UPDATE
})

export const api_v1_userprofile_updateSucceeded = response => ({
  type: types.API_V1_USERPROFILE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_userprofile_updateFailed = error => ({
  type: types.API_V1_USERPROFILE_UPDATE_FAILED,
  error
})

export const api_v1_userprofile_partial_update = () => ({
  type: types.API_V1_USERPROFILE_PARTIAL_UPDATE
})

export const api_v1_userprofile_partial_updateSucceeded = response => ({
  type: types.API_V1_USERPROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_userprofile_partial_updateFailed = error => ({
  type: types.API_V1_USERPROFILE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_userprofile_delete = () => ({
  type: types.API_V1_USERPROFILE_DELETE
})

export const api_v1_userprofile_deleteSucceeded = response => ({
  type: types.API_V1_USERPROFILE_DELETE_SUCCEEDED,
  response
})

export const api_v1_userprofile_deleteFailed = error => ({
  type: types.API_V1_USERPROFILE_DELETE_FAILED,
  error
})

export const api_v1_userwallet_list = () => ({
  type: types.API_V1_USERWALLET_LIST
})

export const api_v1_userwallet_listSucceeded = response => ({
  type: types.API_V1_USERWALLET_LIST_SUCCEEDED,
  response
})

export const api_v1_userwallet_listFailed = error => ({
  type: types.API_V1_USERWALLET_LIST_FAILED,
  error
})

export const api_v1_userwallet_create = () => ({
  type: types.API_V1_USERWALLET_CREATE
})

export const api_v1_userwallet_createSucceeded = response => ({
  type: types.API_V1_USERWALLET_CREATE_SUCCEEDED,
  response
})

export const api_v1_userwallet_createFailed = error => ({
  type: types.API_V1_USERWALLET_CREATE_FAILED,
  error
})

export const api_v1_userwallet_read = () => ({
  type: types.API_V1_USERWALLET_READ
})

export const api_v1_userwallet_readSucceeded = response => ({
  type: types.API_V1_USERWALLET_READ_SUCCEEDED,
  response
})

export const api_v1_userwallet_readFailed = error => ({
  type: types.API_V1_USERWALLET_READ_FAILED,
  error
})

export const api_v1_userwallet_update = () => ({
  type: types.API_V1_USERWALLET_UPDATE
})

export const api_v1_userwallet_updateSucceeded = response => ({
  type: types.API_V1_USERWALLET_UPDATE_SUCCEEDED,
  response
})

export const api_v1_userwallet_updateFailed = error => ({
  type: types.API_V1_USERWALLET_UPDATE_FAILED,
  error
})

export const api_v1_userwallet_partial_update = () => ({
  type: types.API_V1_USERWALLET_PARTIAL_UPDATE
})

export const api_v1_userwallet_partial_updateSucceeded = response => ({
  type: types.API_V1_USERWALLET_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_userwallet_partial_updateFailed = error => ({
  type: types.API_V1_USERWALLET_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_userwallet_delete = () => ({
  type: types.API_V1_USERWALLET_DELETE
})

export const api_v1_userwallet_deleteSucceeded = response => ({
  type: types.API_V1_USERWALLET_DELETE_SUCCEEDED,
  response
})

export const api_v1_userwallet_deleteFailed = error => ({
  type: types.API_V1_USERWALLET_DELETE_FAILED,
  error
})

export const api_v1_vehicle_list = () => ({ type: types.API_V1_VEHICLE_LIST })
export const api_v1_vehicle_listSucceeded = response => ({
  type: types.API_V1_VEHICLE_LIST_SUCCEEDED,
  response
})

export const api_v1_vehicle_listFailed = error => ({
  type: types.API_V1_VEHICLE_LIST_FAILED,
  error
})

export const api_v1_vehicle_create = () => ({
  type: types.API_V1_VEHICLE_CREATE
})

export const api_v1_vehicle_createSucceeded = response => ({
  type: types.API_V1_VEHICLE_CREATE_SUCCEEDED,
  response
})

export const api_v1_vehicle_createFailed = error => ({
  type: types.API_V1_VEHICLE_CREATE_FAILED,
  error
})

export const api_v1_vehicle_read = () => ({ type: types.API_V1_VEHICLE_READ })
export const api_v1_vehicle_readSucceeded = response => ({
  type: types.API_V1_VEHICLE_READ_SUCCEEDED,
  response
})

export const api_v1_vehicle_readFailed = error => ({
  type: types.API_V1_VEHICLE_READ_FAILED,
  error
})

export const api_v1_vehicle_update = () => ({
  type: types.API_V1_VEHICLE_UPDATE
})

export const api_v1_vehicle_updateSucceeded = response => ({
  type: types.API_V1_VEHICLE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vehicle_updateFailed = error => ({
  type: types.API_V1_VEHICLE_UPDATE_FAILED,
  error
})

export const api_v1_vehicle_partial_update = () => ({
  type: types.API_V1_VEHICLE_PARTIAL_UPDATE
})

export const api_v1_vehicle_partial_updateSucceeded = response => ({
  type: types.API_V1_VEHICLE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vehicle_partial_updateFailed = error => ({
  type: types.API_V1_VEHICLE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_vehicle_delete = () => ({
  type: types.API_V1_VEHICLE_DELETE
})

export const api_v1_vehicle_deleteSucceeded = response => ({
  type: types.API_V1_VEHICLE_DELETE_SUCCEEDED,
  response
})

export const api_v1_vehicle_deleteFailed = error => ({
  type: types.API_V1_VEHICLE_DELETE_FAILED,
  error
})

export const api_v1_vehiclelocation_list = () => ({
  type: types.API_V1_VEHICLELOCATION_LIST
})

export const api_v1_vehiclelocation_listSucceeded = response => ({
  type: types.API_V1_VEHICLELOCATION_LIST_SUCCEEDED,
  response
})

export const api_v1_vehiclelocation_listFailed = error => ({
  type: types.API_V1_VEHICLELOCATION_LIST_FAILED,
  error
})

export const api_v1_vehiclelocation_create = () => ({
  type: types.API_V1_VEHICLELOCATION_CREATE
})

export const api_v1_vehiclelocation_createSucceeded = response => ({
  type: types.API_V1_VEHICLELOCATION_CREATE_SUCCEEDED,
  response
})

export const api_v1_vehiclelocation_createFailed = error => ({
  type: types.API_V1_VEHICLELOCATION_CREATE_FAILED,
  error
})

export const api_v1_vehiclelocation_read = () => ({
  type: types.API_V1_VEHICLELOCATION_READ
})

export const api_v1_vehiclelocation_readSucceeded = response => ({
  type: types.API_V1_VEHICLELOCATION_READ_SUCCEEDED,
  response
})

export const api_v1_vehiclelocation_readFailed = error => ({
  type: types.API_V1_VEHICLELOCATION_READ_FAILED,
  error
})

export const api_v1_vehiclelocation_update = () => ({
  type: types.API_V1_VEHICLELOCATION_UPDATE
})

export const api_v1_vehiclelocation_updateSucceeded = response => ({
  type: types.API_V1_VEHICLELOCATION_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vehiclelocation_updateFailed = error => ({
  type: types.API_V1_VEHICLELOCATION_UPDATE_FAILED,
  error
})

export const api_v1_vehiclelocation_partial_update = () => ({
  type: types.API_V1_VEHICLELOCATION_PARTIAL_UPDATE
})

export const api_v1_vehiclelocation_partial_updateSucceeded = response => ({
  type: types.API_V1_VEHICLELOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vehiclelocation_partial_updateFailed = error => ({
  type: types.API_V1_VEHICLELOCATION_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_vehiclelocation_delete = () => ({
  type: types.API_V1_VEHICLELOCATION_DELETE
})

export const api_v1_vehiclelocation_deleteSucceeded = response => ({
  type: types.API_V1_VEHICLELOCATION_DELETE_SUCCEEDED,
  response
})

export const api_v1_vehiclelocation_deleteFailed = error => ({
  type: types.API_V1_VEHICLELOCATION_DELETE_FAILED,
  error
})

export const api_v1_vehicletype_list = () => ({
  type: types.API_V1_VEHICLETYPE_LIST
})

export const api_v1_vehicletype_listSucceeded = response => ({
  type: types.API_V1_VEHICLETYPE_LIST_SUCCEEDED,
  response
})

export const api_v1_vehicletype_listFailed = error => ({
  type: types.API_V1_VEHICLETYPE_LIST_FAILED,
  error
})

export const api_v1_vehicletype_create = () => ({
  type: types.API_V1_VEHICLETYPE_CREATE
})

export const api_v1_vehicletype_createSucceeded = response => ({
  type: types.API_V1_VEHICLETYPE_CREATE_SUCCEEDED,
  response
})

export const api_v1_vehicletype_createFailed = error => ({
  type: types.API_V1_VEHICLETYPE_CREATE_FAILED,
  error
})

export const api_v1_vehicletype_read = () => ({
  type: types.API_V1_VEHICLETYPE_READ
})

export const api_v1_vehicletype_readSucceeded = response => ({
  type: types.API_V1_VEHICLETYPE_READ_SUCCEEDED,
  response
})

export const api_v1_vehicletype_readFailed = error => ({
  type: types.API_V1_VEHICLETYPE_READ_FAILED,
  error
})

export const api_v1_vehicletype_update = () => ({
  type: types.API_V1_VEHICLETYPE_UPDATE
})

export const api_v1_vehicletype_updateSucceeded = response => ({
  type: types.API_V1_VEHICLETYPE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vehicletype_updateFailed = error => ({
  type: types.API_V1_VEHICLETYPE_UPDATE_FAILED,
  error
})

export const api_v1_vehicletype_partial_update = () => ({
  type: types.API_V1_VEHICLETYPE_PARTIAL_UPDATE
})

export const api_v1_vehicletype_partial_updateSucceeded = response => ({
  type: types.API_V1_VEHICLETYPE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vehicletype_partial_updateFailed = error => ({
  type: types.API_V1_VEHICLETYPE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_vehicletype_delete = () => ({
  type: types.API_V1_VEHICLETYPE_DELETE
})

export const api_v1_vehicletype_deleteSucceeded = response => ({
  type: types.API_V1_VEHICLETYPE_DELETE_SUCCEEDED,
  response
})

export const api_v1_vehicletype_deleteFailed = error => ({
  type: types.API_V1_VEHICLETYPE_DELETE_FAILED,
  error
})

export const rest_auth_login_create = () => ({
  type: types.REST_AUTH_LOGIN_CREATE
})

export const rest_auth_login_createSucceeded = response => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response
})

export const rest_auth_login_createFailed = error => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})

export const rest_auth_logout_listSucceeded = response => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response
})

export const rest_auth_logout_listFailed = error => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})

export const rest_auth_logout_createSucceeded = response => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response
})

export const rest_auth_logout_createFailed = error => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error
})

export const rest_auth_password_change_create = () => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE
})

export const rest_auth_password_change_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response
})

export const rest_auth_password_change_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error
})

export const rest_auth_password_reset_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE
})

export const rest_auth_password_reset_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response
})

export const rest_auth_password_reset_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error
})

export const rest_auth_password_reset_confirm_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE
})

export const rest_auth_password_reset_confirm_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response
})

export const rest_auth_password_reset_confirm_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error
})

export const rest_auth_registration_create = () => ({
  type: types.REST_AUTH_REGISTRATION_CREATE
})

export const rest_auth_registration_createSucceeded = response => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response
})

export const rest_auth_registration_createFailed = error => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error
})

export const rest_auth_registration_verify_email_create = () => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE
})

export const rest_auth_registration_verify_email_createSucceeded = response => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response
})

export const rest_auth_registration_verify_email_createFailed = error => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = response => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response
})

export const rest_auth_user_readFailed = error => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error
})

export const rest_auth_user_update = () => ({
  type: types.REST_AUTH_USER_UPDATE
})

export const rest_auth_user_updateSucceeded = response => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response
})

export const rest_auth_user_updateFailed = error => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error
})

export const rest_auth_user_partial_update = () => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE
})

export const rest_auth_user_partial_updateSucceeded = response => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const rest_auth_user_partial_updateFailed = error => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error
})
