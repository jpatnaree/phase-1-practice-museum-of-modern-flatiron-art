const exhibitTitle = document.getElementById('exhibit-title');
const exhibitDescription = document.getElementById('exhibit-description');
const exhibitImage = document.getElementById('exhibit-image');

const buyButton = document.getElementById('buy-tickets-button');
const ticketBought = document.getElementById('tickets-bought')
let counter = 0

const commentSection = document.getElementById('comments-section')

const commentForm = document.getElementById('comment-form');
const commentInput = commentForm[0]

fetch('http://localhost:3000/current-exhibits')
.then(resp => resp.json())
.then(museum => {
    museum.forEach(art => {
        addArt(art)
    })
})

function addArt(art) {
    exhibitTitle.textContent = `${art.title}  :  ${art.artist_name} `
    exhibitDescription.textContent = art.description;
    exhibitImage.src = art.image
    ticketBought.textContent = `${counter} Tickets Bought`
    
    art.comments.forEach(comment => {
        addCommemt(comment)
    })
}

function addCommemt(comment) {
    const pTag = document.createElement('p');
    pTag.textContent = comment;
    commentSection.appendChild(pTag);
}

commentForm.addEventListener('submit', e => {
    e.preventDefault();
    addCommemt(commentInput.value);
    commentForm.reset()
})

buyButton.addEventListener('click', () => {
    counter++;
    ticketBought.textContent = `${counter} Tickets Bought`
})