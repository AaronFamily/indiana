/**
 * 验证合法uri
 * @param textval
 * @returns {boolean}
 */
export const validateURL = textval => /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(textval)

/**
 * 验证小写字母
 * @param str
 * @returns {boolean}
 */
export const validateLowerCase = str => /^[a-z]+$/.test(str)

/**
 * 验证大写字母
 * @param str
 * @returns {boolean}
 */
export const validateUpperCase = str => /^[A-Z]+$/.test(str)

/**
 * 验证大小写字母
 * @param str
 * @returns {boolean}
 */
export const validateAlphabets = str => /^[A-Za-z]+$/.test(str)

/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
export const validateEmail = email => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
