<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Center Aligned Page</title>
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<script>
    // Function to redirect to fast.com
    function redirectToFast() {
        window.location.href = 'https://fast.com';
    }
</script>

<button onclick="redirectToFast()">Go to fast.com</button>

</body>
</html>
