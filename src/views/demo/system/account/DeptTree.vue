<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="学校 列表"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'deptName' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  // import { getDeptList } from '/@/api/demo/system';

  export default defineComponent({
    name: 'DeptTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
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
        console.log('tree', result);
        treeData.value = result;
        // treeData.value = (await getDeptList()) as unknown as TreeItem[];
      }

      function handleSelect(keys) {
        emit('select', keys[0]);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, handleSelect };
    },
  });
</script>
