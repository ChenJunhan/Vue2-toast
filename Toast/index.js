import Vue from 'vue';
import toastTemplate from './Toast.vue';

let ToastPlugin = {};
let _toast = null;   
let _timer = null;     

/**
 * 默认选项
 * @param {String} position   位置: top/center/bottom
 * @param {String} message    显示文本
 * @param {number} duration   持续时间
 * @param {String} animate    动画: fade/zoom/none
 */    
const defaultOptions = {
  position: 'center',  
  message: '',        
  duration: 1000,      
  animate: 'fade'         
}      

/**
 * 弹出窗
 * @param {Object} options  
 */
function Toast(options) {
  // 继承模板
  const toast = Vue.extend(toastTemplate);
  let _options = { ...defaultOptions };

  if (typeof options === 'string') { 
    Object.assign(_options, { message: options })
  }else { 
    Object.assign(_options, options);
  }

  // 判断页面是否已经挂载过toast元素
  if (!_toast) {
    _toast = new toast({
      propsData: {
        message: _options.message,
        position: _options.position,
        animate: _options.animate
      },
    });
    _toast.$mount();
    // 将toast元素增加到全局中
    document.body.appendChild(_toast.$el);   
  }else {
    // 清除显示中的弹窗
    _toast.visible = false;      
    clearTimeout(_timer);        
    _timer = null;

    // 更新选项
    _toast.position = _options.position;
    _toast.message = _options.message;
    _toast.animate = _options.animate;
    Vue.nextTick(() => _toast.visible = true)
  }
  
  if (!_timer) {
    _timer = setTimeout(() => _toast.visible = false, _options.duration)
  }
}

ToastPlugin.install = (Vue, options) => {
  Vue.prototype.$toast = (newOption) => { 
    let _options = { ...defaultOptions };
    Object.assign(_options, options);

    // 替换全局配置
    if (typeof newOption === 'string') { 
      Object.assign(_options, { message: newOption })
    }else { 
      Object.assign(_options, newOption);
    }
    Toast(_options);
  };
}

export { ToastPlugin, Toast };