# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FefferyLocalLargeStorage(Component):
    """A FefferyLocalLargeStorage component.
客户端大容量存储器FefferyLocalLargeStorage

Keyword arguments:

- id (string; required):
    用于定义当前存储器的唯一识别id.

- data (boolean | number | string | dict | list; optional):
    定义当前存储器对应存储在浏览器本地的数据.

- initialSync (boolean; default False):
    设置初始化时是否从浏览器本地存储中尝试读取`id`对应的值并更新到`data`中  默认值：`False`.

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
    _type = 'FefferyLocalLargeStorage'
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, data=Component.UNDEFINED, initialSync=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'initialSync', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'initialSync', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(FefferyLocalLargeStorage, self).__init__(**args)
