# 🎓 Doubt Solving Tutor Bot

> An intelligent, NLP-powered educational chatbot that helps students resolve academic doubts instantly — available 24/7, no external AI API required.

![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs)
![NLP](https://img.shields.io/badge/NLP-TF--IDF%20%2B%20Cosine%20Similarity-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 About The Project

The **Doubt Solving Tutor Bot** is a web-based AI chatbot designed to act as a virtual tutor for students. Instead of waiting for the next class or feeling hesitant to ask questions, students can simply type their doubts and receive clear, subject-specific explanations instantly.

Unlike most AI chatbots that rely on external APIs, this system uses **TF-IDF vectorization** and **Cosine Similarity** — core Natural Language Processing techniques — to match student queries to the most relevant answer from a curated knowledge base of **197 question-answer pairs** across multiple subjects.

---

## ✨ Features

- 🕐 **24/7 Availability** — Get help anytime, no waiting for a teacher
- 🧠 **NLP-Based Matching** — Uses TF-IDF and Cosine Similarity to find the best answer
- 📚 **197 Q&A Pairs** — Covers Mathematics, Science, History, English, Computer Science, and more
- 💬 **Conversational Interface** — Clean chat UI with student and bot message bubbles
- 🔒 **No External API** — Fully self-contained, works without internet dependency
- ⚡ **Fast Response** — Instant answers with match confidence score
- 📱 **Responsive Design** — Works on desktop and mobile browsers
- 🛡️ **Graceful Fallback** — Helpful message when no match is found in the dataset

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React.js | Interactive chat user interface |
| Backend | Node.js + Express.js | REST API server |
| NLP | `natural` (Node.js library) | TF-IDF vectorization |
| Algorithm | Cosine Similarity | Query-to-answer matching |
| Knowledge Base | Custom JSON dataset | 197 curated Q&A pairs |
| HTTP Client | Axios | Frontend-to-backend requests |
| Styling | CSS-in-JS | Chat bubble styling |
| Version Control | Git + GitHub | Source code management |
| Dev Tool | VS Code | Development environment |

---

## 🧠 How It Works

```
Student types a question
         ↓
TF-IDF converts the question into a numerical vector
(important words get higher scores)
         ↓
Cosine Similarity compares the vector
against all 197 dataset questions
         ↓
Best matching question is identified
(highest similarity score wins)
         ↓
The linked answer is returned to the student
```

### NLP Techniques Used

**TF-IDF (Term Frequency - Inverse Document Frequency)**
- Converts words in a question into numerical scores
- Words that are specific and meaningful get higher scores
- Common words like "the", "is", "a" get lower scores

**Cosine Similarity**
- Measures the angle between two text vectors
- Score of 1.0 = perfect match
- Score of 0.0 = completely different
- The dataset question with the highest score is selected as the answer

---

## 📁 Project Structure

```
doubt-solving-tutor-bot/
├── backend/
│   ├── dataset.json          ← 197 curated Q&A pairs
│   ├── server.js             ← Node.js + Express server with NLP logic
│   ├── package.json
│   └── .env                  ← Environment variables (not on GitHub)
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatMessage.js  ← Individual chat bubble component
│   │   ├── App.js              ← Main chat application
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## 📚 Subjects Covered in Dataset

| Subject | Topics Included |
|---------|----------------|
| 🔬 Biology | Photosynthesis, DNA, Mitosis, Meiosis, Human body systems, Heredity, Evolution |
| ⚛️ Physics | Newton's Laws, Gravity, Waves, Electricity, Optics, Thermodynamics |
| 🧪 Chemistry | Acids/Bases, Periodic Table, Chemical Reactions, States of Matter |
| ➗ Mathematics | Algebra, Fractions, Trigonometry, Probability, Interest, Linear Transformations |
| 📐 Linear Algebra | Linear Transformations, Kernel, Image, Rank-Nullity, Eigenvalues, Matrix Representation |
| 📜 History | World Wars, French Revolution, Gandhi, Mughal Empire, Industrial Revolution |
| 🌍 Geography | Climate, Rivers, Mountains, Earthquakes, Volcanoes, Tectonic Plates |
| 💻 Computer Science | AI, Machine Learning, Programming, HTML, CSS, JavaScript, Python |
| 📖 English | Grammar, Literary Devices, Tenses, Active/Passive Voice |
| 🏛️ Civics | Democracy, Indian Constitution, Fundamental Rights, United Nations |
| 💰 Economics | GDP, Inflation, Supply and Demand, Globalisation |
| 🌱 Environment | Climate Change, Biodiversity, Pollution, Sustainable Development |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/fathimaak/tutor-bot.git
cd tutor-bot
```

**2. Set up the Backend**
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
PORT=5000
```

Start the backend server:
```bash
node server.js
```

You should see:
```
✅ Server running on http://localhost:5000
📚 Dataset loaded with 197 questions
```

**3. Set up the Frontend** (open a new terminal)
```bash
cd frontend
npm install
npm start
```

Your browser will open automatically at `http://localhost:3000` 🎉

---

## 💬 Usage

1. Open `http://localhost:3000` in your browser
2. Type any academic question in the input box
3. Press **Enter** or click **Send**
4. TutorBot will find the best matching answer from the dataset
5. Continue the conversation by asking follow-up questions

### Example Questions You Can Ask:
- `What is photosynthesis?`
- `Explain Newton's second law`
- `What is the Pythagorean theorem?`
- `What caused World War 2?`
- `What is a linear transformation?`
- `What is the kernel of a linear transformation?`
- `Explain cosine similarity`
- `What is DNA?`

---

## 📸 Screenshots

### Chat Interface
![TutorBot UI](Screenshot%202026-03-10%20123028.png)

---

## 🔧 API Reference

### POST `/ask`

Receives a student question and returns the best matching answer.

**Request Body:**
```json
{
  "messages": [
    { "role": "user", "content": "What is gravity?" }
  ]
}
```

**Response:**
```json
{
  "reply": "Gravity is a natural force that attracts objects with mass toward each other...\n\n---\n📊 Match confidence: 94.3%"
}
```


---

## 🔮 Future Improvements

- [ ] Expand the dataset to 500+ questions across more subjects
- [ ] Add support for multiple languages (Malayalam, Hindi)
- [ ] Implement voice input and text-to-speech output
- [ ] Deploy online (Vercel + Render) for public access
- [ ] Add a quiz mode where the bot generates practice questions
- [ ] Add user authentication and session history
- [ ] Implement feedback mechanism to improve dataset quality

---

## 📄 References

1. Manning, C.D., Raghavan, P., and Schütze, H., *Introduction to Information Retrieval*, Cambridge University Press, 2008.
2. *Natural — NLP Library for Node.js* — https://github.com/NaturalNode/natural
3. *React Documentation* — https://react.dev
4. *Node.js Documentation* — https://nodejs.org/en/docs

---

