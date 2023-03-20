# AUTO GENERATED FILE - DO NOT EDIT

export ''_fefferycountup

"""
    ''_fefferycountup(;kwargs...)

A FefferyCountUp component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `decimals` (Real; optional)
- `duration` (Real; optional)
- `enableScrollSpy` (Bool; optional)
- `end` (Real; required)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `scrollSpyDelay` (Real; optional)
- `scrollSpyOnce` (Bool; optional)
- `separator` (String; optional)
- `start` (Real; optional)
- `style` (Dict; optional)
"""
function ''_fefferycountup(; kwargs...)
        available_props = Symbol[:id, :className, :decimals, :duration, :enableScrollSpy, :key, :loading_state, :scrollSpyDelay, :scrollSpyOnce, :separator, :start, :style]
        wild_props = Symbol[]
        return Component("''_fefferycountup", "FefferyCountUp", "feffery_utils_components", available_props, wild_props; kwargs...)
end
