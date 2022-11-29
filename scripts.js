const worker = new Worker("worker.js");

if (navigator.serviceWorker.controller) {
  console.log('Service worker уже установлен, повторная регистрация не нужна!')
} else {
  navigator.serviceWorker.register('./serviceworker.js', {
    scope: '.'
  }).then(function(reg) {
    console.log('Service worker успешно зарегистирирован для области действия: '+ reg.scope);
  });
}

function sendMessageToWorker() {
  worker.postMessage("hello");
}

function askWorkerRecurringTask() {
  worker.postMessage("recurring");
}

worker.addEventListener("message", function(messageEvent) {
  const log = document.createElement("p");
  log.textContent = messageEvent.data;
  document.querySelector("output").prepend(log);
});

