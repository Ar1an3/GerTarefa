import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.TextField;

public class Controller {

    @FXML
    private TextField emailField;

    @FXML
    private TextField senhaField;

    public void login(ActionEvent event) {
        String email = emailField.getText();
        String senha = senhaField.getText();

        // Verificar autenticação no banco de dados e redirecionar para a tela principal
        // Se autenticação falhar, exibir mensagem de erro
        if (!autenticar(email, senha)) {
            exibirErro("Erro de Autenticação", "E-mail ou senha inválidos");
        }
    }

    private boolean autenticar(String email, String senha) {
        // Implementar autenticação no banco de dados
        return false; // Retornar true se autenticação for bem sucedida
    }

    private void exibirErro(String titulo, String mensagem) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle(titulo);
        alert.setHeaderText(null);
        alert.setContentText(mensagem);
        alert.showAndWait();
    }
}
