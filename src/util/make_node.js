export class <<node name>> {
    constructor(<<n1, n2 .. >>){
        //this.<<n1>> = <<n1>>
        //this.<<n2>> = <<n2>>
    }

    accept(visitor){
        return visitor.<<NodeName>>(this)
    }
}