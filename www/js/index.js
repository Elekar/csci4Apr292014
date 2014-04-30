/*Rachelle Bradley*/
// https://github.com/phonegap/phonegap-start
//http://msysgit.github.io/
var mainIngredients = [
	"", "chocolate", "coconut", "peanut butter"
];

var cookies = [
	{
		"name": "Chocolate Chip Cookie",
		"title": "<h2>Chocolate Chip Cookies</h2>",
		"image": "chocolateChip.jpg", 
		"mainIngredients": ["chocolate"],
		"ingredients": "<h3>Ingredients</h3><br />1 cup butter, softened<br />1 cup white sugar<br />1 cup packed brown sugar<br />2 eggs<br />2 teaspoons vanilla extract<br />3 cups all-purpose flour<br />1 teaspoon baking soda<br />2 teaspoons hot water<br />1/2 teaspoon salt<br />2 cups semisweet chocolate chips<br />1 cup chopped walnuts",
		"directions": "<h3>Directions</h3><br />Preheat oven to 350 degrees. Cream sugars and butter. Add vanilla and eggs and mix well. Combine dry ingredients together and gradually add to creamed mixture. Stir in chips and nuts. Roll into 1 1/4 balls and place on non-stick cookies sheets, about 2 inches apart. Bake for 10 to 12 minutes.",
		"favorites": 0
	},
		{
		"name": "Peanut Butter Surprise Cookies",
		"title": "<h2>Peanut Butter Surprise Cookies</h2>",
		"image": "peanutbutterSurprise.jpg", 
		"mainIngredients": ["peanut butter"],
		"ingredients": "<h3>Ingredients</h3><br />1/2 cup(s) creamy peanut butter<br />4 tablespoon(s) unsalted butter, room temperature<br />1 cup(s) packed light-brown sugar<br />2 large eggs<br />1 teaspoon(s) pure vanilla extract<br />1 1/2 cup(s) all-purpose flour (spooned and leveled)<br />1 teaspoon(s) baking powder<br />1/4 teaspoon(s) salt<br />1/3 cup(s) granulated sugar, for rolling dough<br />36 mini peanut butter cups, chilled and unwrapped",
		"directions": "<h3>Directions</h3>Preheat oven to 325 degrees F. Place 2 baking sheets in refrigerator to chill. Cream together butter and sugars until light and fluffy. Whisk in eggs one at a time. Add peanut butter and whisk until smooth. In separate bowl, combine dry ingredients, then add to wet ingredients in 2 parts, using a spatula or wooden spoon to mix. Once well mixed, add peanut butter cups into batter, stirring only to combine, so the cups break up as little as possible. Use an ice cream scoop to portion cookies onto chilled baking sheet. Cook in center rack, 1 tray at a time, for 20-25, or until the bottoms of the cookies are lightly golden. Let cool completely on tray.",
		"favorites": 0
	},
	{
		"name": "Hot Chocolate Cookies",
		"title": "<h2>Hot Chocolate Cookies</h2>",
		"image": "hotChocolateChip.jpg", 
		"mainIngredients": ["chocolate"],
		"ingredients": "<h3>Ingredients</h3><br />For the cookies:<br /><br />2 & 1/2 cups all-purpose flour<br />1/2 cup unsweetened cocoa powder<br />1/2 teaspoon baking powder<br />1/2 teaspoon salt<br />1 cup unsalted butter, softened<br />1 cup granulated sugar<br />2 large eggs<br />2 teaspoons vanilla extract<br /><br />For the glaze:<br />1/4 cup unsalted butter<br />1 cup mini marshmallows<br />1 cup confectionerss sugar<br />2 tablespoons milk*",
		"directions": "<h2>Hot Chocolate Cookies</h2>Preheat oven to 350 degrees F. Line baking sheets with parchment paper. To make cookies, whisk together flour, cocoa powder, baking powder and salt; set aside. Using an electric mixer on medium speed, beat butter and sugar until light and fluffy. Add eggs, one at a time, mixing well after each addition. Mix in vanilla. Reduce mixer speed to low. Gradually add flour mixture, mixing just until combined. Drop cookies dough by tablespoonfuls onto prepared pans, placing cookies 2 inches apart. Using the bottom of a glass, flatten each cookies slightly. Bake cookies one pan at a time, 10 to 12 minutes. Remove from oven and let cookies cool on pans about 5 minutes, then remove cookies to wire rack to cool completely. To make glaze, place 1/4 cup butter in medium saucepan; melt over medium heat. Add marshmallows and continue cooking, stirring frequently, until marshmallows have melted. Stir until smooth.Remove from heat. Whisk in confectioner's sugar and milk until mixture is smooth. Drizzle glaze over cooled cookies. Allow glaze to set before storing in an airtight container.",
		"favorites": 0
	},
		{
		"name": "Coconut Snowball Cookies",
		"title": "<h2>Coconut Snowball Cookies</h2>",
		"image": "coconutCookies.jpg", 
		"mainIngredients": ["coconut"],
		"ingredients": "<h3>Ingredients</h3><br />For cookies:2 1/2 cups flour<br />1/2 cup unsweetened cocoa powder<br />1/2 teaspoon baking powder<br />1/2 teaspoon salt<br />1 cup (2 sticks) butter, softened<br />1 cup sugar<br />2 large eggs<br />2 teaspoons vanilla extract<br /><br />For glaze:<br />1/4 cup (1/2 stick) butter, softened<br />1 cup mini marshmallows<br />1 cup confectioners' sugar<br />2 tablespoons milk",
		"directions": "<h2>Coconut Snowball Cookies</h2>In large bowl, mix butter and sugars until light and fluffy. Add coconut extract and mix.In separate bowl, mix flour and salt together. Add to butter/sugar mixture and mix just to combine.Prepare baking sheet with parchment paper. With 2-inch cookie scoop, shape dough balls, flatten dough in palm of your hand to bring dough together and then reshape into ball.Place on baking sheet about 2 inches apart. Refrigerate formed cookies for 30 minutes prior to baking.Preheat oven to 400 degrees F.Bake for 8-10 minutes. Remove from oven and allow to cool on cooling rack.Fill small saucepan 1/4 of the way with water and top with small glass or metal bowl; choose bowl that will sit above the water level. Bring water to low boil over medium-high heat and add white chocolate and melt, stirring often with a wooden spoon or spatula.Remove chocolate from heat and roll cookies one at a time in chocolate, and then roll in coconut, coating well. Or, dip tops of cookies in white chocolate and sprinkle with coconut.  If melted chocolate begins to harden, heat over saucepan again for 1 or 2 minutes until melted. Allow cookies to dry on cooling rack for at least 20 minutes or until chocolate has hardened. Store in an airtight container for 3-4 days.",
		"favorites": 0
	}
];

