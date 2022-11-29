# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferygithubcolorpicker

"""
    ''_fefferygithubcolorpicker(;kwargs...)

A FefferyGithubColorPicker component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `color` (String; optional)
- `colors` (Array of Strings; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
- `triangle` (a value equal to: 'hide', 'top-left', 'top-right'; optional)
"""
function ''_fefferygithubcolorpicker(; kwargs...)
        available_props = Symbol[:id, :className, :color, :colors, :loading_state, :style, :triangle]
        wild_props = Symbol[]
        return Component("''_fefferygithubcolorpicker", "FefferyGithubColorPicker", "feffery_utils_components", available_props, wild_props; kwargs...)
end
