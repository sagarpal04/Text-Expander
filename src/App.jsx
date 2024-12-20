import { useState } from "react";

const App = () => {
  const faqs = [
    {
      description:
        "Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible.",
      collapseText: "Show less",
      expandText: "Show more",
      highlightColor: "blue",
      previewLength: 10,
      isExpanded: false,
      hasBoxStyle: false,
    },
    {
      description:
        "Space travel requires some seriously amazing technology and collaboration between countries, private companies, and international space organizations. And while it's not always easy (or cheap), the results are out of this world. Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on Mars.",
      collapseText: "Collapse text",
      expandText: "Show text",
      highlightColor: "orange",
      previewLength: 20,
      isExpanded: false,
      hasBoxStyle: false,
    },
    {
      description:
        "Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!",
      collapseText: "Show less",
      expandText: "Show more",
      highlightColor: "blue",
      previewLength: 10,
      isExpanded: true,
      hasBoxStyle: true,
    },
  ];

  return (
    <div className="text-lg  flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <TextExpander key={index} {...faq} />
      ))}
    </div>
  );
};

function TextExpander({
  description,
  expandText,
  collapseText,
  highlightColor,
  previewLength,
  isExpanded,
  hasBoxStyle,
}) {
  const [isTextExpanded, setIsTextExpanded] = useState(isExpanded);

  const displayedText = isTextExpanded
    ? description
    : description.split(" ").slice(0, previewLength).join(" ") + "...";

  return (
    <div className={hasBoxStyle ? "p-3 bg-gray-50 border border-black" : ""}>
      <p>
        {displayedText}{" "}
        <span
          onClick={() => setIsTextExpanded((prevState) => !prevState)}
          style={{ color: highlightColor, cursor: "pointer" }}
        >
          {isTextExpanded ? collapseText : expandText}
        </span>
      </p>
    </div>
  );
}

export default App;
