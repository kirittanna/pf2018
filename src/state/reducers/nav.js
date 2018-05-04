// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import {
  NAV_PEEK,
  NAV_ACTIVATE,
  NAV_ENABLE,
  NAV_RESPONSIVE,
  ROUTE_CHANGED,
} from '../actions'

const initialState = {
  active: false, // start with nav active
  enabled: false, // start with nav disabled
  responsive: 'multiple',
  peek: false,
  items: [
    {
      path: '/',
      label: 'Home',
    },
    { path: '/downloads', label: 'Downloads' },
    { path: '/donate', label: 'Donate' },
    { path: '/people', label: 'People' },
    { path: '/exhibition', label: 'Exhibition' },
    {
      path: '/environment-tools-libraries',
      label: 'Environment, Tools & Libraries',
    },
    { path: '/tutorials', label: 'Tutorials' },
    { path: '/examples', label: 'Examples' },
    { path: '/books', label: 'Books' },
    { path: '/overview', label: 'Overview' },
    {
      path: 'https://processingfoundation.org/',
      label: 'Processing Foundation',
    },
    { path: 'https://p5js.org/', label: 'P5.js' },
    { path: 'https://processing.py/', label: 'Processing.py' },
    { path: 'http://android.processing.org/', label: 'Processing for Android' },
  ],
}

const handlers = {
  [NAV_PEEK]: (_, action) => ({ peek: action.peek }),

  [NAV_ACTIVATE]: (_, action) => ({
    active: action.active,
    activateOnMultiple: null,
  }),

  [NAV_ENABLE]: (_, action) => ({ enabled: action.enabled }),

  [NAV_RESPONSIVE]: (state, action) => {
    let result = { responsive: action.responsive }
    if ('single' === action.responsive && state.active) {
      result.active = false
      result.activateOnMultiple = true
    } else if ('multiple' === action.responsive && state.activateOnMultiple) {
      result.active = true
    }
    return result
  },

  [ROUTE_CHANGED]: (state, action) => {
    return 'single' === state.responsive && state.active
      ? { active: false }
      : {}
  },
}

export default function navReducer(state = initialState, action) {
  let handler = handlers[action.type]
  if (!handler) return state
  return { ...state, ...handler(state, action) }
}
