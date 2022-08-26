import { defHttp } from '/@/utils/http/axios';
import { LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

const Api = {
  Login: '/v1/login',
  Logout: 'v1/logout',
  GetUserInfo: '/v1/user',
  GetUsers: '/v1/users',
  UpdateUser: (id) => `/v1/user${id}`,
  CreateUser: '/v1/user',
  DeleteUser: (id) => `/v1/user${id}`,
  GetPermCode: '/getPermCode',
  TestRetry: '/testRetry',
};

/**
 * @description: user login api
 */
export function loginApi(params: URLSearchParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
