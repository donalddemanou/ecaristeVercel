<?php
/**
 * Bibliothèque d'icônes SVG inline (traits, 24x24, currentColor).
 * Un seul point d'entrée pour toutes les icônes du site : ajouter une icône
 * ici la rend disponible partout via icon('nom').
 */

function icon(string $name, string $class = ''): string
{
    $paths = [
        'truck'    => '<path d="M2 8h11v8H2z"/><path d="M13 11h4l4 3v2h-8z"/><circle cx="6.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/>',
        'globe'    => '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z"/>',
        'warehouse'=> '<path d="M3 21V10l9-5 9 5v11z"/><path d="M9 21v-7h6v7"/>',
        'package'  => '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v9l9 5 9-5V8"/><path d="M12 13v9"/>',
        'clock'    => '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
        'building' => '<path d="M4 21V4h9v17"/><path d="M13 9h7v12h-7"/><path d="M7 8h2M7 12h2M7 16h2"/>',
        'monitor'  => '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
        'pin'      => '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
        'gear'     => '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1 5.6 5.6"/>',
        'doc'      => '<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5M9 13h6M9 17h6"/>',
        'star'     => '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.8-4.6 6.6-.9z"/>',
        'check'    => '<path d="M20 6 9 17l-5-5"/>',
        'arrow-right' => '<path d="M5 12h14M13 6l6 6-6 6"/>',
        'chevron-down' => '<path d="M6 9l6 6 6-6"/>',
        'chevron-left' => '<path d="M15 18l-6-6 6-6"/>',
        'chevron-right' => '<path d="M9 18l6-6-6-6"/>',
        'menu'     => '<path d="M3 6h18M3 12h18M3 18h18"/>',
        'close'    => '<path d="M18 6 6 18M6 6l12 12"/>',
        'phone'    => '<path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 0-2z"/>',
        'mail'     => '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
        'facebook' => '<path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9a1 1 0 0 1 1-1z"/>',
        'linkedin' => '<rect x="3" y="9" width="4" height="11"/><circle cx="5" cy="5" r="2"/><path d="M11 20v-7a3 3 0 0 1 6 0v7M11 9v11"/>',
        'whatsapp' => '<path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 19z"/><path d="M9 9.5c.3 2.6 2.9 5.2 5.5 5.5.6.1 1.5-.9 1-1.4l-1.7-1.1-1 .8c-.8-.4-1.7-1.3-2.1-2.1l.8-1-1.1-1.7c-.5-.5-1.5.4-1.4 1z"/>',
    ];

    $body = $paths[$name] ?? '';

    return '<svg class="icon ' . htmlspecialchars($class) . '" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $body . '</svg>';
}
