// 1. select form & topic list
let topicForm = document.querySelector(".new-topic-form")
let topicList = document.querySelector(".topics-list")

// HTML for list topic list item
//<li class="list-group-item">
//    NEW TOPIC HERE
//</li>

// 5. create a function to add the text input to the topic list
 const addTopicToPage = (topicName, topicListElement) => {
      //6a. create a new inner list element and update the HTML
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
    </li>`
    topicListElement.innerHTML += newTopicElement
 }

// 2.  add event listener & stop default form 
topicForm.addEventListener(
    "Submit",
    (event) => {
        console.log(event)
        event.preventDefault()

        // 3. grab input text & store value
        let topicInput = event.target.elements["new-topic"]
        let topiText = topicInput.Value

        // 4. input validation (no empty strings, use bootstrap)
        if (!topicText === "") {
            topicInput.classList.add("is-valid")
        }else {
            topicInput.classList.remove("is-valid")
        }

        // 6. call the addTopicToPage function w/ text from the input field
        addTopicToPage(topicText, topicList)
    }
)

