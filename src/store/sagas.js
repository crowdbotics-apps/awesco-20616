import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_bookingtransaction_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bookingtransaction_list, action)
    yield put(actions.api_v1_bookingtransaction_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_bookingtransaction_listFailed(err))
  }
}
function* api_v1_bookingtransaction_listWatcher() {
  yield takeEvery(
    types.API_V1_BOOKINGTRANSACTION_LIST,
    api_v1_bookingtransaction_listWorker
  )
}
function* api_v1_bookingtransaction_createWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_bookingtransaction_create,
      action
    )
    yield put(actions.api_v1_bookingtransaction_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_bookingtransaction_createFailed(err))
  }
}
function* api_v1_bookingtransaction_createWatcher() {
  yield takeEvery(
    types.API_V1_BOOKINGTRANSACTION_CREATE,
    api_v1_bookingtransaction_createWorker
  )
}
function* api_v1_bookingtransaction_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bookingtransaction_read, action)
    yield put(actions.api_v1_bookingtransaction_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_bookingtransaction_readFailed(err))
  }
}
function* api_v1_bookingtransaction_readWatcher() {
  yield takeEvery(
    types.API_V1_BOOKINGTRANSACTION_READ,
    api_v1_bookingtransaction_readWorker
  )
}
function* api_v1_bookingtransaction_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_bookingtransaction_update,
      action
    )
    yield put(actions.api_v1_bookingtransaction_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_bookingtransaction_updateFailed(err))
  }
}
function* api_v1_bookingtransaction_updateWatcher() {
  yield takeEvery(
    types.API_V1_BOOKINGTRANSACTION_UPDATE,
    api_v1_bookingtransaction_updateWorker
  )
}
function* api_v1_bookingtransaction_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_bookingtransaction_partial_update,
      action
    )
    yield put(actions.api_v1_bookingtransaction_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_bookingtransaction_partial_updateFailed(err))
  }
}
function* api_v1_bookingtransaction_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_BOOKINGTRANSACTION_PARTIAL_UPDATE,
    api_v1_bookingtransaction_partial_updateWorker
  )
}
function* api_v1_bookingtransaction_deleteWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_bookingtransaction_delete,
      action
    )
    yield put(actions.api_v1_bookingtransaction_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_bookingtransaction_deleteFailed(err))
  }
}
function* api_v1_bookingtransaction_deleteWatcher() {
  yield takeEvery(
    types.API_V1_BOOKINGTRANSACTION_DELETE,
    api_v1_bookingtransaction_deleteWorker
  )
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_document_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_document_list, action)
    yield put(actions.api_v1_document_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_document_listFailed(err))
  }
}
function* api_v1_document_listWatcher() {
  yield takeEvery(types.API_V1_DOCUMENT_LIST, api_v1_document_listWorker)
}
function* api_v1_document_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_document_create, action)
    yield put(actions.api_v1_document_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_document_createFailed(err))
  }
}
function* api_v1_document_createWatcher() {
  yield takeEvery(types.API_V1_DOCUMENT_CREATE, api_v1_document_createWorker)
}
function* api_v1_document_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_document_read, action)
    yield put(actions.api_v1_document_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_document_readFailed(err))
  }
}
function* api_v1_document_readWatcher() {
  yield takeEvery(types.API_V1_DOCUMENT_READ, api_v1_document_readWorker)
}
function* api_v1_document_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_document_update, action)
    yield put(actions.api_v1_document_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_document_updateFailed(err))
  }
}
function* api_v1_document_updateWatcher() {
  yield takeEvery(types.API_V1_DOCUMENT_UPDATE, api_v1_document_updateWorker)
}
function* api_v1_document_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_document_partial_update, action)
    yield put(actions.api_v1_document_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_document_partial_updateFailed(err))
  }
}
function* api_v1_document_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DOCUMENT_PARTIAL_UPDATE,
    api_v1_document_partial_updateWorker
  )
}
function* api_v1_document_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_document_delete, action)
    yield put(actions.api_v1_document_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_document_deleteFailed(err))
  }
}
function* api_v1_document_deleteWatcher() {
  yield takeEvery(types.API_V1_DOCUMENT_DELETE, api_v1_document_deleteWorker)
}
function* api_v1_driverprofile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_list, action)
    yield put(actions.api_v1_driverprofile_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_listFailed(err))
  }
}
function* api_v1_driverprofile_listWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_LIST,
    api_v1_driverprofile_listWorker
  )
}
function* api_v1_driverprofile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_create, action)
    yield put(actions.api_v1_driverprofile_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_createFailed(err))
  }
}
function* api_v1_driverprofile_createWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_CREATE,
    api_v1_driverprofile_createWorker
  )
}
function* api_v1_driverprofile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_read, action)
    yield put(actions.api_v1_driverprofile_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_readFailed(err))
  }
}
function* api_v1_driverprofile_readWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_READ,
    api_v1_driverprofile_readWorker
  )
}
function* api_v1_driverprofile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_update, action)
    yield put(actions.api_v1_driverprofile_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_updateFailed(err))
  }
}
function* api_v1_driverprofile_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_UPDATE,
    api_v1_driverprofile_updateWorker
  )
}
function* api_v1_driverprofile_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_driverprofile_partial_update,
      action
    )
    yield put(actions.api_v1_driverprofile_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_partial_updateFailed(err))
  }
}
function* api_v1_driverprofile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE,
    api_v1_driverprofile_partial_updateWorker
  )
}
function* api_v1_driverprofile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_delete, action)
    yield put(actions.api_v1_driverprofile_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_deleteFailed(err))
  }
}
function* api_v1_driverprofile_deleteWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_DELETE,
    api_v1_driverprofile_deleteWorker
  )
}
function* api_v1_driverwallet_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverwallet_list, action)
    yield put(actions.api_v1_driverwallet_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverwallet_listFailed(err))
  }
}
function* api_v1_driverwallet_listWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERWALLET_LIST,
    api_v1_driverwallet_listWorker
  )
}
function* api_v1_driverwallet_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverwallet_create, action)
    yield put(actions.api_v1_driverwallet_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverwallet_createFailed(err))
  }
}
function* api_v1_driverwallet_createWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERWALLET_CREATE,
    api_v1_driverwallet_createWorker
  )
}
function* api_v1_driverwallet_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverwallet_read, action)
    yield put(actions.api_v1_driverwallet_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverwallet_readFailed(err))
  }
}
function* api_v1_driverwallet_readWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERWALLET_READ,
    api_v1_driverwallet_readWorker
  )
}
function* api_v1_driverwallet_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverwallet_update, action)
    yield put(actions.api_v1_driverwallet_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverwallet_updateFailed(err))
  }
}
function* api_v1_driverwallet_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERWALLET_UPDATE,
    api_v1_driverwallet_updateWorker
  )
}
function* api_v1_driverwallet_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_driverwallet_partial_update,
      action
    )
    yield put(actions.api_v1_driverwallet_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverwallet_partial_updateFailed(err))
  }
}
function* api_v1_driverwallet_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERWALLET_PARTIAL_UPDATE,
    api_v1_driverwallet_partial_updateWorker
  )
}
function* api_v1_driverwallet_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverwallet_delete, action)
    yield put(actions.api_v1_driverwallet_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_driverwallet_deleteFailed(err))
  }
}
function* api_v1_driverwallet_deleteWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERWALLET_DELETE,
    api_v1_driverwallet_deleteWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_invitecode_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_list, action)
    yield put(actions.api_v1_invitecode_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_invitecode_listFailed(err))
  }
}
function* api_v1_invitecode_listWatcher() {
  yield takeEvery(types.API_V1_INVITECODE_LIST, api_v1_invitecode_listWorker)
}
function* api_v1_invitecode_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_create, action)
    yield put(actions.api_v1_invitecode_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_invitecode_createFailed(err))
  }
}
function* api_v1_invitecode_createWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_CREATE,
    api_v1_invitecode_createWorker
  )
}
function* api_v1_invitecode_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_read, action)
    yield put(actions.api_v1_invitecode_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_invitecode_readFailed(err))
  }
}
function* api_v1_invitecode_readWatcher() {
  yield takeEvery(types.API_V1_INVITECODE_READ, api_v1_invitecode_readWorker)
}
function* api_v1_invitecode_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_update, action)
    yield put(actions.api_v1_invitecode_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_invitecode_updateFailed(err))
  }
}
function* api_v1_invitecode_updateWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_UPDATE,
    api_v1_invitecode_updateWorker
  )
}
function* api_v1_invitecode_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_invitecode_partial_update,
      action
    )
    yield put(actions.api_v1_invitecode_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_invitecode_partial_updateFailed(err))
  }
}
function* api_v1_invitecode_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_PARTIAL_UPDATE,
    api_v1_invitecode_partial_updateWorker
  )
}
function* api_v1_invitecode_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_invitecode_delete, action)
    yield put(actions.api_v1_invitecode_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_invitecode_deleteFailed(err))
  }
}
function* api_v1_invitecode_deleteWatcher() {
  yield takeEvery(
    types.API_V1_INVITECODE_DELETE,
    api_v1_invitecode_deleteWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_maplocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_list, action)
    yield put(actions.api_v1_maplocation_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_maplocation_listFailed(err))
  }
}
function* api_v1_maplocation_listWatcher() {
  yield takeEvery(types.API_V1_MAPLOCATION_LIST, api_v1_maplocation_listWorker)
}
function* api_v1_maplocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_create, action)
    yield put(actions.api_v1_maplocation_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_maplocation_createFailed(err))
  }
}
function* api_v1_maplocation_createWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_CREATE,
    api_v1_maplocation_createWorker
  )
}
function* api_v1_maplocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_read, action)
    yield put(actions.api_v1_maplocation_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_maplocation_readFailed(err))
  }
}
function* api_v1_maplocation_readWatcher() {
  yield takeEvery(types.API_V1_MAPLOCATION_READ, api_v1_maplocation_readWorker)
}
function* api_v1_maplocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_update, action)
    yield put(actions.api_v1_maplocation_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_maplocation_updateFailed(err))
  }
}
function* api_v1_maplocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_UPDATE,
    api_v1_maplocation_updateWorker
  )
}
function* api_v1_maplocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_maplocation_partial_update,
      action
    )
    yield put(actions.api_v1_maplocation_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_maplocation_partial_updateFailed(err))
  }
}
function* api_v1_maplocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_PARTIAL_UPDATE,
    api_v1_maplocation_partial_updateWorker
  )
}
function* api_v1_maplocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_maplocation_delete, action)
    yield put(actions.api_v1_maplocation_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_maplocation_deleteFailed(err))
  }
}
function* api_v1_maplocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_MAPLOCATION_DELETE,
    api_v1_maplocation_deleteWorker
  )
}
function* api_v1_message_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_list, action)
    yield put(actions.api_v1_message_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_listFailed(err))
  }
}
function* api_v1_message_listWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_LIST, api_v1_message_listWorker)
}
function* api_v1_message_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_create, action)
    yield put(actions.api_v1_message_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_createFailed(err))
  }
}
function* api_v1_message_createWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_CREATE, api_v1_message_createWorker)
}
function* api_v1_message_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_read, action)
    yield put(actions.api_v1_message_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_readFailed(err))
  }
}
function* api_v1_message_readWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_READ, api_v1_message_readWorker)
}
function* api_v1_message_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_update, action)
    yield put(actions.api_v1_message_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_updateFailed(err))
  }
}
function* api_v1_message_updateWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_UPDATE, api_v1_message_updateWorker)
}
function* api_v1_message_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_partial_update, action)
    yield put(actions.api_v1_message_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_partial_updateFailed(err))
  }
}
function* api_v1_message_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGE_PARTIAL_UPDATE,
    api_v1_message_partial_updateWorker
  )
}
function* api_v1_message_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_delete, action)
    yield put(actions.api_v1_message_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_deleteFailed(err))
  }
}
function* api_v1_message_deleteWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_DELETE, api_v1_message_deleteWorker)
}
function* api_v1_notification_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_list, action)
    yield put(actions.api_v1_notification_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_notification_listFailed(err))
  }
}
function* api_v1_notification_listWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_LIST,
    api_v1_notification_listWorker
  )
}
function* api_v1_notification_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_create, action)
    yield put(actions.api_v1_notification_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_notification_createFailed(err))
  }
}
function* api_v1_notification_createWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_CREATE,
    api_v1_notification_createWorker
  )
}
function* api_v1_notification_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_read, action)
    yield put(actions.api_v1_notification_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_notification_readFailed(err))
  }
}
function* api_v1_notification_readWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_READ,
    api_v1_notification_readWorker
  )
}
function* api_v1_notification_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_update, action)
    yield put(actions.api_v1_notification_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_notification_updateFailed(err))
  }
}
function* api_v1_notification_updateWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_UPDATE,
    api_v1_notification_updateWorker
  )
}
function* api_v1_notification_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_notification_partial_update,
      action
    )
    yield put(actions.api_v1_notification_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_notification_partial_updateFailed(err))
  }
}
function* api_v1_notification_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_PARTIAL_UPDATE,
    api_v1_notification_partial_updateWorker
  )
}
function* api_v1_notification_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_notification_delete, action)
    yield put(actions.api_v1_notification_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_notification_deleteFailed(err))
  }
}
function* api_v1_notification_deleteWatcher() {
  yield takeEvery(
    types.API_V1_NOTIFICATION_DELETE,
    api_v1_notification_deleteWorker
  )
}
function* api_v1_paymentmethod_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_list, action)
    yield put(actions.api_v1_paymentmethod_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_listFailed(err))
  }
}
function* api_v1_paymentmethod_listWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_LIST,
    api_v1_paymentmethod_listWorker
  )
}
function* api_v1_paymentmethod_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_create, action)
    yield put(actions.api_v1_paymentmethod_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_createFailed(err))
  }
}
function* api_v1_paymentmethod_createWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_CREATE,
    api_v1_paymentmethod_createWorker
  )
}
function* api_v1_paymentmethod_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_read, action)
    yield put(actions.api_v1_paymentmethod_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_readFailed(err))
  }
}
function* api_v1_paymentmethod_readWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_READ,
    api_v1_paymentmethod_readWorker
  )
}
function* api_v1_paymentmethod_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_update, action)
    yield put(actions.api_v1_paymentmethod_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_updateFailed(err))
  }
}
function* api_v1_paymentmethod_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_UPDATE,
    api_v1_paymentmethod_updateWorker
  )
}
function* api_v1_paymentmethod_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymentmethod_partial_update,
      action
    )
    yield put(actions.api_v1_paymentmethod_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_partial_updateFailed(err))
  }
}
function* api_v1_paymentmethod_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE,
    api_v1_paymentmethod_partial_updateWorker
  )
}
function* api_v1_paymentmethod_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_delete, action)
    yield put(actions.api_v1_paymentmethod_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_deleteFailed(err))
  }
}
function* api_v1_paymentmethod_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_DELETE,
    api_v1_paymentmethod_deleteWorker
  )
}
function* api_v1_profilelocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profilelocation_list, action)
    yield put(actions.api_v1_profilelocation_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profilelocation_listFailed(err))
  }
}
function* api_v1_profilelocation_listWatcher() {
  yield takeEvery(
    types.API_V1_PROFILELOCATION_LIST,
    api_v1_profilelocation_listWorker
  )
}
function* api_v1_profilelocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profilelocation_create, action)
    yield put(actions.api_v1_profilelocation_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profilelocation_createFailed(err))
  }
}
function* api_v1_profilelocation_createWatcher() {
  yield takeEvery(
    types.API_V1_PROFILELOCATION_CREATE,
    api_v1_profilelocation_createWorker
  )
}
function* api_v1_profilelocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profilelocation_read, action)
    yield put(actions.api_v1_profilelocation_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profilelocation_readFailed(err))
  }
}
function* api_v1_profilelocation_readWatcher() {
  yield takeEvery(
    types.API_V1_PROFILELOCATION_READ,
    api_v1_profilelocation_readWorker
  )
}
function* api_v1_profilelocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profilelocation_update, action)
    yield put(actions.api_v1_profilelocation_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profilelocation_updateFailed(err))
  }
}
function* api_v1_profilelocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_PROFILELOCATION_UPDATE,
    api_v1_profilelocation_updateWorker
  )
}
function* api_v1_profilelocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_profilelocation_partial_update,
      action
    )
    yield put(actions.api_v1_profilelocation_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profilelocation_partial_updateFailed(err))
  }
}
function* api_v1_profilelocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PROFILELOCATION_PARTIAL_UPDATE,
    api_v1_profilelocation_partial_updateWorker
  )
}
function* api_v1_profilelocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profilelocation_delete, action)
    yield put(actions.api_v1_profilelocation_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profilelocation_deleteFailed(err))
  }
}
function* api_v1_profilelocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PROFILELOCATION_DELETE,
    api_v1_profilelocation_deleteWorker
  )
}
function* api_v1_rating_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_list, action)
    yield put(actions.api_v1_rating_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_rating_listFailed(err))
  }
}
function* api_v1_rating_listWatcher() {
  yield takeEvery(types.API_V1_RATING_LIST, api_v1_rating_listWorker)
}
function* api_v1_rating_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_create, action)
    yield put(actions.api_v1_rating_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_rating_createFailed(err))
  }
}
function* api_v1_rating_createWatcher() {
  yield takeEvery(types.API_V1_RATING_CREATE, api_v1_rating_createWorker)
}
function* api_v1_rating_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_read, action)
    yield put(actions.api_v1_rating_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_rating_readFailed(err))
  }
}
function* api_v1_rating_readWatcher() {
  yield takeEvery(types.API_V1_RATING_READ, api_v1_rating_readWorker)
}
function* api_v1_rating_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_update, action)
    yield put(actions.api_v1_rating_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_rating_updateFailed(err))
  }
}
function* api_v1_rating_updateWatcher() {
  yield takeEvery(types.API_V1_RATING_UPDATE, api_v1_rating_updateWorker)
}
function* api_v1_rating_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_partial_update, action)
    yield put(actions.api_v1_rating_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_rating_partial_updateFailed(err))
  }
}
function* api_v1_rating_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_RATING_PARTIAL_UPDATE,
    api_v1_rating_partial_updateWorker
  )
}
function* api_v1_rating_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_rating_delete, action)
    yield put(actions.api_v1_rating_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_rating_deleteFailed(err))
  }
}
function* api_v1_rating_deleteWatcher() {
  yield takeEvery(types.API_V1_RATING_DELETE, api_v1_rating_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_userprofile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userprofile_list, action)
    yield put(actions.api_v1_userprofile_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userprofile_listFailed(err))
  }
}
function* api_v1_userprofile_listWatcher() {
  yield takeEvery(types.API_V1_USERPROFILE_LIST, api_v1_userprofile_listWorker)
}
function* api_v1_userprofile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userprofile_create, action)
    yield put(actions.api_v1_userprofile_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userprofile_createFailed(err))
  }
}
function* api_v1_userprofile_createWatcher() {
  yield takeEvery(
    types.API_V1_USERPROFILE_CREATE,
    api_v1_userprofile_createWorker
  )
}
function* api_v1_userprofile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userprofile_read, action)
    yield put(actions.api_v1_userprofile_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userprofile_readFailed(err))
  }
}
function* api_v1_userprofile_readWatcher() {
  yield takeEvery(types.API_V1_USERPROFILE_READ, api_v1_userprofile_readWorker)
}
function* api_v1_userprofile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userprofile_update, action)
    yield put(actions.api_v1_userprofile_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userprofile_updateFailed(err))
  }
}
function* api_v1_userprofile_updateWatcher() {
  yield takeEvery(
    types.API_V1_USERPROFILE_UPDATE,
    api_v1_userprofile_updateWorker
  )
}
function* api_v1_userprofile_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_userprofile_partial_update,
      action
    )
    yield put(actions.api_v1_userprofile_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userprofile_partial_updateFailed(err))
  }
}
function* api_v1_userprofile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_USERPROFILE_PARTIAL_UPDATE,
    api_v1_userprofile_partial_updateWorker
  )
}
function* api_v1_userprofile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userprofile_delete, action)
    yield put(actions.api_v1_userprofile_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userprofile_deleteFailed(err))
  }
}
function* api_v1_userprofile_deleteWatcher() {
  yield takeEvery(
    types.API_V1_USERPROFILE_DELETE,
    api_v1_userprofile_deleteWorker
  )
}
function* api_v1_userwallet_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userwallet_list, action)
    yield put(actions.api_v1_userwallet_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userwallet_listFailed(err))
  }
}
function* api_v1_userwallet_listWatcher() {
  yield takeEvery(types.API_V1_USERWALLET_LIST, api_v1_userwallet_listWorker)
}
function* api_v1_userwallet_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userwallet_create, action)
    yield put(actions.api_v1_userwallet_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userwallet_createFailed(err))
  }
}
function* api_v1_userwallet_createWatcher() {
  yield takeEvery(
    types.API_V1_USERWALLET_CREATE,
    api_v1_userwallet_createWorker
  )
}
function* api_v1_userwallet_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userwallet_read, action)
    yield put(actions.api_v1_userwallet_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userwallet_readFailed(err))
  }
}
function* api_v1_userwallet_readWatcher() {
  yield takeEvery(types.API_V1_USERWALLET_READ, api_v1_userwallet_readWorker)
}
function* api_v1_userwallet_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userwallet_update, action)
    yield put(actions.api_v1_userwallet_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userwallet_updateFailed(err))
  }
}
function* api_v1_userwallet_updateWatcher() {
  yield takeEvery(
    types.API_V1_USERWALLET_UPDATE,
    api_v1_userwallet_updateWorker
  )
}
function* api_v1_userwallet_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_userwallet_partial_update,
      action
    )
    yield put(actions.api_v1_userwallet_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userwallet_partial_updateFailed(err))
  }
}
function* api_v1_userwallet_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_USERWALLET_PARTIAL_UPDATE,
    api_v1_userwallet_partial_updateWorker
  )
}
function* api_v1_userwallet_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userwallet_delete, action)
    yield put(actions.api_v1_userwallet_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userwallet_deleteFailed(err))
  }
}
function* api_v1_userwallet_deleteWatcher() {
  yield takeEvery(
    types.API_V1_USERWALLET_DELETE,
    api_v1_userwallet_deleteWorker
  )
}
function* api_v1_vehicle_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicle_list, action)
    yield put(actions.api_v1_vehicle_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicle_listFailed(err))
  }
}
function* api_v1_vehicle_listWatcher() {
  yield takeEvery(types.API_V1_VEHICLE_LIST, api_v1_vehicle_listWorker)
}
function* api_v1_vehicle_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicle_create, action)
    yield put(actions.api_v1_vehicle_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicle_createFailed(err))
  }
}
function* api_v1_vehicle_createWatcher() {
  yield takeEvery(types.API_V1_VEHICLE_CREATE, api_v1_vehicle_createWorker)
}
function* api_v1_vehicle_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicle_read, action)
    yield put(actions.api_v1_vehicle_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicle_readFailed(err))
  }
}
function* api_v1_vehicle_readWatcher() {
  yield takeEvery(types.API_V1_VEHICLE_READ, api_v1_vehicle_readWorker)
}
function* api_v1_vehicle_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicle_update, action)
    yield put(actions.api_v1_vehicle_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicle_updateFailed(err))
  }
}
function* api_v1_vehicle_updateWatcher() {
  yield takeEvery(types.API_V1_VEHICLE_UPDATE, api_v1_vehicle_updateWorker)
}
function* api_v1_vehicle_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicle_partial_update, action)
    yield put(actions.api_v1_vehicle_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicle_partial_updateFailed(err))
  }
}
function* api_v1_vehicle_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLE_PARTIAL_UPDATE,
    api_v1_vehicle_partial_updateWorker
  )
}
function* api_v1_vehicle_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicle_delete, action)
    yield put(actions.api_v1_vehicle_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicle_deleteFailed(err))
  }
}
function* api_v1_vehicle_deleteWatcher() {
  yield takeEvery(types.API_V1_VEHICLE_DELETE, api_v1_vehicle_deleteWorker)
}
function* api_v1_vehiclelocation_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehiclelocation_list, action)
    yield put(actions.api_v1_vehiclelocation_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehiclelocation_listFailed(err))
  }
}
function* api_v1_vehiclelocation_listWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLELOCATION_LIST,
    api_v1_vehiclelocation_listWorker
  )
}
function* api_v1_vehiclelocation_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehiclelocation_create, action)
    yield put(actions.api_v1_vehiclelocation_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehiclelocation_createFailed(err))
  }
}
function* api_v1_vehiclelocation_createWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLELOCATION_CREATE,
    api_v1_vehiclelocation_createWorker
  )
}
function* api_v1_vehiclelocation_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehiclelocation_read, action)
    yield put(actions.api_v1_vehiclelocation_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehiclelocation_readFailed(err))
  }
}
function* api_v1_vehiclelocation_readWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLELOCATION_READ,
    api_v1_vehiclelocation_readWorker
  )
}
function* api_v1_vehiclelocation_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehiclelocation_update, action)
    yield put(actions.api_v1_vehiclelocation_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehiclelocation_updateFailed(err))
  }
}
function* api_v1_vehiclelocation_updateWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLELOCATION_UPDATE,
    api_v1_vehiclelocation_updateWorker
  )
}
function* api_v1_vehiclelocation_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_vehiclelocation_partial_update,
      action
    )
    yield put(actions.api_v1_vehiclelocation_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehiclelocation_partial_updateFailed(err))
  }
}
function* api_v1_vehiclelocation_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLELOCATION_PARTIAL_UPDATE,
    api_v1_vehiclelocation_partial_updateWorker
  )
}
function* api_v1_vehiclelocation_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehiclelocation_delete, action)
    yield put(actions.api_v1_vehiclelocation_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehiclelocation_deleteFailed(err))
  }
}
function* api_v1_vehiclelocation_deleteWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLELOCATION_DELETE,
    api_v1_vehiclelocation_deleteWorker
  )
}
function* api_v1_vehicletype_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicletype_list, action)
    yield put(actions.api_v1_vehicletype_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicletype_listFailed(err))
  }
}
function* api_v1_vehicletype_listWatcher() {
  yield takeEvery(types.API_V1_VEHICLETYPE_LIST, api_v1_vehicletype_listWorker)
}
function* api_v1_vehicletype_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicletype_create, action)
    yield put(actions.api_v1_vehicletype_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicletype_createFailed(err))
  }
}
function* api_v1_vehicletype_createWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLETYPE_CREATE,
    api_v1_vehicletype_createWorker
  )
}
function* api_v1_vehicletype_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicletype_read, action)
    yield put(actions.api_v1_vehicletype_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicletype_readFailed(err))
  }
}
function* api_v1_vehicletype_readWatcher() {
  yield takeEvery(types.API_V1_VEHICLETYPE_READ, api_v1_vehicletype_readWorker)
}
function* api_v1_vehicletype_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicletype_update, action)
    yield put(actions.api_v1_vehicletype_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicletype_updateFailed(err))
  }
}
function* api_v1_vehicletype_updateWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLETYPE_UPDATE,
    api_v1_vehicletype_updateWorker
  )
}
function* api_v1_vehicletype_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_vehicletype_partial_update,
      action
    )
    yield put(actions.api_v1_vehicletype_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicletype_partial_updateFailed(err))
  }
}
function* api_v1_vehicletype_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLETYPE_PARTIAL_UPDATE,
    api_v1_vehicletype_partial_updateWorker
  )
}
function* api_v1_vehicletype_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_vehicletype_delete, action)
    yield put(actions.api_v1_vehicletype_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_vehicletype_deleteFailed(err))
  }
}
function* api_v1_vehicletype_deleteWatcher() {
  yield takeEvery(
    types.API_V1_VEHICLETYPE_DELETE,
    api_v1_vehicletype_deleteWorker
  )
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(actions.rest_auth_password_reset_confirm_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_confirm_createFailed(err))
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(result)
    )
  } catch (err) {
    yield put(actions.rest_auth_registration_verify_email_createFailed(err))
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_bookingtransaction_listWatcher,
    api_v1_bookingtransaction_createWatcher,
    api_v1_bookingtransaction_readWatcher,
    api_v1_bookingtransaction_updateWatcher,
    api_v1_bookingtransaction_partial_updateWatcher,
    api_v1_bookingtransaction_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_document_listWatcher,
    api_v1_document_createWatcher,
    api_v1_document_readWatcher,
    api_v1_document_updateWatcher,
    api_v1_document_partial_updateWatcher,
    api_v1_document_deleteWatcher,
    api_v1_driverprofile_listWatcher,
    api_v1_driverprofile_createWatcher,
    api_v1_driverprofile_readWatcher,
    api_v1_driverprofile_updateWatcher,
    api_v1_driverprofile_partial_updateWatcher,
    api_v1_driverprofile_deleteWatcher,
    api_v1_driverwallet_listWatcher,
    api_v1_driverwallet_createWatcher,
    api_v1_driverwallet_readWatcher,
    api_v1_driverwallet_updateWatcher,
    api_v1_driverwallet_partial_updateWatcher,
    api_v1_driverwallet_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_invitecode_listWatcher,
    api_v1_invitecode_createWatcher,
    api_v1_invitecode_readWatcher,
    api_v1_invitecode_updateWatcher,
    api_v1_invitecode_partial_updateWatcher,
    api_v1_invitecode_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_maplocation_listWatcher,
    api_v1_maplocation_createWatcher,
    api_v1_maplocation_readWatcher,
    api_v1_maplocation_updateWatcher,
    api_v1_maplocation_partial_updateWatcher,
    api_v1_maplocation_deleteWatcher,
    api_v1_message_listWatcher,
    api_v1_message_createWatcher,
    api_v1_message_readWatcher,
    api_v1_message_updateWatcher,
    api_v1_message_partial_updateWatcher,
    api_v1_message_deleteWatcher,
    api_v1_notification_listWatcher,
    api_v1_notification_createWatcher,
    api_v1_notification_readWatcher,
    api_v1_notification_updateWatcher,
    api_v1_notification_partial_updateWatcher,
    api_v1_notification_deleteWatcher,
    api_v1_paymentmethod_listWatcher,
    api_v1_paymentmethod_createWatcher,
    api_v1_paymentmethod_readWatcher,
    api_v1_paymentmethod_updateWatcher,
    api_v1_paymentmethod_partial_updateWatcher,
    api_v1_paymentmethod_deleteWatcher,
    api_v1_profilelocation_listWatcher,
    api_v1_profilelocation_createWatcher,
    api_v1_profilelocation_readWatcher,
    api_v1_profilelocation_updateWatcher,
    api_v1_profilelocation_partial_updateWatcher,
    api_v1_profilelocation_deleteWatcher,
    api_v1_rating_listWatcher,
    api_v1_rating_createWatcher,
    api_v1_rating_readWatcher,
    api_v1_rating_updateWatcher,
    api_v1_rating_partial_updateWatcher,
    api_v1_rating_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_userprofile_listWatcher,
    api_v1_userprofile_createWatcher,
    api_v1_userprofile_readWatcher,
    api_v1_userprofile_updateWatcher,
    api_v1_userprofile_partial_updateWatcher,
    api_v1_userprofile_deleteWatcher,
    api_v1_userwallet_listWatcher,
    api_v1_userwallet_createWatcher,
    api_v1_userwallet_readWatcher,
    api_v1_userwallet_updateWatcher,
    api_v1_userwallet_partial_updateWatcher,
    api_v1_userwallet_deleteWatcher,
    api_v1_vehicle_listWatcher,
    api_v1_vehicle_createWatcher,
    api_v1_vehicle_readWatcher,
    api_v1_vehicle_updateWatcher,
    api_v1_vehicle_partial_updateWatcher,
    api_v1_vehicle_deleteWatcher,
    api_v1_vehiclelocation_listWatcher,
    api_v1_vehiclelocation_createWatcher,
    api_v1_vehiclelocation_readWatcher,
    api_v1_vehiclelocation_updateWatcher,
    api_v1_vehiclelocation_partial_updateWatcher,
    api_v1_vehiclelocation_deleteWatcher,
    api_v1_vehicletype_listWatcher,
    api_v1_vehicletype_createWatcher,
    api_v1_vehicletype_readWatcher,
    api_v1_vehicletype_updateWatcher,
    api_v1_vehicletype_partial_updateWatcher,
    api_v1_vehicletype_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
