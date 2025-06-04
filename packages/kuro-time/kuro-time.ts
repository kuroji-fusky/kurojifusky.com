type _MaybeDate = string | number | Date

export class BadgerTime {
  private static _coerceToDate(d: _MaybeDate) {
    return d instanceof Date ? d : new Date(d)
  }

  static dateDifference(a: _MaybeDate, b: _MaybeDate) {
    const dateA = this._coerceToDate(a).getTime()
    const dateB = this._coerceToDate(b).getTime()

    return dateB - dateA
  }

  private static _joinTimecode(...num: number[]) {
    return num.join(":")
  }
}

export const kt = BadgerTime
