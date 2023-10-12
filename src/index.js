console.log('Write your code here');

const exhibitTitle = document.querySelector('#exhibit-title');
const exhibitDescription = document.getElementById('exhibit-description');
const commentSection = document.getElementById('comments-section');
const exhibitImage = document.getElementById('exhibit-image');
const butTicketsButton = document.getElementById('buy-tickets-button');
const ticketBought = document.getElementById('tickets-bought')

const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-form')[0]

let counter = 0

function showArt(artpiece) {
    exhibitTitle.textContent = artpiece.title;
    exhibitImage.src = artpiece.image;
    exhibitDescription.textContent = artpiece.description;
    counter = artpiece.tickets_bought
    ticketBought.textContent = `${counter} Tickets Bought`;

    artpiece.comments.forEach(comment => addComment(comment))
}

function addComment(comment) {
    const p = document.createElement('p');
    p.textContent = comment;
    commentSection.appendChild(p)

}

butTicketsButton.addEventListener('click', () => {
    counter++;
    ticketBought.textContent = `${counter} Tickets Bought`
})

commentForm.addEventListener('submit', e => {
    e.preventDefault();
    addComment(commentInput.value)
    commentForm.reset()
})

fetch('http://localhost:3000/current-exhibits')
.then(resp => resp.json())
.then(art => {
    art.forEach(artpiece => {
        showArt(artpiece)
    
    })


})

