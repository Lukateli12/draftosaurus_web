<?php
require_once __DIR__ . "/config.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || !isset($input['players']) || !is_array($input['players'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Formato inválido: se esperaba { players: [{ name, score }] }']);
    exit;
}

$inserted = 0;
$updated = 0;


$stmt = $conn->prepare(
    "INSERT INTO ranking_tracking (user_name_rt, score_rt)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE score_rt = score_rt + VALUES(score_rt)"
);

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Error preparando statement']);
    exit;
}

foreach ($input['players'] as $pl) {
    $name = isset($pl['name']) ? trim($pl['name']) : '';
    $score = isset($pl['score']) ? intval($pl['score']) : 0;

    if ($name === '' || $score < 0) {
        continue;
    }
    // Limitar longitud de nombre a 20 caracteres
    if (mb_strlen($name) > 20) {
        $name = mb_substr($name, 0, 20);
    }

    $stmt->bind_param('si', $name, $score);
    if ($stmt->execute()) {
        if ($stmt->affected_rows === 1) $inserted++;
        else if ($stmt->affected_rows === 2) $updated++;
    }
}

$stmt->close();
$conn->close();

echo json_encode(['ok' => true, 'inserted' => $inserted, 'updated' => $updated]);
