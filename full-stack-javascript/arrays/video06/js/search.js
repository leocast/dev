var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
	search = prompt("search for produce in our store. type 'list' to show all of the produce and 'quit' to exit.");
	search = search.toLowerCase();
		if ( search === 'quit') {
			break;
		} else if ( search === 'list' ) {
			print( inStock.join(", ") );
		} else {
			if ( inStock.indexOf( search ) > -1 ) {
				print("yep, we have " + search + " in stock.");
			} else {
				print( search + " is something we don&#39;t carry." );
		}
	}
}

	


