// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.closeButton = this.domElement.querySelector(".closeButton"); 
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    this.closeButton.textContent = "Click to Close";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle())
    this.closeButton.addEventListener("click", () => this.closeArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle("article-open");
    this.expandButton.classList.toggle("hide-btn");
    this.closeButton.classList.toggle("hide-btn");

    TweenMax.to(this.domElement, .4, {
      height: "400px",
      ease: Bounce.easeout
    })
  }

  closeArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle("article-open");
    this.expandButton.classList.toggle("hide-btn");
    this.closeButton.classList.toggle("hide-btn");

    TweenMax.to(this.domElement, .4, {
      height: "50px",
      ease: Bounce.easeout
    })
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  -- x

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor. -- x

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => new Article(article));