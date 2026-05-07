const button = document.querySelector('button');
const follow = document.querySelector('span');

let intervalId = 0;
let count = 0;
let isFollowing = false;

const moreFollow = () => {
    follow.innerHTML = count;
};

button.addEventListener('click', () => {
    if (!isFollowing) {
        isFollowing = true;
        button.innerHTML = 'Following';
        button.style.background = '#b4a3d2';

        intervalId = setInterval(() => {
            count = +1; 
            moreFollow();
        }, 100);

    } else {
        isFollowing = false;
        button.innerHTML = 'Follow';
        button.style.background = '';
        clearInterval(intervalId); 
        count = 0;                 
        moreFollow();              
    }
});