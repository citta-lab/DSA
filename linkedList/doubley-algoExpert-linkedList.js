// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      if(!this.head){
              this.head = node;
              this.tail = node;
              return;
          }
          
          this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      if(!this.tail){
              this.head = node;
              this.tail = node;
              return;
          }
          
          this.insertAfter(this.tail, node);
    }
  
    insertBefore(node, nodeToInsert) {
          if(nodeToInsert === this.head && nodeToInsert === this.tail ) return;
          this.remove(nodeToInsert);
      // need to insert before node
          nodeToInsert.prev = node.prev;
          nodeToInsert.next = node;
          
          
          if(node.prev){
              node.prev.next = nodeToInsert;
          }
          
          if(!node.prev){
              this.head = nodeToInsert;
          }
          
          node.prev = nodeToInsert;
    }
  
    insertAfter(node, nodeToInsert) {
          
          if(nodeToInsert === this.head && nodeToInsert === this.tail ) return;
          this.remove(nodeToInsert);
          
      nodeToInsert.prev = node;
          nodeToInsert.next = node.next;
          
          
          if(node.next){
              node.next.prev = nodeToInsert;
          }
          
          if(!node.next){
              this.tail = nodeToInsert;
          }
          
          node.next = nodeToInsert;
    }
  
    insertAtPosition(position, nodeToInsert) {
     if(position === 1) {
           this.setHead(nodeToInsert);
           return;
       }
          
          let root = this.head;
          let count = 1;
          while(root && count !== position){
              root = root.next;
              count++
          }
          
          if(root){
              this.insertBefore(root, nodeToInsert);
          }
          
          if(!root){
              this.setTail(nodeToInsert);
          }
      
    }
  
    removeNodesWithValue(value) {
          let node = this.head;
         while(node){
              let nodeToRemove = node;
              node = node.next;
              if(nodeToRemove.value === value) this.remove(nodeToRemove);
          }
    }
  
    remove(node) {
          if(this.head === node) this.head = this.head.next;
          if(this.tail === node) this.tail = this.tail.prev;
          this.removeNodeBindings(node)
    }
  
    containsNodeWithValue(value) {
          let node = this.head;
      while(node && node.value !== value){
              node = node.next;
          }
          
          return node !== null;
    }
      
      removeNodeBindings(node){
          if(node.prev) node.prev.next = node.next;
          if(node.next) node.next.prev = node.prev;
          
          node.next = null;
          node.prev = null;
      }
  }
  
  