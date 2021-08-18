import serialize from 'serialize-javascript';

export default function template(body, initialData, userData) {
  return `<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>Ecclessia -- Managing Congregant Care</title>
  <link rel="stylesheet" href="/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/css/bootswatch.css">
  <link rel="stylesheet" href="/css/calendar.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://apis.google.com/js/api:client.js"></script>
  <style>
    table.table-hover tr {cursor: pointer;}
    .panel-title a {display: block; width: 100%; cursor: pointer;}
  </style>
</head>
<body>
<!-- Page generated from template. -->
<div id="content">${body}</div>
<script>
  window.__INITIAL_DATA__ = ${serialize(initialData)}
  window.__USER_DATA__ = ${serialize(userData)}
</script>
<script src="/env.js"></script>
<script src="/vendor.bundle.js"></script>
<script src="/app.bundle.js"></script>
</body>
</html>
`;
}
