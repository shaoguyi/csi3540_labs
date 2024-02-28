<?php

$GLOBALS['appDir'] = __DIR__ . DIRECTORY_SEPARATOR . 'App';

spl_autoload_register(function ($className) {
    $className = str_replace("\\", DIRECTORY_SEPARATOR, $className);
    $file = $GLOBALS['appDir'] . DIRECTORY_SEPARATOR . $className . '.php';
    if (file_exists($file)) {
        require_once $file;
    } else {
        echo "Could not find class file for: " . $className;
    }
});
