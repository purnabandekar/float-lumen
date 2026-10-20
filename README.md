# 🌊 FloatChat – AI-Powered ARGO Data Intelligence

FloatChat is a web-based ocean data intelligence platform designed to help users explore and understand oceanographic data collected by ARGO floats. It combines interactive visualizations, data analysis, and a conversational chatbot to make ocean data easier to access and interpret.

## 🚀 Features

- **AI/NLP Chatbot:** Understands natural-language questions about ocean parameters.
- **Text Processing:** Uses text preprocessing, tokenization, and intent recognition to interpret user queries.
- **Ocean Data Analysis:** Supports exploration of parameters such as temperature, salinity, and dissolved oxygen.
- **Interactive Map:** Helps visualize ocean locations and ARGO float information.
- **Data Visualization:** Presents ocean data through charts, tables, and analytics.
- **Ocean Insights:** Helps users explore ocean conditions and identify patterns in available data.
- **Responsive Interface:** Web-based interface for convenient access.

## 🧠 AI, NLP and Machine Learning

FloatChat incorporates natural-language processing techniques to interpret user questions and connect them with relevant ocean-data responses.

Depending on the implementation in the current chatbot file, these techniques may include:

- Text normalization and tokenization
- Intent classification
- Entity extraction
- Natural-language query handling
- AI-based intent classification, if the pretrained model integration is enabled

**Note:** The actual AI/ML capabilities depend on the code and model integration present in the repository. Rule-based intent detection alone should not be described as machine learning.

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Data Visualization:** Chart.js (where used)
- **Mapping:** Leaflet (where used)
- **NLP:** JavaScript-based text processing
- **AI Model:** Include the specific pretrained model or library only if it is integrated and working in the code

## 📂 Project Structure

```text
float-lumen/
├── chatbot(2).html   # Chatbot and NLP interface
├── oxygen.html       # Ocean oxygen data interface (if present)
├── map.html          # Map interface (if present)
├── README.md         # Project documentation
└── ...
```

The filenames above are examples; retain the exact filenames and capitalization in your GitHub repository.

## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open the required HTML file in a modern web browser.
4. If a feature depends on an external API or pretrained model, ensure you have an internet connection and configure any required access settings.

No separate project is required to use or extend the existing FloatChat code.

## 🎯 Project Objectives

- Make oceanographic data easier to explore.
- Enable natural-language interaction with ocean information.
- Present ocean parameters through visualizations and maps.
- Support ocean-data exploration for students, researchers, and other interested users.

## 🔮 Future Enhancements

- Integrate a trained NLP intent-classification model.
- Connect to live ARGO datasets or reliable ocean-data APIs.
- Add ocean-condition forecasting using machine learning.
- Improve chatbot responses using retrieval-augmented generation (RAG).
- Add multilingual query support and more detailed ocean insights.

## 👩‍💻 Author

**Purna Bandekar**

## 📄 License

Add a license file if you intend to distribute the project for reuse. Until then, no specific open-source license is declared.
