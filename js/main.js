(() => {
  const sigils = document.querySelectorAll(".sigilContainer"),
        button = document.querySelector('#button'),
        burgerCon = document.querySelector("#burgerCon"),
        navLinks = burgerCon.querySelectorAll("a"),
        introVideo = document.querySelector("video"),
        sliderImages = document.querySelector("#sliderImages"),
        beerName = document.querySelector(".beer-name"),
        beerInfo = document.querySelector(".beer-info");

        const beerData = [
          [ "Classic",
          `Our favorite Old Spice classic ale bottle. If you already know our beer you already know thiss beer. `
        ],
        ["White", `whitee`],
        ["red",`Red Ales originate from Europe and refers to styles of beer that are dark red or are reddish in appearance. This brew style is still, to some extent, waiting for its big break and to secure a spot amongst the more easily recognized beer styles.Red Ales can almost be thought of as the European version of an American Amber Ale since ‘red’ and ‘amber’ are essentially describing the same full-flavored, hoppy, buttery beer. Currently Red Ales are stuck sharing a category with American Amber Ales at the Great American Beer Festival, this category being a catchall for anything that is not a dark ale, not clearly a pale ale, and does not quite fit in with brown ales. While these American Amber Ale and Red Ale beer styles are comparable to each other, the Red Ale is ready to stand on its own!Historically, Red Ales, unlike American Amber Ales, use specialty roasted malts that create a unique complexity within the finished beer, give it a sweeter, butterscotch or caramelized flavor, and allow it to achieve the reddish color. The use of American hops varieties gives the brew very bold hops characteristics and tends to leave a dry finish. American Amber Ales on the other hand, rely on caramelized malts to obtain their color and flavors.This brew can range from a light amber/red to a dark brown with red hues and typically has an ABV in the 4.5-7% range. The beer variety also has certain contrasting elements that attract many of its drinkers. While Red Ales are darker and usually rich, they also contain components of a much lighter beer with a dry, crisp and hoppy finish.Due to their robust nature, these beers pair wonderfully with food. The toasty malt flavor and light fruitiness allow the Red Ale to pair well with cheeses like Gruyère and mild Derby Cheddar. Whereas the balanced nature and ability to remain subtle, not overpowering, makes the beer a good match with poultry like grilled chicken or turkey, and lighter sandwiches.As a whole, Red Ales are expected to possess a range of ’mediums.’ This means that according to style guidelines, Red Ales should have a medium or slightly fuller body, medium levels of fruity aromas and flavors common in IPAs, medium hop bitterness and flavors, and medium to slightly fuller malt character. On all aspects of the beer variety, it should be medium.Another example of a Red Ale is an Irish Red Ale. While these share many similar qualities with the American Red Ale, the use of English hops makes all the difference. This style is amber to deep copper in appearance and can be sweeter than its American counterpart. However there is typically little to no hop presence. Irish Red Ales have a smooth, warm mouth feel and moderate carbonation with a dry finish.One important thing to note is that red ales differ from red beers, such as Mexican red beer. Mexican red beer is a simple beer cocktail known as a Michelada, turned red by the addition of tomato juice. This beer drink consists of beer, typically a light Mexican lager though others can be used, mixed with tomato juice, limes, and a variety of sauces and spices including, hot sauce, Worcestershire sauce, soy sauce, pepper, and more.There have been several Red Ales featured in our Craft Beer Club and our members have had the pleasure of tasting Belfast Bay Brewing Co.’s ‘Lobster Ale’ — a unique Red Ale from Maine. This is a great example of a classic Red Ale and we will be featuring more of this style in the upcoming monthly beer shipments to our members. `
]
];
        function showNavigation()  {
         button.classList.toggle("expanded");

         // show the mobile Navigation
         burgerCon.classList.toggle("slideToggle");
        }

        // event handling goest at the bottom
        button.addEventListener("click",showNavigation);

        for (link of navLinks) {
          link.addEventListener("click",showNavigation);
        }
        function animateBanners() {
    // move the banners across the screen
    const offSet = 600;

    let multiplier = this.dataset.offset,
        finalOffset = offSet * multiplier;
        // this will be a product of the mulitipier * the offset (600 * something)
    sliderImages.style.right = finalOffset + "px";

    // call the showHouseData function and pass the offset to interval
  showBeerData(multiplier);
  }
        function showBeerData(targetIndex) {


          beerName.textContent = `Beer ${beerData[targetIndex] [0]} `;
          beerInfo.textContent = beerData[targetIndex][1];
        }

       })();
