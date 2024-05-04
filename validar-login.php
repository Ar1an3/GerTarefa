<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Valida as credenciais (simulação simples)
    $emailValido = "usuario@teste.com";
    $senhaValida = "123456";

    $email = $_POST["email"];
    $senha = $_POST["senha"];

    if ($email === $emailValido && $senha === $senhaValida) {
        // Credenciais válidas, redireciona para a página principal
        header("Location: pagina-principal.php");
        exit();
    } else {
        // Credenciais inválidas, redireciona de volta para o formulário de login
        header("Location: index.html");
        exit();
    }
} else {
    // Se o formulário não foi enviado, redireciona para o formulário de login
    header("Location: index.html");
    exit();
}
?>
