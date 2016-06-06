 var calculator = {
		sum: 0,//stores running total of sum
		add: function(value) {//adds value to sum
			this.sum += value;
	    },
	    subtract: function(value) {
		    this.sum -= value;
		},
		multiply: function(value) {
		    this.sum *= value;
		},
		divide: function(value) {
		   this.sum /= value;
		},
	    clear: function() {//resets sum to 0
	    	this.sum = 0;
	    }, 
	    equals: function() {//returns the value
	    	return this.sum;
	    }
}
