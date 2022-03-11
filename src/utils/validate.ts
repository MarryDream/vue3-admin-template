/* 判断文件是否为指定类型 */
export const fileTypeValidate = (accept: string, file: File) => {
  // 若未传递类型，直接通过
  if (!accept) return true

  let validateState = false
  const acceptList = accept.split(',')
  for (const item of acceptList) {
    // 类型为 image/* 等时
    if (/^([a-z]+)\/\*$/.test(item)) {
      const reg = new RegExp(`^(${RegExp.$1}\\/).+$`)
      if (reg.test(file.type)) validateState = true
    } else {
      // 类型为 .xxx 时
      // eslint-disable-next-line
      const reg = new RegExp(`^.+\\${item}$`)
      if (reg.test(file.name)) validateState = true
    }
  }
  return validateState
}

/* 校验对象是否相等方法 */
export function isEqualObj(a: any, b: any) {
  // 当传入类型不是object时，抛出错误
  if (!(a instanceof Object && b instanceof Object)) {
    throw new Error('传入类型错误')
  }
  // 引用地址相同时，直接返回true（此时包含两者为null的情况）
  if (a === b) {
    return true
  }
  // 有一个为null时
  if (a === null || b === null) {
    return false
  }

  // 获取a和b的全部键值
  const aProps = Object.keys(a)
  const bProps = Object.keys(b)
  // 属性数量不同时
  if (aProps.length !== bProps.length) {
    return false
  }
  // 遍历查看属性值是否相等
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i]
    // 判断b是否存在a的这个属性
    if (!Object.prototype.hasOwnProperty.call(b, propName)) {
      return false
    }
    const propA = a[propName]
    const propB = b[propName]
    if (propA instanceof Object && propB instanceof Object) {
      if (!isEqualObj(propA, propB)) {
        return false
      }
    } else if (propA !== propB) {
      return false
    }
  }
  return true
}

// 验证是否为空值
export function isNull(message: string) {
  return (rule: any, value: string, callback: any) => {
    if (!value.trim()) {
      callback(new Error(message))
    } else {
      callback()
    }
  }
}


/* 验证链接 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/* 校验手机号 */
export function validPhone(str: string) {
  const IS_PHONE = /^[1]([3-9])[0-9]{9}$/
  return IS_PHONE.test(str)
}

/* 只允许输入字母和汉字 */
export function validUserName(str: string) {
  const IS_USERNAME = /[^\u4e00-\u9fa5a-zA-Z]/
  if (!str) {
    return false
  }
  return !IS_USERNAME.test(str)
}

/* 密码校验 */
export function validPassword(str: string) {
  const IS_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
  return IS_PASSWORD.test(str)
}

/* 完整的域名校验 */
export function webSite(str: string) {
  const web = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
  return web.test(str)
}

/* 验证是否是邮箱 */
export function isEmail(str: string) {
  const email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  return email.test(str)
}

/* 判断字符串是否是json字符串 */
export function isJsonString(str: any) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
