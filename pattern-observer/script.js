const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');

// observer1
function sendToGoogleAnalytics(data) {
    console.log('Sent to Google analytics: ', data);
}

// observer2
function sendToCustomAnalytics(data) {
    console.log('Sent to custom analytics: ', data);
}

// observer3
function sendToEmail(data) {
    console.log('Sent to email: ', data);
}

const observers = []; 
const Observer = Object.freeze({
    notify: (data) => observers.forEach((observer) => observer(data)),
    subscribe: (func) => observers.push(func),
    unsubscribe: (func) => {
        [...observers].forEach((observer, index) => {
            if (observer === func) {
                observers.splice(index, 1);
            }
        });
    },
});

// 관찰 시작
Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);

// 모든 observer에게 notify를 보냄
pinkBtn.addEventListener('click', () => {
    const data = '🎀 Click on pink button! 🎀';
    Observer.notify(data);

});

// 모든 observer에게 notify를 보냄
blueBtn.addEventListener('click', () => {
    const data = '🦋 Click on blue button! 🦋';
    Observer.notify(data);
});

