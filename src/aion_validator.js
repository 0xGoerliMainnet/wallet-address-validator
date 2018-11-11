var cryptoUtils = require('./crypto/utils')

module.exports = {
  isValidAddress: function(address) {
    if (address.length === 66) {
      if (!/^0x[0-9a-fA-F]{64}$/.test(address)) {
        // Check if it has the basic requirements of an address
        return false
      }
      return this.verifyChecksum(address)
    }
    if (address.length !== 64) {
      return false
    }

    // Otherwise check each case
    return this.verifyChecksum(address)
  },
  verifyChecksum: function(address) {
    // Check each case
    address = address.replace('0x', '')

    var prefix = address.slice(0, 2).toLowerCase()
    return prefix === 'a0'
  }
}
