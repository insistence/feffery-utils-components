import React, { useState, useEffect, useRef } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import p5 from 'p5';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { propTypes, defaultProps } from '../../components/animations/FefferyTopologyBackground.react';

// 定义3d背景之topology背景组件FefferyTopologyBackground
const FefferyTopologyBackground = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        mouseControls,
        touchControls,
        gyroControls,
        minHeight,
        minWidth,
        scale,
        scaleMobile,
        backgroundColor,
        color,
        setProps,
        loading_state
    } = props;

    const [topologyEffect, setTopologyEffect] = useState(null);
    const topologyRef = useRef(null);

    useEffect(() => {
        if (!topologyEffect) {
            setTopologyEffect(TOPOLOGY({
                el: topologyRef.current,
                p5: p5,
                mouseControls: mouseControls,
                touchControls: touchControls,
                gyroControls: gyroControls,
                minHeight: minHeight,
                minWidth: minWidth,
                scale: scale,
                scaleMobile: scaleMobile,
                backgroundColor: backgroundColor,
                color: color
            }))
        }
        return () => {
            if (topologyEffect) topologyEffect.destroy()
        }
    }, [topologyEffect])

    return (
        <div
            id={id}
            children={children}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            ref={topologyRef}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {children}
        </div>
    );
}

export default FefferyTopologyBackground;

FefferyTopologyBackground.defaultProps = defaultProps;
FefferyTopologyBackground.propTypes = propTypes;