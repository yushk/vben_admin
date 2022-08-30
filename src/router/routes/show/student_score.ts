import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const student: AppRouteModule = {
  path: '/student_score',
  name: 'StudentScore',
  component: LAYOUT,
  redirect: '/student_score/list',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '学生成绩',
  },
  children: [
    {
      path: 'import',
      name: 'StudentScoreImport',
      component: () => import('/@/views/student_score/import.vue'),
      meta: {
        // affix: true,
        title: '成绩上传',
      },
    },
    {
      path: 'list',
      name: 'StudentScoreList',
      component: () => import('/@/views/student_score/list.vue'),
      meta: {
        // affix: true,
        title: '成绩列表',
      },
    },
  ],
};

export default student;
