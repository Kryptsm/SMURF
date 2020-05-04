export default class Binding {
  constructor(parent = null) {
    this.binding = new Map()
    this.parent = parent
  }

  getVariableValue(name) {
    this.checkVariableExists(name)
    let temp = this.binding.get(name)
    if(temp == null)
      return this.parent.getVariableValue(name)
    else
      return temp
  }


  setVariable(name, value) {
    if (this.binding.has(name))
      throw new Error(`Duplicate declaration for variable`)
    this.binding.set(name, value)
  }

  updateVariable(name, value) {
    this.checkVariableExists(name)
    this.binding.set(name, value)
  }

  checkVariableExists(name) {
    if (!this.binding.has(name)){
      let parent = this.pop()
      if(parent == null){
        console.log("this", this)
        throw new Error(`Reference to unknown variable ${name}`)
      }
      else
        parent.checkVariableExists(name)      
    }
  }

  push(){
    return new Binding(this)
  }

  pop(){
    return this.parent
  }
}