export const resourcesCommonRulesUtils = [
  v => !!v || 'Resource is required',
  v => (v && v > '0') || 'Resource must be more than 0',
]

export const resourcesSugarRulesUtils = [
  v => !!v || 'Resource is required',
  v => (v && v > '3') || 'Resource must be more or equal 4',
]
