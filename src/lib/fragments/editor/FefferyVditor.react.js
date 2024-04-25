import React, { useState, useEffect, useMemo } from 'react';
import Vditor from "vditor";
import "vditor/dist/index.css";
import useCss from '../../hooks/useCss';
import { isString, isUndefined } from 'lodash';
import { propTypes, defaultProps } from '../../components/editor/FefferyVditor.react';


// 定义类Typora的markdown编辑器组件FefferyVditor，api参数参考https://github.com/Vanessa219/vditor?tab=readme-ov-file#api
const FefferyVditor = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        undoDelay,
        height,
        minHeight,
        width,
        placeholder,
        lang,
        tab,
        typewriterMode,
        cdn,
        mode,
        debuggerMode,
        value,
        theme,
        icon,
        toolbar,
        toolbarConfig,
        counter,
        cache,
        preview,
        image,
        link,
        hint,
        upload,
        resize,
        classes,
        fullscreen,
        outline,
        htmlValue,
        selectedValue,
        wordCount,
        resizeHeight,
        setProps,
        loading_state
    } = props;

    const [vd, setVd] = useState();

    const optionCounter = useMemo(() => {
        return {
            ...counter,
            after: (length) => {
                setProps({ wordCount: length })
            }
        }
    }, [counter])

    const optionResize = useMemo(() => {
        return {
            ...resize,
            after: (height) => {
                setProps({ resizeHeight: height })
            }
        }
    }, [resize])

    const options = useMemo(() => {
        const vars = {
            debugger: debuggerMode,
            counter: optionCounter,
            resize: optionResize,
            undoDelay,
            height,
            minHeight,
            width,
            placeholder,
            lang,
            tab,
            typewriterMode,
            cdn,
            mode,
            value,
            theme,
            icon,
            toolbar,
            toolbarConfig,
            cache,
            preview,
            image,
            link,
            hint,
            upload,
            classes,
            fullscreen,
            outline,
        };

        return Object.entries(vars).reduce((acc, [key, value]) => {
            if (!isUndefined(value)) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }, [undoDelay, height, minHeight, width, placeholder, lang, tab, typewriterMode, cdn, mode, debuggerMode, value, theme, icon,
        toolbar, toolbarConfig, optionCounter, cache, preview, image, link, hint, upload, optionResize, classes, fullscreen, outline])

    useEffect(() => {
        const vditor = new Vditor(id, {
            ...options,
            after: () => {
                vditor.setValue(isUndefined(value) ? "" : value);
                setVd(vditor);
            },
            input: (value) => {
                setProps({ value: value });
                setProps({ htmlValue: vditor.getHTML() });
            },
            select: (value) => {
                setProps({ selectedValue: value })
            }
        });
        // Clear the effect
        return () => {
            vd?.destroy();
            setVd(undefined);
        };
    }, [options]);

    return (
        <div
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            key={key}
            style={style}
        />
    );
}

export default FefferyVditor;

FefferyVditor.defaultProps = defaultProps;
FefferyVditor.propTypes = propTypes;