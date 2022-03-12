<!-- home -->
<template>
   <div class='Home'>Home</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//  import {getListAPI,postFormAPI, putSomeAPI, deleteListAPI} from '@/api/classification'
export default {
  //import引入的组件需要注入到对象中才能使用
  name:'Home',
  components: {},
  data() {
    //这里存放数据
    return {
  
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   promise调用，链式调用， getList()括号内只接受参数；
    //  get不传参
      getList() {
        getListAPI().then(res => console.log(res)).catch(err => console.log(err))
      },
        //post传参
      postForm(formData) {
        let data = formData
        postFormAPI(data).then(res => console.log(res)).catch(err => console.log(err))
      },

      //async await同步调用
      async postForm(formData) {
        const postRes = await postFormAPI(formData)
        const putRes = await putSomeAPI({data: 'putTest'})
        const deleteRes = await deleteListAPI(formData.name)
        // 数据处理
        console.log(postRes);
        console.log(putRes);
        console.log(deleteRes);
      },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='css' scoped>

</style>
