export type GenRangeOpts = {
  from?: number
  to: number
  step?: number
}

export function* genRange({from = 0, to, step = 1}: GenRangeOpts) {
  while (to > from) {
    yield from
    from += step
  }
}
