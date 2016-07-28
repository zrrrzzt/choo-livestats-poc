'use strict'

const html = require('choo/html')

module.exports = (stat, qid, statState, send) => {
  return html`
    <div class="quote">
      ${stat.key} : ${stat.value}
    </div>
  `
}
