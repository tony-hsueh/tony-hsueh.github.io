let home = document.querySelector('#home');
let experience = document.querySelector('#experience');
let portfolio = document.querySelector('#portfolio');
let contact = document.querySelector('#contact');
let navbar = document.querySelectorAll('.navbar li');
navbar.forEach(el=>{
    el.addEventListener('click',(e)=>{
        switch (el.id){
            case 'experience':
                home.style.color = 'black';
                experience.style.color = 'rgb(212, 107, 107)';
                portfolio.style.color = 'black';
                contact.style.color = 'black';
            break;
            case 'portfolio':
                home.style.color = 'black';
                experience.style.color = 'black';
                portfolio.style.color = 'rgb(212, 107, 107)';
                contact.style.color = 'black';
            break;
            case 'contact':
                home.style.color = 'black';
                experience.style.color = 'black';
                portfolio.style.color = 'black';
                contact.style.color = 'rgb(212, 107, 107)';
            break;
            default:
                home.style.color = 'rgb(212, 107, 107)';
                experience.style.color = 'black';
                portfolio.style.color = 'black';
                contact.style.color = 'black';  
        }   
    })
});
