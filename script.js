const chatbotKnowledgeBase = [
    
    {
        question: ["halo", "helo", "Hi", "Helo Admin", "Hi Admin"],
        answer: `
            Selamat datang! Apa yang bisa saya bantu? 🙏🏽😁
        `
    },
    {
        question: ["Apa produk yang dijual?", "Kamu jual apa?", "Produk apa tersedia?", "Produk yang tersedia"],
        answer: "Kami menjual kopi lokal Papua, kerajinan tangan, dan pakaian tenun khas."
    },
    {
        question: ["Jam buka", "Kapan buka?", "Jam operasional?"],
        answer: "Kami buka setiap hari pukul 08.00 - 20.00 WIT."
    },
    {
        question: ["Dimana lokasi toko?", "Alamatnya dimana?", "Toko ada di mana?", "Alamat"],
        answer: "Kami berlokasi di Jl. Raya Sentani No.123, Jayapura."
    },
    {
        question: ["Apakah bisa pesan online?", "Bisa delivery?", "Order online bisa?", "Cara pemesanan", "Pesan secara online"],
        answer: "Ya, kami menerima pesanan online melalui WhatsApp dan Instagram."
    },
    {
        question: ["Jenis kopi", "Jenis produk", "Kopi yang tersedia", "Berbagai jenis kopi Papua yang tersedia", "Kategori produk"],
        answer: "Kami menyediakan berbagai jenis kopi dari Papua, diantaranya: Paniai, Pegunungan Bintang, Biak, dan ..."
    },
    {
        question: ["Apa alamat website?", "Website apa?", "Link website", "Situs resminya apa?"],
        answer: 'Website resmi kami dapat diakses di <a href="https://mecoffee.org" target="_blank">www.mecoffee.org</a>.'
    },
    {
        question: ["Kopi Papua", "Gambar kopi", "Foto kopi", "Tampilkan kopi", "Organic Arabica Papua","Arabica"],
        answer: `
            Kami menyediakan Kopi Papua berkualitas tinggi dari Pegunungan Bintang.<br>
            <a href="https://mecoffee.org/" target="_blank"><img src="https://mecoffee.org/products/kopi-papua.png" alt="Kopi Papua" style="max-width: 200px; border-radius: 10px; margin-top: 10px;"></a>
        `
    }
];


function findAnswer(userMessage) {
    const msg = userMessage.toLowerCase();
    for (const intent of chatbotKnowledgeBase) {
        if (intent.question.some(q => msg.includes(q.toLowerCase()))) {
            return intent.answer;
        }
    }
    return "Maaf, saya belum memahami pertanyaan itu. Silakan hubungi admin.";
}

function checkEnter(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatlog = document.getElementById("chatlog");
    const userMsg = input.value.trim();

    if (!userMsg) return;

    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<strong>Anda:</strong> ${userMsg}`;
    chatlog.appendChild(userDiv);

    const botResponse = findAnswer(userMsg);

    const botDiv = document.createElement("div");
    botDiv.innerHTML = `<strong>Bot:</strong> ${botResponse}`;
    chatlog.appendChild(botDiv);

    input.value = "";
    chatlog.scrollTop = chatlog.scrollHeight;
}
