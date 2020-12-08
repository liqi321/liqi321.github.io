var liqi321 = {
  chunk: function chunk(ary, size) {
    var result = []
    var ress = []
    var l = 0
    if (size < 1) {
      size = 1
    }
    for (i = 0; i < ary.length; i++) {
      ress.push(ary[i])
      l++
      if (l == size) {
        result.push(ress)
        ress = []
        l = 0
      }
      if (l != 0) {
        result.push(ress)
      }
      return result
    }
  },

  compact: function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },

  indexof: function indexof(ary, val, startIndex = 0) {
    for (var i = startIndex; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },

  lastindexof: function lastindexof(ary, val, startIndex = ary.length - 1) {
    for (var i = startIndex; i >= 0; i--) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },
}
