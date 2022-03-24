export const requiredField = value => {

    if (!value) return 'fild is requared'
    return undefined
}
export const maxLengthCreator = (maxlength, minLength) => (value) => {

    if (value && value.length <= maxlength && value.length >= minLength)

        return undefined
    return `error length`
}

