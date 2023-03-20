<template>
  <Layout>
    <template #doc-after>
      <div class="comment-container"></div>
    </template>
  </Layout>
</template>

<script setup>
import { onMounted, watch } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";

const { Layout } = DefaultTheme;

const route = useRoute();

const emptyNode = (node) => {
  //循环删除子元素，一直删除第一个子元素直到没有子元素即为清空
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
};

const initGitalk = () => {
  if (typeof window !== undefined) {
    const s_div = document.createElement("div"); // 创建节点
    s_div.setAttribute("id", "gitalk-page-container"); // 设置id
    const container = document.querySelector(".comment-container"); // querySelector的节点可自己根据自己想加载的地方设置
    if (container) {
      emptyNode(container);
      container.appendChild(s_div);
      const gitment = new Gitalk({
        id: { name: location.pathname.split("/").pop().substring(0, 49) }, // Ensure uniqueness and length less than 50
        clientID: "e10573a2a2e506bb6297",
        clientSecret: "8af673ede26fa1185e519de17310c3c75e898d43",
        repo: "web",
        owner: "GQ2617",
        admin: ["GQ2617"],
        labels: [{ name: "Gitalk" }],
        createIssueManually: true,
        distractionFreeMode: false,
      });
      gitment.render("gitalk-page-container");
    }
  }
};
onMounted(() => {
  initGitalk();
});

watch(
  () => route.path,
  () => {
    initGitalk();
  }
);
</script>

<!-- <template>
  <Layout>
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
  </Layout>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
const route = useRoute();
const { Layout } = DefaultTheme;
// const relativePath = useData().page.value.relativePath;
const gitalk = new Gitalk({
  id: { name: location.pathname.split("/").pop().substring(0, 49) }, // Ensure uniqueness and length less than 50
  clientID: "e10573a2a2e506bb6297",
  clientSecret: "8af673ede26fa1185e519de17310c3c75e898d43",
  repo: "web",
  owner: "GQ2617",
  admin: ["GQ2617"],
  labels: [{ name: "Gitalk" }],
  createIssueManually: true,
  distractionFreeMode: false, // Facebook-like distraction free mode
});
onMounted(() => {
  gitalk.render("gitalk-container");
});
watch(
  () => route.path,
  () => {
    gitalk.render("gitalk-container");
  }
);
</script>
<style scoped></style> -->
