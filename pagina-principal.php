<!DOCTYPE html>
<html>
<head>
    <title>Página Principal - Sistema de Gerenciamento de Tarefas</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
        .tarefa {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sistema de Gerenciamento de Tarefas</h1>
        <h2>Lista de Tarefas</h2>
        <?php
        // Simulação de lista de tarefas
        $tarefas = array(
            "Estudar para a prova de matemática",
            "Enviar relatório semanal",
            "Reunião com equipe de desenvolvimento"
        );

        // Exibe a lista de tarefas
        foreach ($tarefas as $tarefa) {
            echo "<div class='tarefa'>$tarefa</div>";
        }
        ?>
    </div>
</body>
</html>
