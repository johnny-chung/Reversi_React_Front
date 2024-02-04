


function deepCopy2DArray(orgArray) {
    return orgArray.map(
        innerArr => innerArr.slice()
    )
}

export { deepCopy2DArray };