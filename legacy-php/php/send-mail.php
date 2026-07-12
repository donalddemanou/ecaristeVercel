<?php
/**
 * Traitement du formulaire de contact : validation, anti-spam (honeypot),
 * envoi par mail() et réponse JSON pour l'appel AJAX (fallback redirect sinon).
 */

$config = require __DIR__ . '/../config.php';

// Tamponne toute sortie accidentelle (warning mail(), notice PHP...) pour que
// la réponse JSON reste toujours valide, quel que soit l'hébergeur.
ob_start();

function respond(bool $success, array $errors = [], int $code = 200): void
{
    global $config;
    $wantsJson = (
        (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
        || (isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json'))
    );

    if ($wantsJson) {
        ob_clean();
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($code);
        echo json_encode(['success' => $success, 'errors' => $errors]);
        exit;
    }

    ob_end_clean();

    $target = rtrim($config['site_url'], '/') . '/contact.php';
    header('Location: ' . $target . ($success ? '?sent=1' : '?error=1'));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, ['form' => 'Requête invalide.'], 405);
}

// Honeypot : champ invisible que seuls les robots remplissent.
if (!empty($_POST['website'])) {
    respond(true);
}

$name    = trim(strip_tags($_POST['name'] ?? ''));
$email   = trim($_POST['email'] ?? '');
$phone   = trim(strip_tags($_POST['phone'] ?? ''));
$service = trim(strip_tags($_POST['service'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

$errors = [];
if ($name === '' || mb_strlen($name) < 2) {
    $errors['name'] = 'Merci d\'indiquer votre nom.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Adresse e-mail invalide.';
}
if ($message === '' || mb_strlen($message) < 10) {
    $errors['message'] = 'Merci de décrire votre demande (10 caractères minimum).';
}

if (!empty($errors)) {
    respond(false, $errors, 422);
}

$to      = $config['contact']['email'];
$subject = '[Site ECARISTE] Nouvelle demande de contact' . ($service !== '' ? ' — ' . $service : '');

$body  = "Nouvelle demande reçue depuis le site ecariste.com\n\n";
$body .= "Nom : {$name}\n";
$body .= "E-mail : {$email}\n";
$body .= "Téléphone : " . ($phone !== '' ? $phone : 'non renseigné') . "\n";
$body .= "Service concerné : " . ($service !== '' ? $service : 'non précisé') . "\n\n";
$body .= "Message :\n{$message}\n";

$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeName  = str_replace(["\r", "\n"], '', $name);

$headers   = [];
$headers[] = 'From: ' . $config['site_name'] . ' <no-reply@ecariste.com>';
$headers[] = 'Reply-To: ' . $safeName . ' <' . $safeEmail . '>';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

respond($sent, $sent ? [] : ['form' => "L'envoi a échoué, merci de réessayer ou de nous contacter par téléphone."], $sent ? 200 : 500);
