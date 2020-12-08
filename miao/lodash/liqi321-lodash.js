var liqi321 = {
  chunk: function chunk(ary, size = 1) {
    var result = []
    var arr = []
    var l = 0
    if (size < 1) {
      size = 1
    }
    for (i = 0; i < ary.length; i++) {
      arr.push(ary[i])
      l++
      if (l == size) {
        result.push(arr)
        arr = []
        l = 0
      }
    }
    if (l != 0) {
      result.push(arr)
    }
    return result
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

  join: function join(ary, sep = ' ') {
    var result = ''
    for (i = 0; i < ary.length - 1; i++) {
      result += ary[i] + '' + sep
    }
    return result += ary[i]
  },

  last: function last(ary) {
    return ary[ary.length - 1]
  },

  drop: function drop(ary, n = 1) {
    var result = []
    for (i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  },


  indexOf: function indexof(ary, val, startIndex = 0) {
    for (var i = startIndex; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },

  lastindexOf: function lastindexof(ary, val, startIndex = ary.length - 1) {
    for (var i = startIndex; i >= 0; i--) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },
}
