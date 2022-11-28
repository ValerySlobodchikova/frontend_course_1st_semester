function arraysIsEqual(a1, a2) {
  if (a1 === a2) return true
  if (a1 == null || a2 == null) return false
  if (a1.length !== a2.length) return false

  a1 = a1.sort()
  a2 = a2.sort()

  for (var i = 0; i < a1.length; ++i) {
    if (a1[i] !== a2[i]) return false
  }
  return true
}

function annagram(s1, s2) {
  let a1 = s1.split('')
  let a2 = s2.split('')
  return arraysIsEqual(a1, a2)
}