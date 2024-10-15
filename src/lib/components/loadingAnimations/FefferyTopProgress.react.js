// react核心
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// 组件核心
import NProgress from 'nprogress';
// 辅助库
import FefferyStyle from '../styleControl/FefferyStyle.react';
import { parseChildrenToArray } from '../utils';

/**
 * 顶端加载进度条组件FefferyTopProgress
 */
const FefferyTopProgress = (props) => {
    let {
        id,
        className,
        style,
        key,
        children,
        minimum,
        easing,
        speed,
        showSpinner,
        spinning,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        color,
        zIndex,
        setProps,
        loading_state
    } = props;

    // 配置NProgress参数信息
    NProgress.configure({
        minimum,
        easing,
        speed,
        showSpinner
    })

    children = parseChildrenToArray(children)

    const [showSpinning, setShowSpinning] = useState(spinning);
    const timer = useRef();

    useEffect(() => {
        if (loading_state) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (loading_state.is_loading && !showSpinning) {
                // 当listenPropsMode为'default'时
                if (listenPropsMode === 'default') {
                    if (debug) {
                        console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                    }
                    setShowSpinning(true);
                    NProgress.start();
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发loading_state的组件+属性组合不在排除列表中时，激活动画
                    if (excludeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0]) === -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                        }
                        setShowSpinning(true);
                        NProgress.start();
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发loading_state的组件+属性组合在包含列表中时，激活动画
                    if (includeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0]) !== -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                        }
                        setShowSpinning(true);
                        NProgress.start();
                    }
                }

            } else if (!loading_state.is_loading && showSpinning) {
                timer.current = setTimeout(() => {
                    setShowSpinning(false);
                    NProgress.done();
                });
            }
        }
    }, [loading_state]);

    // 返回定制化的前端组件
    return (<div id={id}
        className={className}
        style={style}
        key={key}
        data-dash-is-loading={
            (loading_state && loading_state.is_loading) || undefined
        } >
        <FefferyStyle
            rawStyle={
                `
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${color};

  position: fixed;
  z-index: ${zIndex};
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: ${zIndex};
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${color};
  border-left-color: ${color};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`
            }
        />
        {children}
    </div>
    );
}

FefferyTopProgress._dashprivate_isLoadingComponent = true;

FefferyTopProgress.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 是否处于加载中状态
     */
    spinning: PropTypes.bool,

    /**
     * 顶端进度条初始进度值，取值在`0.33`到`1`之间
     * 默认值：`0.33`
     */
    minimum: PropTypes.number,

    /**
     * 对应设置`css`中的`easing`属性
     * 默认值：`'ease'`
     */
    easing: PropTypes.string,

    /**
     * 进度条每步递增耗时，单位：毫秒
     * 默认值：`200`
     */
    speed: PropTypes.number,

    /**
     * 是否在右上角渲染圆圈加载动画
     * 默认值：`true`
     */
    showSpinner: PropTypes.bool,

    /**
     * 是否开启debug模式，开启后，每次动画加载都会在开发者工具的控制台打印相关`prop`信息
     * 默认值：`false`
     */
    debug: PropTypes.bool,

    /**
     * 监听模式，可选项有`'default'`、`'exclude'`、`'include'`
     * 默认值：`'default'`
     */
    listenPropsMode: PropTypes.oneOf(['default', 'exclude', 'include']),

    /**
     * `listenPropsMode='exclude'`时，设置需要排除监听的回调目标列表，格式如`['组件id1.组件属性1', '组件id2.组件属性2', ...]`
     */
    excludeProps: PropTypes.arrayOf(PropTypes.string),

    /**
     * `listenPropsMode='include'`时，设置需要包含监听的回调目标列表，格式如`['组件id1.组件属性1', '组件id2.组件属性2', ...]`
     */
    includeProps: PropTypes.arrayOf(PropTypes.string),

    /**
     * 顶部进度条色彩
     * 默认值：`'#29d'`
     */
    color: PropTypes.string,

    /**
     * 顶部进度条`z-index`值
     * 默认值：`99999`
     */
    zIndex: PropTypes.number,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

FefferyTopProgress.defaultProps = {
    spinning: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: [],
    debug: false,
    color: '#29d',
    zIndex: 99999
}

export default FefferyTopProgress;