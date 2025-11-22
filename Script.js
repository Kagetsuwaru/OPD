

// Автоматическое изменение размера canvas
function resizeUnityCanvas() {
    const canvas = document.querySelector("#unity-canvas");
    const container = document.querySelector("#unity-container");
    
    if (window.innerWidth <= 1280) {
        canvas.style.width = "100%";
        canvas.style.height = "auto";
    } else {
        canvas.style.width = "1280px";
        canvas.style.height = "720px";
    }
}

// Обработчик изменения размера окна
window.addEventListener('resize', resizeUnityCanvas);
window.addEventListener('load', resizeUnityCanvas);

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('Unity loading error:', e);
    const warning = document.querySelector("#unity-warning");
    warning.style.display = "block";
    warning.textContent = "Ошибка загрузки игры. Пожалуйста, обновите страницу.";
});

// Проверка поддержки WebGL
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext && 
              (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch(e) {
        return false;
    }
}

// Проверка при загрузке
document.addEventListener('DOMContentLoaded', function() {
    if (!checkWebGLSupport()) {
        alert("Ваш браузер не поддерживает WebGL. Пожалуйста, обновите браузер.");
    }
});