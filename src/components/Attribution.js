import config from "../data/config.json";

function Attribution() {
  return (
    <p className="attribute">
      {config.sections.attribution.p}
      <a href={config.sections.links.freepik} target="_blank" rel="noreferrer">
        {config.sections.attribution.a}
      </a>
    </p>
  );
}

export default Attribution;
