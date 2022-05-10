# Building an Invoice Tool
As the final project from scrimba's great intro to javascript course, I'll be building a simple invoice generator tool. The project itself is _fairly_ basic with the requirements being: three possible services that can be rendered, each can only be charged for once, a total displayed, and a stretch goal of allowing each to be removed separately. I'm going to be augmenting the requirements a bit: the list of services rendered will start with the three defaults but an input field will allow for adding more, as a result both the buttons and rendered services will be stored in localStorage. Additionally, you will be able to add a recipient name and email address and the send button will format a useful message stored in a `mailto` link. Let's get started!

## Laying the HTML Foundation
I'm still a big believer in separation of concerns, the idea that each language is responsible for a specific aspect of a web experience and there should be minimal overlap between those responsibilities. HTML provides document structure, CSS provides style and legibility, and JS provides functionality. Let's start by structuring the document. 


