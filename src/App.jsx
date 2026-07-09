function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          Yuliia Filippova
        </h1>

        <p className="text-2xl text-gray-300 mb-6">
          Looking for an early-career role in Applied AI & Data/ML/NLP Engineering
        </p>

        <div className="flex flex-col gap-2 text-gray-400 mb-8 text-lg">

          <p>
            📍 Antwerp, Belgium
          </p>

          <p>
            👍 Eligible to work in Belgium (residence permit holder)
          </p>

          <p>
            ✉️ yuliiafilippova00@gmail.com
          </p>

          <p>
            📞 +32 476 32 06 21
          </p>

        </div>

        <p className="max-w-3xl text-gray-400 text-lg leading-8 mb-10">
          Early-career AI and Data Science candidate with hands-on experience in machine learning, NLP, 
          multimodal AI and LLM-based systems. Experienced in developing data-driven and AI solutions 
          across text, vision and multimodal applications.

        </p>

        <div className="flex flex-wrap gap-4">

          <a
            href="https://github.com/YuliiaFilippova"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yuliia-filippova-9202a2279/"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-2xl hover:border-white transition"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-2xl font-semibold">
              Erasmushogeschool Brussel
            </h3>

            <p className="text-gray-400">
              Applied Artificial Intelligence - PGDip (2025-2026)
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              University of Antwerp
            </h3>

            <p className="text-gray-400">
              MA in Digital Text Analysis (2022-2024)
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              V.N. Karazin Kharkiv National University
            </h3>

            <p className="text-gray-400">
              Languages, Literature and Translation (English, German, Ukrainian, Russian) - BA (2017-2021)
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Python",
            "PyTorch",
            "TensorFlow",
            "scikit-learn",
            "spaCy",
            "NLTK",
            "Pandas",
            "Matplotlib",
            "NLP",
            "ML",
            "LLMs",
            "VLMs",
            "YOLO",
            "OpenCV",
            "Mediapipe",
            "HuggingFace",
            "Ollama",
            "FastAPI",
            "React",
            "Vite",
            "AWS (S3, ECR, ECS Fargate)",
            "Terraform",
            "Docker",
            "DVC",
            "MLflow",
            "GitHub Actions",
            "CI/CD",
            "Git",
            "R"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl text-gray-300"
            >
              {skill}
            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* PROJECT 1 */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-3xl font-semibold mb-4">
              Automatic Audio Description System
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Lightweight multimodal AI pipeline for generating automatic
              audio descriptions for short videos to improve accessibility
              for visually impaired users.
            </p>

            <p className="text-gray-500 leading-8 mb-8">
              The system combines VLMs, LLMs and local text-to-speech generation
              to create context-aware narrations and accessible videos.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Python",
                "VLMs (Qwen2-VL)",
                "LLMs",
                "Computer Vision",
                "FastAPI",
                "React",
                "Piper TTS",
                "FFmpeg",
                "Ollama"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/YuliiaFilippova/AI-AD-Generator"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-2xl font-medium"
              >
                View on GitHub
              </a>

              <a
                href="https://youtu.be/7Y4B_Su7y_k"
                target="_blank"
                className="border border-zinc-700 px-5 py-3 rounded-2xl font-medium text-gray-200 hover:border-white transition"
              >
                Demo Video
              </a>

            </div>

          </div>

          {/* PROJECT 2 */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-3xl font-semibold mb-4">
              Semantic Wildlife Monitoring from Public Livestreams
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Multimodal AI pipeline for transforming wildlife livestreams
              into structured semantic telemetry for ecological monitoring
              and behavioral analysis.
            </p>

            <p className="text-gray-500 leading-8 mb-8">
              The system performs real-time wildlife detection,
              semantic scene analysis and structured event generation
              using YOLOv8, VLMs, LLMs and OCR-based timestamp
              and temperature extraction.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Python",
                "YOLOv8",
                "VLMs (Qwen2-VL)",
                "LLMs",
                "OpenCV",
                "OCR",
                "Pandas",
                "FFmpeg",
                "yt-dlp",
                "Ollama"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/YuliiaFilippova/IoT-Project"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-2xl font-medium"
              >
                View on GitHub
              </a>

              <a
                href="https://www.youtube.com/watch?v=x2J2IYK3u1w"
                target="_blank"
                className="border border-zinc-700 px-5 py-3 rounded-2xl font-medium text-gray-200 hover:border-white transition"
              >
                Demo Video
              </a>

            </div>

          </div>

        </div>

      </section>

            {/* OTHER PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Other Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* PROJECT */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <h3 className="text-2xl font-semibold mb-4">
              Native Language Identification
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              ML pipeline for identifying the likely native language
              background of English-language writers using
              Reddit data and linguistic n-gram features.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "scikit-learn",
                "NLP",
                "SVM",
                "Feature Engineering"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>

                    {/* PROJECT */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <h3 className="text-2xl font-semibold mb-4">
              Corporate Bankruptcy Prediction
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Developed a machine learning pipeline for predicting corporate bankruptcy
              using financial indicators. The project focused on imbalanced classification,
              model comparison and evaluation with ROC-AUC, PR-AUC, precision, recall and
              confusion matrices.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "Pandas",
                "Scikit-learn",
                "PyTorch",
                "Random Forest",
                "XGBoost",
                "HistGradientBoosting",
                "SMOTE",
                "NN",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>

          {/* PROJECT */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <h3 className="text-2xl font-semibold mb-4">
              AI-Generated Text Detection
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Developed transformer-based and feature-based classifiers
              for detecting AI-generated text, achieving 97.3% accuracy
              with a fine-tuned BERT model.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "BERT",
                "Transformers",
                "NLP",
                "Classification"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>

          {/* PROJECT */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <h3 className="text-2xl font-semibold mb-4">
              Financial Sentiment Analysis
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Built an end-to-end ML pipeline for sentiment analysis
              of financial reports and news using TF-IDF,
              feature engineering and classical ML approaches.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "TF-IDF",
                "NLP",
                "LSTM",
                "Sentiment Analysis"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>

          {/* PROJECT */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <h3 className="text-2xl font-semibold mb-4">
              Translator Attribution Thesis
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Master's thesis focused on computational attribution
              of translator identity using lexical, syntactic
              and stylistic feature extraction techniques.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "NLP",
                "Stylometry",
                "Machine Learning",
                "Feature Extraction"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-black border border-zinc-700 px-3 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-10">

          <div className="border-l border-zinc-700 pl-6">
            <h3 className="text-2xl font-semibold">
              AI Research Intern (March 2026 - May)
            </h3>

            <p className="text-gray-400 mb-3">
              Research Centre for Preventive Health Innovation (EhB)
            </p>

            <p className="text-gray-500 leading-8">
              Developed a multimodal AI system for automated audio description
              generation to improve accessibility for visually impaired users.
            </p>
          </div>

          <div className="border-l border-zinc-700 pl-6">
            <h3 className="text-2xl font-semibold">
              NLP/Data Assistant (March - September 2024)
            </h3>

            <p className="text-gray-400 mb-3">
              Textgain
            </p>

            <ul className="list-disc pl-6 text-gray-400 leading-8 space-y-3 mt-6">

              <li>
                Developed and evaluated ML approaches for a Native Language
                Identification project.
              </li>

              <li>
                Supported CaLICO LLM development for harmful content detection
                by collecting, processing and annotating social media data.
              </li>

            </ul>

          </div>

          <div className="border-l border-zinc-700 pl-6">
            <h3 className="text-2xl font-semibold">
              ML Research Intern (March - June 2023)
            </h3>

            <p className="text-gray-400 mb-3">
              The Antwerp Centre for Digital Humanities and Literary Criticism(ACDC)
            </p>

            <ul className="list-disc pl-6 text-gray-400 leading-8 space-y-3 mt-6">

              <li>
                Worked on the Silent Voices project processing medieval Dutch
                manuscripts encoded in TEI-XML.
              </li>

              <li>
                Extracted text from XML files and built a structured database.
              </li>

              <li>
                Developed an ML/NLP approach for expanding medieval Dutch
                abbreviations in collaboration with the research team.
              </li>

            </ul>

          </div>

        </div>
      </section>


            {/* LANGUAGES */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Languages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              English
            </h3>

            <p className="text-gray-400">
              Professional working proficiency
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Ukrainian
            </h3>

            <p className="text-gray-400">
              Native
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Russian
            </h3>

            <p className="text-gray-400">
              Native
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Dutch
            </h3>

            <p className="text-gray-400">
              Currently learning — B1 level
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              German
            </h3>

            <p className="text-gray-400">
              Working proficiency
            </p>
          </div>

        </div>

      </section>

      {/* PUBLICATION */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <h2 className="text-4xl font-bold mb-10">
          Publication
        </h2>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-4xl">

          <p className="text-gray-400 leading-8 mb-6">
            Co-authored a research article with Professor Tatiana Lukianova
            at V. N. Karazin Kharkiv National University (2022).
          </p>

          <a
            href="https://filol.dspu.in.ua/index.php/filol/article/view/215"
            target="_blank"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition"
          >
            View Publication →
          </a>

        </div>

      </section>

      {/* INTERESTS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h3 className="text-xl text-gray-500 mb-5">
          Interests
        </h3>

        <div className="flex flex-wrap gap-3">

          {[
            "Movie Translation",
            "Music",
            "Nature",
            "Cycling",
            "Travelling"
          ].map((interest) => (
            <div
              key={interest}
              className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl text-gray-400 text-sm"
            >
              {interest}
            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default App