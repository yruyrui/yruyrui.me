import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - NLP Researcher" },
    { name: "description", content: "Learn more about my research background" },
  ];
}

export default function About() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="text-lg text-gray-600">
          I am a passionate NLP researcher dedicated to advancing the field of
          natural language processing through innovative research and practical
          applications.
        </p>
      </section>

      {/* Background */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Background</h2>
        <p className="text-gray-700 leading-relaxed">
          With a strong foundation in computer science and linguistics, I have
          dedicated my career to understanding how machines can process,
          interpret, and generate human language. My research spans across
          multiple domains including deep learning, transformer models, and
          multilingual NLP.
        </p>
      </section>

      {/* Research Interests */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Research Interests</h2>
        <ul className="space-y-3">
          {[
            "Large Language Models and Pre-trained Architectures",
            "Natural Language Understanding and Semantic Parsing",
            "Multilingual and Cross-lingual Transfer Learning",
            "Information Extraction and Named Entity Recognition",
            "Low-resource Language Processing",
            "Efficient NLP and Model Compression",
          ].map((interest, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gray-900 font-semibold">•</span>
              <span className="text-gray-700">{interest}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
        <div className="space-y-6">
          {[
            {
              title: "Senior NLP Researcher",
              organization: "Research Institute",
              period: "2023 - Present",
              description:
                "Leading research projects on multilingual language models and semantic understanding.",
            },
            {
              title: "NLP Engineer",
              organization: "Tech Company",
              period: "2021 - 2023",
              description:
                "Developed and deployed NLP solutions for information extraction and text classification.",
            },
            {
              title: "Research Assistant",
              organization: "University",
              period: "2019 - 2021",
              description:
                "Conducted research on transformer architectures and pre-training methodologies.",
            },
          ].map((exp, i) => (
            <div key={i} className="border-l-4 border-gray-900 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600">{exp.organization}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">ML Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "TensorFlow", "Hugging Face", "JAX"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "C++", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
