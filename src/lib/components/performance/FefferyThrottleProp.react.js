import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import PropTypes from 'prop-types';

/**
 * 节流属性组件FefferyThrottleProp
 */
const FefferyThrottleProp = (props) => {
    // 取得必要属性或参数
    const {
        sourceProp,
        throttleWait,
        setProps,
        loading_state
    } = props;

    const { run: syncProp } = useRequest(
        (e) => {
            setProps({
                throttleProp: e
            })
        },
        {
            throttleWait: throttleWait,
            manual: true
        }
    )

    useEffect(() => {
        syncProp(sourceProp)
    }, [sourceProp])

    return <></>;
}

FefferyThrottleProp.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 用于同步目标属性，请通过回调函数更新
     */
    sourceProp: PropTypes.any,

    /**
     * 对应`sourceProp`的节流控制状态
     */
    throttleProp: PropTypes.any,

    /**
     * 设置节流延时时长，单位：毫秒
     * 默认值：`200`
     */
    throttleWait: PropTypes.number,

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
    setProps: PropTypes.func,
};

// 设置默认参数
FefferyThrottleProp.defaultProps = {
    throttleWait: 200
}

export default FefferyThrottleProp;