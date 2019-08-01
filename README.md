# Vue2-toast
关于vue2的弹窗插件

## DEMO 
[在线示例](https://chenjunhan.github.io/vue_toast_example.github.io?_blank)

## 下载
```
git clone https://github.com/ChenJunhan/Vue2-toast.git
```

## 使用
全局配置：
1. 在vue项目根目录文件`main.js`中引入：
``` javascript
import { ToastPlugin } from './plugins/Toast';
Vue.use(ToastPlugin);
```
2. 在页面直接使用 `this.$toast()` 进行使用:
``` html
<Template>
  <button @click="openToast"></button>
</Template>

<script>
export default {
  methods: {
    openToast() {
      this.$toast({ message: '弹窗文字' });
    }
  }
}
</script>
```

单独页面按需引入：
``` html
<Template>
  <button @click="openToast"></button>
</Template>

<script>
import { Toast } from '../plugins/Toast';

export default {
  methods: {
    openToast() {
      Toast({ message: '弹窗文字' });
    }
  }
}
</script>
```

## 选项
|        | 类型 | 选项 | 介绍 |
|  ----  | :----:  | ---- | ---- |
| message  | String | 空 | 弹窗内容 |
| position  | String | top/center/bottom \| 默认: center | 位置
| duration | Number | 默认：1000 | 持续时间 |
| animate | String | fade/zoom/none \| 默认：fade | 动画 |

## 自定义
如果要增加动画或者更改样式可以直接在`Toast.vue`修改即可。

## 示例代码
[github](https://github.com/ChenJunhan/vue_toast_example.github.io/tree/master/src?_blank)


