{ pkgs, ... }: {
  channel = "unstable";
  packages = [
    pkgs.bun
    pkgs.jdk23
    pkgs.nodejs_23
  ];
  env = { };
  idx = {
    extensions = [
      "oven.bun-vscode"
      "dbaeumer.vscode-eslint"
      "biomejs.biome"
      "njzy.stats-bar"
      "DigitalBrainstem.javascript-ejs-support"
      "SonarSource.sonarlint-vscode"
      "GitHub.vscode-github-actions"
      "anwar.resourcemonitor"
    ];
  };
}
