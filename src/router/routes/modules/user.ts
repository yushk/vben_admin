import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const users: AppRouteModule = {
  path: '/users',
  name: 'User',
  component: LAYOUT,
  redirect: '/users/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '用户列表',
    orderNo: 100000,
    roles: ['root'],
  },
  children: [
    {
      path: 'index',
      name: 'UsersPage',
      component: () => import('/@/views/sys/users/index.vue'),
      meta: {
        title: '用户列表',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default users;
