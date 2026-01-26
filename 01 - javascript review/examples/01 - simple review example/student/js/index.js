// 1. select form & topic list
let topicForm = document.querySelector(".new-topic-form")
let topicList = document.querySelector(".topics-list")

// 5. create a function to add the text input to the topic list
const addTopicToPage = (topicName, topicListElement) => {
    // 6.a) create template string
    let newTopicElement = `<li class="list-group-item">${topicName}</li>`
    topicListElement.innerHTML += newTopicElement
}

// 2. add event listener & stop default form submission
topicForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault()
        
        // 3. grab input text & store value
        let topicInput = event.target.elements["new-topic"]
        let topicText = topicInput.value

        // 4. input validation (no empty strings, use bootstrap classes)
        if (!topicText) {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }
        // 6.b) call the addTopicToPage function w/ text from the input field
        addTopicToPage(topicText, topicList)
    }
)
