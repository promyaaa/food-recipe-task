function CallFoodData(searchTerm) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        //var count = Object.keys(data.meals).length;
        let text = " <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>";
        for (let x in data.meals) {
          text += "<div class='card w-full bg-base-100 border-solid border-gray-300 border rounded-none'>";
          text += "<figure class='p-2.5'><img src='" + data.meals[x]['strMealThumb'] + "' alt='Shoes'class='rounded-none'  /></figure>";
          text += "<div class='card-body items-left text-left'><h3 class='card-title truncate'>" + data.meals[x]['strMeal'] + "</h3>";
          text += "<p class='truncate'>" + data.meals[x]['strInstructions'] + "</p>";
          text += "<div class='card-actions justify-start py-5'><button class='btn btn-neutral'>Details</button> </div>";
          text += "</div></div>";
          }
        text += "</div>"
        document.getElementById("container").innerHTML = text;

      }
      )
      .catch(error => console.error(error));

    //Large Device lg
    if (searchTerm == 'Potato') {
      document.getElementById("potato").style.backgroundColor = "#d6dde4";
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("potato").style.borderRadius = "10px";
    }
    if (searchTerm == 'Soup') {
      document.getElementById("soup").style.backgroundColor = "#d6dde4";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("soup").style.borderRadius = "10px";
    }
    if (searchTerm == 'Chicken') {
      document.getElementById("chicken").style.backgroundColor = "#d6dde4";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("beef").style.backgroundColor = null;
      document.getElementById("chicken").style.borderRadius = "10px";
    }
    if (searchTerm == 'Beef') {
      document.getElementById("beef").style.backgroundColor = "#d6dde4";
      document.getElementById("potato").style.backgroundColor = null;
      document.getElementById("soup").style.backgroundColor = null;
      document.getElementById("chicken").style.backgroundColor = null;
      document.getElementById("beef").style.borderRadius = "10px";
    }

    //Large Device sm and md
    if (searchTerm == 'Potato') {
      document.getElementById("potato_sm").style.backgroundColor = "tomato";
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("potato_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Soup') {
      document.getElementById("soup_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Chicken') {
      document.getElementById("chicken_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Beef') {
      document.getElementById("beef_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Vegetarian') {
      document.getElementById("vegetarian_sm").style.backgroundColor = "tomato";
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.borderRadius = "10px";
    }
    if (searchTerm == 'Seafood') {
      document.getElementById("seafood_sm").style.backgroundColor = "tomato";
      document.getElementById("beef_sm").style.backgroundColor = null;
      document.getElementById("potato_sm").style.backgroundColor = null;
      document.getElementById("soup_sm").style.backgroundColor = null;
      document.getElementById("chicken_sm").style.backgroundColor = null;
      document.getElementById("vegetarian_sm").style.backgroundColor = null;
      document.getElementById("seafood_sm").style.borderRadius = "10px";
    }

  }
