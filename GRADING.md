# Week 1

| Part           | Comments    | Points |
|----------------|-------------|--------|
| 00-test_values | All passed  |     75 |
| 00-test_extras | All passed  |     10 |
| Coding         |             |     23 |
| **TOTAL**      |             |     98 |

Not a deduction, just an observation:

You can simplify this:

    integer
      = _ '+' _ term:digits _
        {return new AST.Integer(parseInt(term.join(""), 10))}
      / _ '-' _ term:digits _
        {return new AST.Integer(parseInt(term.join(""), 10)*-1)}
      / _ term:digits _
        {return new AST.Integer(parseInt(term.join(""), 10))}

to this:

    integer
      = _ '+'? _ term:digits _
        {return new AST.Integer(parseInt(term.join(""), 10))}
      / _ '-' _ term:digits _
        {return new AST.Integer(parseInt(term.join(""), 10)*-1)}

But this also does reveal a minor bug: this grammar allows spaces after
the sign, letting you write '1 - - 2'. I'm not aware of any language
that supports that.

Nice work.