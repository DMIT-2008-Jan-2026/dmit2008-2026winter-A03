/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// 1: select elements
let topicform = document.querySelector('.new-topic-form');
let topicsList = document.querySelector('.topics-list.list-group');
let topicInput = document.querySelector('#new-topic-input');

//5. Create a function named "addTopicToPage" that will take the topic name and the topic list element as a parameter.
const addTopicToPage = (topicName, topicListElement) => {
   let newTopicElement = `<li class= "list-group-item">
        ${topicName}
        </li>`;
        topicListElement.innerHTML += newTopicElement;
}

// 2: Add event listener
topicform.addEventListener("submit", (event) => {
    console.log(event); // now logs the actual event
    event.preventDefault();

    // 3: grab input value
    let topicValue = topicInput.value;

    // 4: validation
    if (topicValue === "") {
        topicInput.classList.add('is-invalid');
    } else {
        topicInput.classList.remove('is-invalid');
    }

    // 6: call addTopicToPage function with text from input
    addTopicToPage(topicValue, topicsList);

}
);