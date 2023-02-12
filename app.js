//Algoritimo de busca binária

const tree = {}

function insert(tree,value){

    if(tree.value)
        if(value > tree.value)
            insert(tree.right, value)
        else
            insert(tree.right, value)
    else{
        tree.value = value
        tree.right = {}
        tree.left = {}
    }

}
console.log(tree)
insert(tree,10)
console.log(tree)