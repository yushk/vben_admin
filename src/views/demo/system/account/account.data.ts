import { getAllRoleList } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 200,
  },
  // {
  //   title: '备注',
  //   dataIndex: 'remark',
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   width: 180,
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '用户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  {
    field: 'ps',
    label: '密码',
    component: 'InputPassword',
    // ifShow: false,
  },
  {
    label: '角色',
    field: 'role',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'roleValue',
    },
    required: true,
  },
  {
    field: 'dept',
    label: '所属学校',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    // required: true,
  },
  {
    field: 'phone',
    label: '手机号',
    component: 'Input',
    // required: true,
    // rules: [
    //   {
    //     required: true,
    //     message: '请输入手机号',
    //   },
    //   {
    //     validator(_, value) {
    //       return new Promise((resolve, reject) => {
    //         isAccountExist(JSON.stringify({ phone: value }))
    //           .then((res) => {
    //             const { total_count } = res;
    //             if (total_count === 0) {
    //               resolve();
    //             }
    //             reject('手机号重复');
    //           })
    //           .catch((err) => {
    //             reject(err.message || '验证失败');
    //           });
    //       });
    //     },
    //   },
    // ],
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    // required: true,
    // rules: [
    //   {
    //     required: true,
    //     message: '请输入邮箱',
    //   },
    //   {
    //     validator(_, value) {
    //       return new Promise((resolve, reject) => {
    //         isAccountExist(JSON.stringify({ email: value }))
    //           .then((res) => {
    //             const { total_count } = res;
    //             if (total_count === 0) {
    //               resolve();
    //             }
    //             reject('邮箱重复');
    //           })
    //           .catch((err) => {
    //             reject(err.message || '验证失败');
    //           });
    //       });
    //     },
    //   },
    // ],
  },
];
