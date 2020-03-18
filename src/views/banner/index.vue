<template>
  <div class="banner_wrap">
    <h1>设置banner</h1>

    <el-upload
      class="upload-demo"
      :auto-upload="false"
      :action="''"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"
      :multiple="false"
      @submit="showList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <button @click="showList">顶级</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    showList() {
      console.log(this.fileList);
    }
  },
  mounted() {
    this.$store.dispatch("banner/getBannerList");
  }
};
</script>

<style lang="scss" scoped>
.banner_wrap {
  height: 100%;
}
</style>
