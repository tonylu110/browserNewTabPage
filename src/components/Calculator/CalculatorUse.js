export default function CalculatorUse(fn) {
  var Fun = Function
  return new Fun('return ' + fn)()
}