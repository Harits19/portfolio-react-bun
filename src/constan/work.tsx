import assets from "./assets";

export const work = [
  {
    image: assets.image.oneEngageWeb,
    name: "Wedding Invitation",
    desc: "Sebuah aplikasi tentang undangan pernikahan yang sudah saya lakukan tahun lalu. Aplikasi ini bertujuan untuk mengembangkan skill frontend saya yang berkaitan dengan animasi dan bentuk-bentuk unik didalam desainnya.",
    link: "https://harits19.github.io/wedding-app/",
    skill: ["React JS", "Next JS"],
  },
  {
    image: assets.image.oneEngageWeb,
    name: "1ENGAGE",
    desc: "Sebuah sistem aplikasi yang memanfaatkan API Whatsapp untuk melakukan broadcast, chatbot, dan analisis data. Broadcast yang dilakukan memiliki design microservice dan event driven architecture yang menggunakan Google Pub/Sub sebagai message brokernya sehingga broadcast dapat dilakukan secara cepat dan efisien. Kemudian dengan adanya chatbot dapat mempermudah user dari client untuk melakukan transaksi ataupun komunikasi hanya dengan menggunakan pesan whatsapp. Dari hasil jawaban chatbot yang diberikan user dapat dilakukan analisis data sehingga dapat diketahui behavior user yang melakukan transaksi.",
    link: "https://www.1engage.ai/",
    skill: [
      "React JS",
      "Next JS",
      "Express JS",
      "Google Pub/Sub",
      "Google Storage",
      "React Native",
      "Antd Design",
      "React Query",
      "React Hook Form",
    ],
  },
  {
    image: assets.image.primasaver,
    name: "Primasaver",
    desc: "This is a project regarding the creation of the flutter application and the golang backend to manage user power consumption data",
    link: "https://primasaver.com/home",
    skill: ["Flutter", "Go", "MongoDB", "MQTT"],
  },
  {
    image: assets.image.batumbu,
    name: "Batumbu",
    desc: "Make an application to accommodate funders and borrowers of funds in the MSME environment. In it I implement designs, integrate APIs, and resolve existing bugs.",
    link: "https://batumbu.id/en",
    skill: ["Flutter", "Provider"],
  },
];
