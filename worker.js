// Обработка сообщений, отправленных worker-у

self.addEventListener("message", function(messageEvent) {
  if (messageEvent.data === "hello") {
    self.postMessage("И вам не болеть!");
  }

  if (messageEvent.data === "recurring") {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => self.postMessage(new Date()), i * 1000);
    }
  }
});
