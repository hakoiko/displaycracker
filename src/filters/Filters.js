import Vue from 'vue'

Vue.filter('capitalize', function (str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
})

Vue.filter('labelize', function (str) {
  if (!str) return ''
  str = str.toString()[0].toUpperCase() + str.slice(1)
  return str.replace(/[a-z0-9][A-Z]/g, w => w[0] + ' ' + w[1])
})

Vue.filter('camelize', function (str) {
  if (!str) return ''
  return str.replace(/\s(.)/g, w => w.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, w => w.toLowerCase())
})

Vue.filter('hyphenize', function (str) {
  if (!str) return ''
  let result = str.replace(/[A-Z]/g, w => '-' + w.toLowerCase())
    .replace(/\s/g, '-')
    .replace(/--/g, '-')
  return (result[0] === '-') ? result.substr(1) : result
})

export default {}
