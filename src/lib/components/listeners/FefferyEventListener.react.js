import { useEventListener } from 'ahooks';
import PropTypes from 'prop-types';

/**
 * 通用事件监听组件FefferyEventListener
 */
const FefferyEventListener = (props) => {
    const {
        eventName,
        handler,
        targetSelector,
        enable,
        setProps,
        loading_state
    } = props;

    useEventListener(
        eventName,
        (e) => {
            setProps({
                result: eval(handler)(e)
            });
        },
        {
            target: document.querySelector(targetSelector),
            enabled: enable
        }
    )

    return <></>;
}

FefferyEventListener.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * 强制刷新用key值
     */
    key: PropTypes.string,

    /**
     * 必填，目标事件名称
     */
    eventName: PropTypes.string.isRequired,

    /**
     * 必填，自定义事件处理js函数字符串，唯一入参为事件对象，返回值将用于更新`result`属性
     */
    handler: PropTypes.string,

    /**
     * 事件监听目标对应的选择器字符串，默认监听目标为整个页面
     */
    targetSelector: PropTypes.string,

    /**
     * 控制是否开启监听
     * 默认值：`true`
     */
    enable: PropTypes.bool,

    /**
     * 监听`handler`对应函数的返回值，作为事件监听的结果
     */
    result: PropTypes.any,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

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
    })
};

// 设置默认参数
FefferyEventListener.defaultProps = {
    enable: true
}

export default FefferyEventListener;