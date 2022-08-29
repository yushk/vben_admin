import {
  AccountParams,
  // DeptListItem,
  MenuParams,
  // RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  // DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  // RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { UpdateAccountInfoModel } from './model/accountModel';
enum Api {
  AccountList = '/v1/users',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
}
const ApiObj = {
  UpdateUser: (id) => `/v1/user/${id}`,
  CreateUser: '/v1/user',
  DeleteUser: (id) => `/v1/user/${id}`,
};

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = () => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      id: `${index}`,
      deptName: ['沈阳', '大连', '鞍山'][index],
      orderNo: index + 1,
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 4; j++) {
          children.push({
            id: `${index}-${j}`,
            deptName: ['xx1', 'xx2', 'xx3', 'xx4'][j],
            orderNo: j + 1,
            createTime: '@datetime',
            remark: '@cword(10,20)',
            'status|1': ['0', '1'],
            parentDept: `${index}`,
            children: undefined,
          });
        }
        return children;
      })(),
    });
  }
  return result;
  // defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });
};

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = () => {
  const results = [
    {
      roleName: '管理员',
      roleValue: 'root',
    },
    {
      roleName: '老师',
      roleValue: 'teacher',
    },
    {
      roleName: '学生',
      roleValue: 'student',
    },
    {
      roleName: '数据录入',
      roleValue: 'data_entry',
    },
  ];
  return results;
  // defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });
};

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (query: string) =>
  defHttp.get(
    { url: Api.AccountList, params: { skip: 0, limit: 0, query: query } },
    { errorMessageMode: 'none' },
  );
export const UpdateUser = (id: string, data: { body: UpdateAccountInfoModel }) =>
  defHttp.put({ url: ApiObj.UpdateUser(id), data: data });
export const DeleteUser = (id: string) => defHttp.delete({ url: ApiObj.DeleteUser(id) });
export const CreateUser = (data: UpdateAccountInfoModel) =>
  defHttp.post({ url: ApiObj.CreateUser, data: data });
