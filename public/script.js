async function generate() {
  const text = document.getElementById("text").value;

  const res = await fetch("http://localhost:3000/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const blob = await res.blob();
  const audio = document.getElementById("audio");
  audio.src = URL.createObjectURL(blob);
}
