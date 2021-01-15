const editorThemesAll = [
  "a11y-dark.css",
  "a11y-light.css",
  "agate.css",
  "an-old-hope.css",
  "androidstudio.css",
  "arduino-light.css",
  "arta.css",
  "ascetic.css",
  "atelier-cave-dark.css",
  "atelier-cave-light.css",
  "atelier-dune-dark.css",
  "atelier-dune-light.css",
  "atelier-estuary-dark.css",
  "atelier-estuary-light.css",
  "atelier-forest-dark.css",
  "atelier-forest-light.css",
  "atelier-heath-dark.css",
  "atelier-heath-light.css",
  "atelier-lakeside-dark.css",
  "atelier-lakeside-light.css",
  "atelier-plateau-dark.css",
  "atelier-plateau-light.css",
  "atelier-savanna-dark.css",
  "atelier-savanna-light.css",
  "atelier-seaside-dark.css",
  "atelier-seaside-light.css",
  "atelier-sulphurpool-dark.css",
  "atelier-sulphurpool-light.css",
  "atom-one-dark-reasonable.css",
  "atom-one-dark.css",
  "atom-one-light.css",
  "brown-paper.css",
  "codepen-embed.css",
  "color-brewer.css",
  "darcula.css",
  "dark.css",
  "default.css",
  "docco.css",
  "far.css",
  "foundation.css",
  "github-gist.css",
  "github.css",
  "gml.css",
  "gradient-dark.css",
  "gradient-light.css",
  "grayscale.css",
  "gruvbox-dark.css",
  "gruvbox-light.css",
  "hopscotch.css",
  "hybrid.css",
  "idea.css",
  "ir-black.css",
  "isbl-editor-light.css",
  "kimbie.dark.css",
  "kimbie.light.css",
  "lightfair.css",
  "lioshi.css",
  "magula.css",
  "mono-blue.css",
  "monokai-sublime.css",
  "monokai.css",
  "night-owl.css",
  "nnfx-dark.css",
  "nord.css",
  "obsidian.css",
  "paraiso-dark.css",
  "paraiso-light.css",
  "pojoaque.css",
  "purebasic.css",
  "qtcreator_dark",
  "qtcreator_light",
  "railscasts.css",
  "rainbow.css",
  "routeros.css",
  "school-book.css",
  "shades-of-purple.css",
  "solarized-dark.css",
  "solarized-light.css",
  "srcery.css",
  "stackoverflow-dark.css",
  "stackoverflow-light.css",
  "sunburst.css",
  "tomorrow-night-blue.css",
  "tomorrow-night-bright.css",
  "tomorrow-night-eighties.css",
  "tomorrow-night.css",
  "tomorrow.css",
  "vs.css",
  "xcode.css",
  "zenburn.css",
];

const editorThemes = {
  Default: "default",
  TomorrowNight: "tomorrow-night",
  AtomDark: "atom-one-dark",
  AtomLight: "atom-one-light",
};

const editorLanguagesAll = [
  ".properties",
  "Apache",
  "config",
  "Bash",
  "C",
  "C#",
  "C++",
  "CSS",
  "CoffeeScript",
  "Diff",
  "Go",
  "HTML",
  "XML",
  "HTTP",
  "JSON",
  "Java",
  "JavaScript",
  "Kotlin",
  "Less",
  "Lua",
  "Makefile",
  "Markdown",
  "Nginx",
  "config",
  "Objective-C",
  "PHP",
  "PHP Template",
  "Perl",
  "Plain text",
  "Python",
  "Python REPL",
  "R",
  "Ruby",
  "Rust",
  "SCSS",
  "SQL",
  "Shell",
  "Session",
  "Swift",
  "TOML also INI",
  "TypeScript",
  "Visual Basic",
  ".NET",
  "YAML",
];

// function to display the theme menu
const addThemeMenu = () => {
  let themeMenu = document.createElement("select");
  themeMenu.name = "Themes";
  themeMenu.id = "theme-menu";
  let option = document.createElement("option");
  option.value = "";
  option.text = "Select Theme";
  themeMenu.appendChild(option);
  for (const theme in editorThemes) {
    let option = document.createElement("option");
    option.value = editorThemes[theme];
    option.text = theme;
    themeMenu.appendChild(option);
  }
  let themeLabel = document.createElement("label");
  themeLabel.innerHTML = "Choose a Theme : ";
  themeLabel.htmlFor = "theme-menu";
  themeLabel.id = "theme-menu-label";
  document
    .getElementById("theme-selector")
    .appendChild(themeLabel)
    .appendChild(themeMenu);
  themeMenu.addEventListener("change", setTheme);
};

// function to change the theme
const setTheme = () => {
  const ThemeLink = document.getElementById("theme-link");
  const newHref =
    "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/" +
    document.getElementById("theme-menu").value +
    ".min.css";
  ThemeLink.setAttribute("href", newHref);
};

// initalizatin function call
addThemeMenu();
