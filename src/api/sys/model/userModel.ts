/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

// export interface RoleInfo {
//   roleName: string;
//   value: string;
// }

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  expires_at: string | number;
  expires_in: string | number;
  token_type: string;
  access_token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  role: string;
  // 用户id
  id: string | number;
  // 用户名
  name: string;
  phone: string;
  email: string;
  // 头像
  avatar?: string;
  // 介绍
  desc?: string;
}
