function fieldsEmptyChecker(fields){
  for (const field of Object.values(fields)) {
    if (field === '') {
      return false
    }
  }
  return true
}

export default fieldsEmptyChecker