document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("inputElement");
    var h1 = document.getElementById("h1Element");
    var button = document.getElementById("submitButton");
    var button2 = document.getElementById("load");
    var load_h1 = document.getElementById("loadElement");

    // Кнопка для відправки даних
    button.addEventListener("click", function() {
        var send_data = input.value;

        // Зберігаємо в LocalStorage
        localStorage.setItem("savedData", send_data);

        h1.textContent = "Відправлено: " + send_data; // Відображаємо на сторінці
        input.value = ""; // Очищаємо поле інпуту після відправлення
    });

    // Кнопка для завантаження даних
    button2.addEventListener("click", function(){
        // Отримуємо дані з LocalStorage
        var loaded_data = localStorage.getItem("savedData");

        if (loaded_data) {
            load_h1.textContent = "Завантажено: " + loaded_data; // Відображаємо на сторінці
        } else {
            load_h1.textContent = "Даних не знайдено"; // Якщо даних немає
        }
    });
});
