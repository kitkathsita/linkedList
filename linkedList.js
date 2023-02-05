class Node {
  constructor(value, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

class LinkedList {

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  append(value) {
    if (this.head === null && this.tail === null) {
      this.head = value
      this.size++
    } else {
      this.tail.nextNode = value
      this.size++
    }
    this.tail = value
  }

  prepend(value) {
    if (this.head != null) {
      value.nextNode = this.head
      this.head = value
    }
    this.size++
  }
  
  getSize() {
    return this.size
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  at(index) {
    if (this.head===null || index>=this.size) {
      return 'invalid search'
    } else {
      let i = 0
      let actualNode = this.head
      while (i!=index) {
        actualNode = actualNode.nextNode
        i++
      }
      return actualNode
    }
  }

  pop() {
    let actualNode = this.head
    while (actualNode.nextNode != this.tail) {
      actualNode = actualNode.nextNode
    }
    actualNode.nextNode = null
    this.tail = actualNode
    this.size--
    return this.tail
  }

  contains(value) {
    let actualNode = this.head
    while (actualNode.nextNode != null) {
      if (actualNode.value === value) {
        return true
      }
      actualNode = actualNode.nextNode
    }
    return false
  }

  find(value) {
    let actualNode = this.head
    let i = 0
    while (actualNode != null) {
      if (actualNode.value === value) {
        return i
      }
      actualNode = actualNode.nextNode
      i++
    }
    return null
  }

  toString() {
    let actualNode = this.head 
    let i = 0
    let stringNodes = ''
    while (i<this.size) {
      stringNodes = stringNodes + '(' + actualNode.value + ')->' 
      i++
      actualNode = actualNode.nextNode
    }
    stringNodes = stringNodes + null
    return stringNodes
  }
  
}

let node = new Node('hola')
let node2 = new Node('adios')
let node3 = new Node('again')
let newhead = new Node ('new head')
let list = new LinkedList()
list.append(node)
list.append(node2)
list.append(node3)
list.prepend(newhead)
/* console.log(list.pop())
/* console.log(list.pop()) */
console.log(list.getSize())
console.log(list.find('adios'))
console.log(list.toString())