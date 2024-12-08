async function uploadFile(file) {
    const metadata = {
        'name': file.name,
        'parents': ['1yOK5ZLI5uM777KkqhtRToOW3wAdXs6YI'] // ID вашей папки
    };

    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
    form.append("file", file);

    const response = await fetch(`https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&key=AIzaSyC1WifODk4-mbPnQQhUOMv7OK8XPNQOTF4`, {
        method: "POST",
        headers: new Headers({ "Authorization": "Bearer " + YOUR_SERVICE_ACCOUNT_TOKEN }), // Замените на ваш токен
        body: form
    });

    if (response.ok) {
        console.log("Файл загружен успешно.");
    } else {
        console.error("Ошибка при загрузке файла:", response.statusText);
    }
}
