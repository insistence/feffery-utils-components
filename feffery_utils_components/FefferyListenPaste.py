# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyListenPaste(Component):
    """A FefferyListenPaste component.
全局粘贴监听组件FefferyListenPaste

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- pasteText (string; optional):
    监听最近一次文本粘贴事件对应的粘贴内容.

- pasteCount (number; default 0):
    监听累计监听到的粘贴事件发生次数  默认值：`0`.

- enableListenPaste (boolean; default False):
    用于设置是否为当前组件启用粘贴事件监听  默认值：`False`.

- targetContainerId (string; optional):
    用于设置要监听绑定的目标容器id，设置此参数后，粘贴事件监听仅在目标容器被鼠标悬停时生效.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_utils_components'
    _type = 'FefferyListenPaste'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, pasteText=Component.UNDEFINED, pasteCount=Component.UNDEFINED, enableListenPaste=Component.UNDEFINED, targetContainerId=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'pasteText', 'pasteCount', 'enableListenPaste', 'targetContainerId', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'pasteText', 'pasteCount', 'enableListenPaste', 'targetContainerId', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(FefferyListenPaste, self).__init__(**args)
