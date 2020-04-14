arithmetic_expression 
	= " "* mult_term (" "* addop " "* mult_term)* " "*

mult_term 
	= " "* primary (" "* mulop " "* primary)* " "*

primary 
	= " "* integer " "*
	/ " "* "(" " "* arithmetic_expression " "* ")"

integer 
	= " "* ('+' / '-')? digits

digits 
	= " "* [0-9]+ " "*

addop 
	= " "* '+' / '-' " "*

mulop 
	= " "* '*' / '/' " "*
