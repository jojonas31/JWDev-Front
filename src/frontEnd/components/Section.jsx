import "./Colors.css";

function Section({ children, border, className = "" }) {
  return (
    <section
      className={
        "flex flex-col box-border justify-center " +
        (border ? "border-2 border-jw-primary rounded-xl " : " ") +
        className
      }
    >
      {children}
    </section>
  );
}

export default Section;
