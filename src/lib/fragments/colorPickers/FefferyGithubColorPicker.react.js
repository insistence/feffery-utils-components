// react核心
import React, { useEffect } from 'react';
// 组件核心
import GithubPicker from 'react-color/es/Github';
// 参数类型
import { propTypes, defaultProps } from '../../components/colorPickers/FefferyGithubColorPicker.react';

/**
 * Github风格色彩选择器FefferyGithubColorPicker
 */
const FefferyGithubColorPicker = (props) => {
    const {
        id,
        className,
        style,
        color,
        colors,
        triangle,
        setProps,
        loading_state
    } = props;

    useEffect(() => {
        if (colors && !color) {
            // 默认缺省选中色为colors中第0个色彩
            setProps({
                color: colors[0]
            })
        }
    }, [])

    return (
        <GithubPicker id={id}
            className={className}
            style={style}
            color={color}
            colors={colors}
            triangle={triangle}
            onChangeComplete={(c, e) => setProps({ color: c.hex })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default FefferyGithubColorPicker;

FefferyGithubColorPicker.defaultProps = defaultProps;
FefferyGithubColorPicker.propTypes = propTypes;