for (var i=0; i < mainIngredients.length; i++){
	var newOption = '<option value="' + mainIngredients[i] + '">' + mainIngredients[i] + '</option>';
	$('#main-ingredients').append(newOption);
}

$("#main-ingredients").change(function(){
	$("#recipeTable").children().remove();
	for(var j=0; j<cookies.length; j++){
		var mainIngredients = cookies[j] ["mainIngredients"];
		for(var k=0; k<mainIngredients.length; k++){
			if(mainIngredients[k] === $("#main-ingredients option:selected").text()){
				var cookiesRow = makeRow(j, cookies[j]["name"], cookies[j]["image"], cookies[j]["favorites"]);
				$("#recipeTable").append(cookiesRow);
			}
		}
	}
	$('#recipeTable .cookiePic').click(chosenRecipe);
	});

	function chosenRecipe() {
		var cookieIndex = $(this).attr('cookieIndex');
		console.log('Clicked: '+ cookieIndex);
		console.log(cookies[cookieIndex]);
		var c = cookies[cookieIndex];
		var recipe = '<tr>';
		recipe += '<td>' + c.title + '</td>';
		recipe += '</tr>';
		recipe += '<tr>';
		recipe += '<td><img src="' + c.image + '" /></td>';
		recipe += '</tr>';
		recipe += '<tr>';
		recipe +='<td>' + c.ingredients + '</td>';
		recipe += '</tr>';
		recipe += '<tr>';
		recipe += '<td>' +  c.directions + '</td>';
		recipe += '</tr>';
		$("#recipeTable").children().remove();
		$("#recipeTable").append(recipe);
	}
	
	function makeRow(Index, name, image, likes){
		var row = '<tr>';
		row += '<td>' + name + '</td>';
		row += '<td><img class="cookiePic" cookieIndex="' + Index + '" src="' + image + '" /></td>';
		row += '<td><button data-name="' + name + '">Make a favorite!</button></td>';
		row += '</tr>';
		return row;
	}

$('table').on('click', 'button', function(){
	var cookies = $(this).data("name");
	for(var j=0; j<cookies.length; j++){
		if (cookies === cookies[j]["name"]){
			cookies[j]["likes"]++;
			$(this).parent().prev().html(cookies[j]["likes"] + ' likes');
			break;
			}
		}
});