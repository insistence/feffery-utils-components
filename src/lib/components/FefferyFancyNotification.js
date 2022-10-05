import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

// 定义美观通知提示组件FefferyFancyNotification
const FefferyFancyNotification = (props) => {

    const {
        id,
        children,
        key,
        className,
        style,
        type,
        visible,
        position,
        autoClose,
        closable,
        hideProgressBar,
        pauseOnHover,
        closeOnClick,
        newestOnTop,
        toastClassName,
        bodyClassName,
        progressClassName,
        progressStyle,
        draggable,
        draggablePercent,
        containerId,
        limit,
        theme,
        setProps,
        loading_state
    } = props;

    useEffect(() => {
        if (visible) {
            if (type) {
                toast(
                    children,
                    {
                        type: type
                    }
                )
            } else {
                toast(
                    children,
                )
            }
            setProps({
                visible: false
            })
        }

    }, [visible])

    return (<ToastContainer
        id={id}
        key={key}
        className={className}
        style={style}
        position={position}
        autoClose={autoClose}
        closeButton={closable}
        hideProgressBar={hideProgressBar}
        pauseOnHover={pauseOnHover}
        closeOnClick={closeOnClick}
        newestOnTop={newestOnTop}
        toastClassName={toastClassName}
        bodyClassName={bodyClassName}
        progressClassName={progressClassName}
        progressStyle={progressStyle}
        draggable={draggable}
        draggablePercent={draggablePercent}
        containerId={containerId}
        limit={limit}
        theme={theme}
        data-dash-is-loading={
            (loading_state && loading_state.is_loading) || undefined
        } />);
}

// 定义参数或属性
FefferyFancyNotification.propTypes = {

    children: PropTypes.node,

    // 部件id
    id: PropTypes.string,

    key: PropTypes.string,

    // 设置容器的css类名
    className: PropTypes.string,

    // 设置容器的css样式
    style: PropTypes.object,

    // 设置信息类型，可选的有'info', 'success', 'warning', 'error'
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),

    // 主动设置是否可见，默认为false
    visible: PropTypes.bool,

    // 设置通知提示弹出方位，可选的有'top-right'、'top-center'、'top-left'、
    // 'bottom-right'、'bottom-cente'、'bottom-left'
    // 默认为'top-right'
    position: PropTypes.oneOf([
        'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-cente', 'bottom-left'
    ]),

    // 配置自动关闭延时（单位：毫秒），默认为5000
    // 当设置为false时不会自动关闭
    autoClose: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),

    // 设置是否可关闭，默认为true
    closable: PropTypes.bool,

    // 设置是否显示关闭倒计时进度条，默认为false
    hideProgressBar: PropTypes.bool,

    // 设置当鼠标悬浮于通知框上时，是否暂停倒计时
    // 默认为true
    pauseOnHover: PropTypes.bool,

    // 设置是否允许通知框在被点击后自动关闭，默认为true
    closeOnClick: PropTypes.bool,

    // 设置是否将新的通知框显示在更顶端的位置，默认为false
    newestOnTop: PropTypes.bool,

    toastClassName: PropTypes.string,

    bodyClassName: PropTypes.string,

    progressClassName: PropTypes.string,

    progressStyle: PropTypes.object,

    // 设置通知框是否可拖拽，默认为true
    draggable: PropTypes.bool,

    // 设置通知框被拖拽距离占自身宽度的百分比阈值
    // 拖拽距离超出此阈值时通知框会被关闭，默认为80
    draggablePercent: PropTypes.number,

    // 可选，设置局部目标容器的id
    containerId: PropTypes.string,

    // 设置屏幕中允许同时显示的通知框数量上限，默认无上限
    limit: PropTypes.number,

    // 设置主题，可选的有'light'、'dark'、'colored'
    // 默认为'light'
    theme: PropTypes.oneOf([
        'light', 'dark', 'colored'
    ]),

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
FefferyFancyNotification.defaultProps = {
    visible: true,
    closable: true
}

export default React.memo(FefferyFancyNotification);