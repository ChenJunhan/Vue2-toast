<template>
  <div class="toast">
    <transition :name="animate">
      <span :class="[position, 'toast_text']" v-show="visible">{{ message }}</span>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      visible: false,
    }
  },
  props: {
    message: String,
    position: {
      type: String,
      default: 'center'
    },
    animate: {
      type: String,
      default: 'fade'
    }
  },
  mounted() {
    this.visible = true
  }
}
</script>

<style lang="less">
.toast {
  // 缩放动画
  .zoom-enter-active {
    animation: zoom-in .3s ease;
  }
  .zoom-leave-active {
    animation: zoom-out .3s ease;
  }
  @keyframes zoom-in {
    0% {
      transform: translate(-50%, 50%) scale(0);
    }
    100% {
      transform: translate(-50%, 50%) scale(1);
    }
  }
  @keyframes zoom-out {
    0% {
      transform: translate(-50%, 50%) scale(1);
    }
    100% {
      transform: translate(-50%, 50%) scale(0);
    }
  }

  // 淡入淡出
  .fade-enter-active {
    animation: fade-in .3s linear;
  }
  .fade-leave-active {
    animation: fade-out .3s linear;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate(-50%, 100%)
    }
    80% {
      opacity: 1;
      transform: translate(-50%, 40%)
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 50%)
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}

.toast_text {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 50%) scale(1);
  background: rgba(0,0,0,.7);
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px 18px;
  z-index: 99999;
  width: auto;
  font-size: 14px;

  &.top {
    bottom: 90%;
  }
  &.center {
    bottom: 50%;
  }
  &.bottom {
    bottom: 15%;
  }
}
</style>
