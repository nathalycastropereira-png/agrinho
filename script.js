function verificarPlanta(nivelSol) {
    const resultadoDiv = document.getElementById('resultado');
    
    // Remove a classe hidden para mostrar a caixinha de texto
    resultadoDiv.classList.remove('hidden');
    
    // Altera o texto dependendo da escolha do usuário
    if (nivelSol === 'pouco') {
        resultadoDiv.innerHTML = "<h3>💡 Recomendação: Hortelã ou Hortaliças de folhas!</h3><p>Espaços com menos sol são ótimos para ervas como hortelã, boldo, ou folhas como rúcula e espinafre.</p>";
    } else if (nivelSol === 'medio') {
        resultadoDiv.innerHTML = "<h3>💡 Recomendação: Alface e Cebolinha!</h3><p>O sol parcial é perfeito para a maioria das alfaces, cebolinha, salsa e coentro. Eles vão crescer lindos!</p>";
    } else if (nivelSol === 'muito') {
        resultadoDiv.innerHTML = "<h3>💡 Recomendação: Tomate Cereja ou Pimenta!</h3><p>Ganha muito sol? Aproveite para plantar frutos! Tomatinhos, pimentas e até morangos adoram luz solar direta por várias horas.</p>";
    }
}
