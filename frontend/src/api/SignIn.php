<?php
header('Content-Type: application/json');
$host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'femmeshistoire';

$conn = new mysqli($host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

$prenom = $data['prenom'];
$nom = $data['nom'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hasher le mot de passe

$query = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ssss", $prenom, $nom, $email, $password);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>
