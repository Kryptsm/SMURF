# Week 3

| Part           | Comments    | Points |
|----------------|-------------|--------|
| provided tests | 1 failure   |     63 |
| extras         | 2 failures  |      6 |
| Coding         |             |     23 |
| **TOTAL**      |             |     92 |


The code failed my two gnarliest extra tests, "closure scope 2 and 3"

File: Interpreter.js
54:     for(let i = 0; i < args.length; i = i + 1){
55:       // try{
56:         var val = args[i].accept(this)
57:       // }
58:       // catch{
59:       //   val = this.binding.getVariableValue(args[i])
60:       // }
61:         binding.setVariable(thunk.formals[i], val)
62:     }

Note the commented out lines. Code still runs fine...

File: Interpreter.js
66:     thunk.binding = this.binding

I think this might be a bug: you shouldn't be changing the thunk every
time you run it.  However, I tried for a few minutes and couldn't create
a test that broke.

The test continue to pass if it is commented out, though.



# Week 2

| Part           | Comments    | Points |
|----------------|-------------|--------|
| provided tests | All passed  |     65 |
| extras         | 3 failures  |      4 |
| Coding         |             |     25 |
| **TOTAL**      |             |     94 |

Failures in my torture tests:

- the interpreter blows up given `if 0 { 99 }`. It should either raise
  an error or return 0.

- your binding code doesn't check for duplicate definitions of a
  variable (two `let`s for the same variable)

- your binding code doesn't check for attempts to access a
  variable that hasn't been defined.
